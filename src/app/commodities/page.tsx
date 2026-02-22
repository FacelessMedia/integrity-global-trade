import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMMODITIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commodities We Trade",
  description: `Explore the precious metals, non-ferrous metals, and critical minerals traded by ${SITE_CONFIG.shortName}. Gold, silver, platinum, palladium, copper, and critical minerals for semiconductor and industrial applications.`,
};

export default function CommoditiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Commodities
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Metals & Minerals That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Power the Future
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From gold powering semiconductor chips to copper electrifying the energy
              transition — we trade the materials that build tomorrow&apos;s technology.
            </p>
          </div>
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {COMMODITIES.map((commodity) => (
              <Link
                key={commodity.slug}
                href={`/commodities/${commodity.slug}`}
                className="group block rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-2" style={{ backgroundColor: commodity.color }} />
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 bg-slate-50 p-10 flex flex-col items-center justify-center text-center">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mb-4"
                      style={{
                        backgroundColor: `${commodity.color}15`,
                        color: commodity.color,
                      }}
                    >
                      {commodity.symbol}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {commodity.title}
                    </h2>
                  </div>
                  <div className="lg:w-3/4 p-10">
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {commodity.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Key Applications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {commodity.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2 text-sm text-slate-600">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: commodity.color }}
                            />
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for a Specific Metal or Mineral?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Our trading desk covers a wide range of precious metals, non-ferrous metals,
            and critical minerals. Contact us to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Contact Our Trading Desk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
