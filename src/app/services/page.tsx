import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gem, Layers, Atom, Cpu, Factory, Truck, ShieldCheck } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE_CONFIG.shortName}'s comprehensive commodities trading services including precious metals trading, non-ferrous metals supply, critical minerals sourcing, semiconductor metals, refining, supply chain management, and risk management.`,
};

function BreadcrumbWrapper() {
  return <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />;
}

const iconMap: Record<string, React.ReactNode> = {
  gem: <Gem className="h-8 w-8" />,
  layers: <Layers className="h-8 w-8" />,
  atom: <Atom className="h-8 w-8" />,
  cpu: <Cpu className="h-8 w-8" />,
  factory: <Factory className="h-8 w-8" />,
  truck: <Truck className="h-8 w-8" />,
  "shield-check": <ShieldCheck className="h-8 w-8" />,
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbWrapper />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              End-to-End Commodities{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Trading Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From mine sourcing through refining and delivery, our comprehensive suite of
              services covers every stage of the precious metals and commodities value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 bg-gradient-to-br from-slate-100 to-slate-50 p-10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                  <div className="lg:w-3/4 p-10">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {service.title}
                      </h2>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
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
            Need a Custom Trading Solution?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Our team works closely with each client to develop tailored solutions that meet
            your specific metals and commodities requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Discuss Your Requirements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
