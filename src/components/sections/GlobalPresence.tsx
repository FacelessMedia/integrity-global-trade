"use client";

import { useRef, useState, useEffect } from "react";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", x: 22, y: 35 },
  { name: "South America", countries: "Brazil, Chile, Peru, Colombia", x: 28, y: 65 },
  { name: "Europe", countries: "UK, Germany, Switzerland, Netherlands", x: 50, y: 28 },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar", x: 58, y: 42 },
  { name: "Africa", countries: "South Africa, DRC, Ghana, Tanzania", x: 52, y: 58 },
  { name: "Asia-Pacific", countries: "China, Japan, South Korea, Australia", x: 78, y: 45 },
];

export function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-950 to-slate-950" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
            <Globe className="h-4 w-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Global Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Operating Across <span className="text-amber-400">50+ Countries</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our sourcing network spans six continents, connecting certified mines with
            manufacturers, refineries, and institutional clients worldwide.
          </p>
        </div>

        {/* Map visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[2/1] relative bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 50">
              {Array.from({ length: 10 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 5} x2="100" y2={i * 5} stroke="white" strokeWidth="0.1" />
              ))}
              {Array.from({ length: 20 }, (_, i) => (
                <line key={`v${i}`} x1={i * 5} y1="0" x2={i * 5} y2="50" stroke="white" strokeWidth="0.1" />
              ))}
            </svg>

            {/* Region pins */}
            {regions.map((region, i) => (
              <div
                key={region.name}
                className="absolute group"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 150}ms, transform 0.5s ease ${i * 150}ms`,
                  ...(visible ? {} : { transform: "translate(-50%, -30%)" }),
                }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 w-4 h-4 -m-2 rounded-full bg-amber-500/20 animate-ping" style={{ animationDuration: "3s", animationDelay: `${i * 0.5}s` }} />
                {/* Pin */}
                <div className="relative w-3 h-3 rounded-full bg-amber-500 border-2 border-amber-300 shadow-lg shadow-amber-500/30 cursor-pointer" />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                    <div className="text-xs font-bold text-white">{region.name}</div>
                    <div className="text-[10px] text-slate-400">{region.countries}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 max-w-4xl mx-auto">
          {regions.map((region, i) => (
            <div
              key={region.name}
              className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${300 + i * 100}ms`,
              }}
            >
              <MapPin className="h-3.5 w-3.5 text-amber-500 mx-auto mb-1.5" />
              <div className="text-xs font-semibold text-white">{region.name}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{region.countries.split(",").length}+ countries</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
