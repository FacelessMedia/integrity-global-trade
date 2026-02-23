"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { STATS } from "@/lib/constants";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function parseValue(value: string) {
  const match = value.match(/^(\$)?([\d,.]+)(.*)/);
  if (!match) return null;
  return {
    prefix: match[1] || "",
    target: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3] || "",
  };
}

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || !parsed || hasAnimated.current) return;
    hasAnimated.current = true;

    const { prefix, target, suffix } = parsed;
    const duration = 1800;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      if (target >= 1000) {
        setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      } else {
        setDisplay(`${prefix}${current}${suffix}`);
      }

      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, parsed]);

  return <span>{display}</span>;
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="relative bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-600 mb-2 tabular-nums">
                <AnimatedValue value={stat.value} inView={inView} />
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
