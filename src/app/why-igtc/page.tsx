import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, ShieldCheck, Globe, Cpu, Award, Scale, Leaf } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Why Choose IGTC — The Integrity Difference",
  description: `Discover why Fortune 500 manufacturers, European OEMs, and international refineries choose ${SITE_CONFIG.shortName} over traditional commodities brokers. Full KYC/AML compliance, UN Certified sourcing, LBMA standards.`,
};

const comparisons = [
  { feature: "KYC/AML verification on every transaction", igtc: true, traditional: false, note: "ComplyAdvantage AI-powered screening" },
  { feature: "AI-powered real-time sanctions screening", igtc: true, traditional: false, note: "200+ sanctions lists checked automatically" },
  { feature: "100% UN Certified mine sourcing", igtc: true, traditional: false, note: "Zero exceptions policy" },
  { feature: "Complete chain-of-custody documentation", igtc: true, traditional: false, note: "Mine to end-user traceability" },
  { feature: "LBMA Good Delivery standard refining", igtc: true, traditional: false, note: "Via IPMR partnership" },
  { feature: "Environmental Impact Certified mines only", igtc: true, traditional: false, note: "ESG-compliant supply chain" },
  { feature: "Semiconductor-grade purity metals (99.99%+)", igtc: true, traditional: false, note: "Chip wafer & wire bonding grade" },
  { feature: "Dedicated compliance officer per account", igtc: true, traditional: false, note: "Named compliance contact" },
  { feature: "Physical precious metals delivery", igtc: true, traditional: true, note: "" },
  { feature: "Non-ferrous metals supply (Cu, Al, Zn)", igtc: true, traditional: true, note: "" },
  { feature: "Global operations spanning 50+ countries", igtc: true, traditional: true, note: "" },
  { feature: "Risk management & hedging services", igtc: true, traditional: true, note: "" },
  { feature: "OECD Due Diligence Guidance compliance", igtc: true, traditional: false, note: "Five-step framework" },
  { feature: "FATF-aligned transaction monitoring", igtc: true, traditional: false, note: "Real-time AML monitoring" },
  { feature: "Conflict minerals (3TG) avoidance guarantee", igtc: true, traditional: false, note: "Dodd-Frank & EU compliant" },
];

const differentiators = [
  { icon: ShieldCheck, title: "Compliance-First Architecture", description: "Our entire business model is built around compliance. Every transaction, every counterparty, every shipment undergoes rigorous verification. This isn't a bolt-on — it's our foundation." },
  { icon: Cpu, title: "Semiconductor-Grade Expertise", description: "We specialize in ultra-high purity metals for chip manufacturing. Our IPMR partnership delivers 99.99%+ purity gold, silver, and PGMs for wafer coating and wire bonding applications." },
  { icon: Globe, title: "Ethical Sourcing Network", description: "We source exclusively from UN Certified and Environmental Impact Certified mines. Our supply chain is fully transparent from extraction point to delivery." },
  { icon: Scale, title: "AI-Powered Risk Management", description: "ComplyAdvantage's AI technology screens every counterparty against 200+ sanctions lists in real-time. PEP identification, adverse media detection, and automated transaction monitoring." },
  { icon: Award, title: "LBMA Good Delivery Standards", description: "Through our IPMR partnership, all precious metals meet London Bullion Market Association Good Delivery standards — the global benchmark for institutional-grade quality." },
  { icon: Leaf, title: "ESG-Compliant Supply Chain", description: "Environmental Impact Certification for all sourced material. We track carbon footprint, water usage, and biodiversity impact across our entire supply chain." },
];

export default function WhyIGTCPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Why IGTC", href: "/why-igtc" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">The Integrity Difference</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Integrity Global Trade?</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Not all commodities trading firms are equal. Here&apos;s why Fortune 500 manufacturers,
              European automotive OEMs, and international refineries choose IGTC over traditional brokers.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{SITE_CONFIG.totalVolume}</div>
                <div className="text-xs text-slate-400">Closed Volume</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-xs text-slate-400">Countries</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Side-by-Side Comparison</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              See how our compliance-first approach compares to traditional commodities trading houses.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_120px_120px] gap-4 p-5 bg-slate-50 border-b border-slate-200">
                <div className="text-sm font-semibold text-slate-500">Feature</div>
                <div className="text-center"><div className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1.5 rounded-full border border-amber-200">IGTC</div></div>
                <div className="text-center"><div className="text-xs font-medium text-slate-500">Traditional</div></div>
              </div>
              {comparisons.map((row, idx) => (
                <div key={row.feature} className={`grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_120px_120px] gap-4 p-5 items-center ${idx < comparisons.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <div>
                    <div className="text-sm text-slate-700 font-medium">{row.feature}</div>
                    {row.note && <div className="text-[10px] text-slate-400 mt-0.5">{row.note}</div>}
                  </div>
                  <div className="flex justify-center">
                    {row.igtc ? <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center"><Check className="h-4 w-4 text-emerald-600" /></div>
                    : <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center"><X className="h-4 w-4 text-red-400" /></div>}
                  </div>
                  <div className="flex justify-center">
                    {row.traditional ? <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center"><Check className="h-4 w-4 text-slate-400" /></div>
                    : <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center"><X className="h-4 w-4 text-red-400" /></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 inline-flex mb-5">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{d.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{d.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Contact our team to discuss your commodities sourcing requirements and discover
            why the world&apos;s leading manufacturers trust IGTC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Contact Our Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium px-6 py-3.5 transition-colors">
              View Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
