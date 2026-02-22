"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMMODITIES } from "@/lib/constants";

export function CommoditiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Trade
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Metals & Commodities We Trade
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From precious metals powering semiconductor manufacturing to critical minerals
            driving the energy transition — we trade the metals that build the future.
          </p>
        </div>

        {/* Commodities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMODITIES.map((commodity) => (
            <Link
              key={commodity.slug}
              href={`/commodities/${commodity.slug}`}
              className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
            >
              {/* Top color band */}
              <div
                className="h-2"
                style={{ backgroundColor: commodity.color }}
              />

              <div className="p-8">
                {/* Symbol badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: `${commodity.color}15`,
                      color: commodity.color,
                    }}
                  >
                    {commodity.symbol}
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {commodity.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {commodity.description}
                </p>

                {/* Applications */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Applications
                  </div>
                  {commodity.applications.slice(0, 3).map((app) => (
                    <div key={app} className="flex items-center gap-2 text-sm text-slate-500">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: commodity.color }}
                      />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link
            href="/commodities"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            View All Commodities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
