import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, FileCheck, Truck, Factory, CheckCircle, Package } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Chain of Custody — Full Supply Chain Traceability",
  description: `${SITE_CONFIG.shortName} maintains complete chain-of-custody documentation from certified mine to end-user delivery. Every gram of metal is traceable, verified, and documented.`,
  keywords: ["chain of custody metals", "supply chain traceability gold", "metals provenance tracking", "commodity traceability"],
};

const stages = [
  {
    stage: "Mine Origin",
    icon: MapPin,
    description: "All commodities originate from UN Certified and Environmental Impact Certified mines. We verify the mine's certification status, labor practices, environmental compliance, and ownership structure before any material enters our supply chain.",
    docs: ["Mine certification certificate", "Environmental impact assessment", "Labor practice compliance report", "Mine ownership and beneficial ownership documentation"],
  },
  {
    stage: "Extraction & Processing",
    icon: Factory,
    description: "Raw material extraction and initial processing are documented with assay reports, weight certificates, and batch tracking numbers. Each batch is assigned a unique identifier that follows it through the entire supply chain.",
    docs: ["Extraction batch report with unique ID", "Initial assay certificate", "Weight and volume documentation", "Processing method certification"],
  },
  {
    stage: "Transport & Logistics",
    icon: Truck,
    description: "All material transport is insured, tracked, and documented. Custody transfers between parties are formally recorded with signatures, timestamps, and photographic evidence. We use bonded carriers for all precious metals shipments.",
    docs: ["Bill of lading / airway bill", "Insurance certificate", "Custody transfer records with signatures", "Transport security documentation"],
  },
  {
    stage: "Refining",
    icon: Package,
    description: "Through our partnership with IPMR (International Precious Metals Refiners), all precious metals are refined to LBMA Good Delivery standards. Refining produces a final assay certificate confirming purity, weight, and compliance with specification.",
    docs: ["IPMR refining certificate", "Final assay certificate (purity confirmation)", "LBMA Good Delivery compliance documentation", "Batch reconciliation report"],
  },
  {
    stage: "Delivery & Receipt",
    icon: FileCheck,
    description: "Final delivery includes a comprehensive documentation package that accompanies every shipment. The client receives full chain-of-custody records tracing the material from mine origin through refining to their facility.",
    docs: ["Complete chain-of-custody certificate", "KYC compliance verification letter", "Origin certification", "Delivery receipt with inspection notes"],
  },
];

export default function ChainOfCustodyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Compliance", href: "/compliance" },
        { name: "Chain of Custody", href: "/compliance/chain-of-custody" },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
              <span>/</span>
              <span className="text-amber-400">Chain of Custody</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Chain of Custody</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Every gram of metal we trade is traceable from certified mine to your facility.
              Full documentation at every stage. Zero gaps in the chain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {stages.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.stage} className="flex gap-8">
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-amber-700" />
                    </div>
                    {idx < stages.length - 1 && <div className="w-0.5 flex-1 bg-amber-200 mt-3" />}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      <span className="text-amber-600 mr-2">Stage {idx + 1}:</span>{s.stage}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-5">{s.description}</p>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Documentation Provided</div>
                      <div className="space-y-2">
                        {s.docs.map((d) => (
                          <div key={d} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
            <ShieldCheck className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Full Traceability. Full Transparency.</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Request a sample chain-of-custody documentation package to see the level of
              traceability we provide with every transaction.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Request Sample Documentation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
