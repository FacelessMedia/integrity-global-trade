"use client";

import Link from "next/link";
import { ArrowRight, Gem, Layers, Atom, Cpu, Factory, Truck, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  gem: <Gem className="h-6 w-6" />,
  layers: <Layers className="h-6 w-6" />,
  atom: <Atom className="h-6 w-6" />,
  cpu: <Cpu className="h-6 w-6" />,
  factory: <Factory className="h-6 w-6" />,
  truck: <Truck className="h-6 w-6" />,
  "shield-check": <ShieldCheck className="h-6 w-6" />,
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Commodities Trading Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From mine to market, we provide end-to-end precious metals and commodities trading
            services with unmatched compliance standards and global reach.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
