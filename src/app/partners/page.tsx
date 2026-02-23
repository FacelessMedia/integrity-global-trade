import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Gem, Cpu, Scale, Globe, Leaf } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Partners — Strategic Alliances & Certifications",
  description: `${SITE_CONFIG.shortName}'s strategic partnerships with IPMR, ComplyAdvantage, LBMA, and UN Certified mine networks ensure the highest standards of refining quality, compliance technology, and ethical sourcing.`,
};

const partners = [
  {
    name: "IPMR — International Precious Metals Refiners",
    icon: Gem,
    category: "Refining Partner",
    description: "Our primary refining partner, IPMR specializes in Miller Processing and precious metals refining to LBMA Good Delivery standards. This partnership gives IGTC direct access to institutional-grade refining capabilities, ensuring every ounce of gold, silver, platinum, and palladium meets the exacting purity standards required by semiconductor manufacturers and financial institutions.",
    highlights: ["LBMA Good Delivery standard refining", "Miller Process for 99.5%+ gold purity", "Electrolytic refining for 99.99% semiconductor-grade", "Full chain-of-custody from mine to refined bar"],
  },
  {
    name: "ComplyAdvantage — AI-Powered Compliance",
    icon: ShieldCheck,
    category: "Technology Partner",
    description: "ComplyAdvantage provides IGTC with AI-powered regulatory compliance technology for real-time sanctions screening, PEP identification, and adverse media monitoring. Every counterparty in every transaction is automatically screened against OFAC, EU, UN, and 200+ other sanctions lists before any trade is executed.",
    highlights: ["Real-time sanctions screening across 200+ lists", "AI-powered PEP and adverse media detection", "Automated transaction monitoring", "FATF-aligned risk assessment framework"],
  },
  {
    name: "LBMA — London Bullion Market Association",
    icon: Scale,
    category: "Standards Body",
    description: "IGTC adheres to LBMA Good Delivery standards for all precious metals transactions. The LBMA sets the global benchmark for gold and silver bar quality, and our commitment to these standards ensures institutional-grade quality across our entire supply chain.",
    highlights: ["Good Delivery standard for all gold and silver", "Responsible Gold Guidance compliance", "Transparent pricing aligned with LBMA benchmarks", "Supply chain documentation per LBMA requirements"],
  },
  {
    name: "UN Certified Mine Network",
    icon: Globe,
    category: "Sourcing Network",
    description: "IGTC sources exclusively from mines that hold United Nations certification for human rights, labor practices, environmental protection, and anti-corruption. This commitment ensures that every commodity we trade contributes to sustainable development rather than exploitation.",
    highlights: ["100% UN Certified mine sourcing policy", "Human rights and labor practice verification", "Environmental impact assessment compliance", "Anti-corruption due diligence on all mine operators"],
  },
  {
    name: "OECD Due Diligence Framework",
    icon: Scale,
    category: "Compliance Framework",
    description: "IGTC's entire supply chain management process is built on the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. This framework governs how we identify, assess, and mitigate risks in our mineral sourcing.",
    highlights: ["Five-step due diligence framework implementation", "Conflict-affected area risk assessment", "Third-party audit-ready documentation", "Annual compliance reporting"],
  },
  {
    name: "Environmental Impact Certification",
    icon: Leaf,
    category: "Sustainability",
    description: "All mines in IGTC's sourcing network hold Environmental Impact Certification, demonstrating compliance with international environmental standards. This ensures that our metals supply chain minimizes ecological damage and supports responsible resource extraction.",
    highlights: ["Environmental impact assessment for all sources", "Water and land use compliance verification", "Biodiversity protection standards", "Carbon footprint tracking and reporting"],
  },
];

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Partners", href: "/partners" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Strategic Partners</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Our Partners &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Certifications</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              IGTC&apos;s strategic partnerships with world-class refiners, compliance technology providers,
              and international standards bodies ensure the highest quality, compliance, and ethical standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div key={partner.name} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 shrink-0">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">{partner.category}</div>
                      <h2 className="text-xl font-bold text-slate-900">{partner.name}</h2>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{partner.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {partner.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm">
                        <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Partner with Integrity</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Our partnerships ensure every transaction meets the highest global standards.
            Contact us to learn how our network can serve your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Contact Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
