import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle, Clock, Globe, Cpu, Factory } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Case Studies — Client Success Stories",
  description: `Real-world examples of how ${SITE_CONFIG.shortName} delivers ethically sourced precious metals and non-ferrous metals with full KYC/AML compliance to Fortune 500 manufacturers, refineries, and semiconductor companies worldwide.`,
};

const caseStudies = [
  {
    slug: "semiconductor-grade-gold-supply",
    title: "Supplying Semiconductor-Grade Gold to a Fortune 500 Chipmaker",
    client: "Leading Semiconductor Manufacturer, San Jose, CA",
    industry: "Semiconductor & Electronics",
    icon: Cpu,
    challenge: "A Fortune 500 semiconductor manufacturer needed a reliable supplier of 99.99% purity gold for chip wafer coating and wire bonding processes. Their existing supplier failed a compliance audit, leaving a $45M annual supply gap with zero tolerance for interruption.",
    solution: "IGTC established a dedicated supply chain sourcing gold exclusively from UN Certified mines in South America and Africa. All material was refined through our IPMR partnership to LBMA Good Delivery standards, with every counterparty screened through ComplyAdvantage's AI-powered sanctions system.",
    results: [
      "$45M annual supply contract secured within 60 days",
      "99.99% purity consistently achieved (semiconductor-grade)",
      "Zero compliance findings across 3 independent audits",
      "Full chain-of-custody documentation from mine to fab",
      "15% cost reduction vs. previous supplier through direct mine relationships",
    ],
    metrics: { volume: "$45M", timeline: "60 Days", purity: "99.99%", audits: "Zero Issues" },
  },
  {
    slug: "automotive-pgm-supply-chain",
    title: "Securing Platinum Group Metals for European Automotive Catalytic Converters",
    client: "Top 5 European Automotive OEM, Stuttgart, Germany",
    industry: "Automotive",
    icon: Factory,
    challenge: "A major European automaker faced PGM supply chain disruptions due to geopolitical tensions affecting traditional South African suppliers. They needed an alternative source that met EU due diligence regulations and their internal ESG standards.",
    solution: "IGTC established a diversified PGM sourcing network spanning certified mines in Zimbabwe, Canada, and Russia-alternative regions. Every supplier underwent enhanced due diligence including OECD Annex II risk assessment, and all transactions were monitored in real-time through our ComplyAdvantage integration.",
    results: [
      "$120M+ in platinum and palladium delivered over 18 months",
      "Supply chain diversified across 3 continents — zero single-source risk",
      "Full EU Due Diligence Regulation compliance from day one",
      "Environmental Impact Certification for all sourced material",
      "98.7% on-time delivery rate across 200+ shipments",
    ],
    metrics: { volume: "$120M+", timeline: "18 Months", countries: "3 Continents", delivery: "98.7%" },
  },
  {
    slug: "refinery-gold-dore-trading",
    title: "Facilitating Gold Doré Trading Between African Mines and LBMA Refineries",
    client: "International Precious Metals Refinery, Zurich, Switzerland",
    industry: "Refining & Processing",
    icon: Globe,
    challenge: "A Swiss refinery needed a trusted intermediary to source gold doré from artisanal and small-scale mining operations in West Africa. Previous intermediaries had failed KYC checks, creating reputational and regulatory risk.",
    solution: "IGTC built a compliant sourcing program that included on-site mine verification, individual miner KYC documentation, FATF-aligned transaction monitoring, and complete chain-of-custody from extraction to refinery delivery. Every transaction was screened against OFAC, EU, and UN sanctions lists in real-time.",
    results: [
      "$80M in gold doré facilitated across 24 months",
      "All miners verified against UN Certified mine standards",
      "Zero sanctions hits — 100% clean screening record",
      "LBMA Responsible Gold Guidance fully satisfied",
      "Refinery passed LBMA audit with specific praise for supply chain documentation",
    ],
    metrics: { volume: "$80M", timeline: "24 Months", compliance: "100%", standard: "LBMA" },
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Real Results.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Real Compliance.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              See how Integrity Global Trade delivers ethically sourced commodities with full
              regulatory compliance to industry leaders across semiconductors, automotive, and refining.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => {
              const Icon = cs.icon;
              return (
                <div key={cs.slug} className="max-w-5xl mx-auto">
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10">
                      <div className="flex items-start gap-4">
                        <div className="bg-amber-500/20 p-3 rounded-xl shrink-0">
                          <Icon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                            Case Study #{idx + 1} · {cs.industry}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{cs.title}</h2>
                          <p className="text-slate-400 text-sm">{cs.client}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200">
                      {Object.entries(cs.metrics).map(([key, value]) => (
                        <div key={key} className="p-5 text-center border-r border-slate-200 last:border-r-0">
                          <div className="text-xl font-bold text-slate-900">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 space-y-8">
                      <div>
                        <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">The Challenge</h3>
                        <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-3">Our Solution</h3>
                        <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3">Results</h3>
                        <div className="space-y-2">
                          {cs.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                              <p className="text-slate-600">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <ShieldCheck className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Join Fortune 500 manufacturers, European OEMs, and international refineries that trust
                IGTC for compliant, ethical commodities sourcing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
