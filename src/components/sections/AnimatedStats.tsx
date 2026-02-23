"use client";

import { useEffect, useRef, useState } from "react";
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

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericMatch = value.match(/^[\$]?([\d,.]+)/);
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.replace(/^[\$]?[\d,.]+/, "");

  useEffect(() => {
    if (!inView || !numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numericMatch[1].replace(/,/g, ""));
    const duration = 1500;
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
  }, [inView, value, numericMatch, prefix, suffix]);

  if (!numericMatch) return <span>{inView ? value : "0"}</span>;
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
