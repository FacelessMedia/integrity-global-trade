import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck, Brain, Globe, Leaf, Award, FileCheck, Shield, AlertTriangle } from "lucide-react";
import { SITE_CONFIG, COMPLIANCE_FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compliance & Ethics",
  description: `${SITE_CONFIG.shortName}'s comprehensive compliance framework including KYC/AML verification, ComplyAdvantage AI sanctions screening, UN Certified mine sourcing, and LBMA/OECD standards adherence.`,
};

const iconMap: Record<string, React.ReactNode> = {
  "user-check": <UserCheck className="h-7 w-7" />,
  brain: <Brain className="h-7 w-7" />,
  globe: <Globe className="h-7 w-7" />,
  leaf: <Leaf className="h-7 w-7" />,
  award: <Award className="h-7 w-7" />,
  "file-check": <FileCheck className="h-7 w-7" />,
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Compliance & Ethics
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Integrity Is Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Foundation
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              In the global commodities trading industry, compliance isn&apos;t just a requirement —
              it&apos;s our core identity. We implement the most rigorous standards in the industry
              to ensure every transaction is transparent, ethical, and fully documented.
            </p>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 bg-emerald-50 border-b border-emerald-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
            <blockquote className="text-2xl font-bold text-slate-900 mb-4 leading-relaxed">
              &ldquo;No matter how large the Corporate Customer is, they must fully comply
              with KYC requirements and consent to background screening.&rdquo;
            </blockquote>
            <p className="text-slate-600">
              — Integrity Global Trade & Commodities Corp Policy
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Compliance Framework
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A multi-layered approach to compliance that combines AI-powered technology,
              rigorous due diligence, and certified sourcing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPLIANCE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Due Diligence Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Customer Onboarding & KYC Verification",
                  description:
                    "Every new client undergoes comprehensive Know Your Customer (KYC) verification including identity verification, beneficial ownership identification, and corporate structure analysis. No exceptions for any entity regardless of size.",
                },
                {
                  step: "02",
                  title: "AI-Powered Sanctions & PEP Screening",
                  description:
                    "Using ComplyAdvantage AI software, we screen every customer and transaction against global sanctions lists, Politically Exposed Persons (PEP) databases, and adverse media in real-time. Continuous monitoring ensures ongoing compliance.",
                },
                {
                  step: "03",
                  title: "Source Verification & Mine Certification",
                  description:
                    "All raw materials are traced to their source. We only procure from UN Certified and Environmental Impact Certified industrial mines that meet the highest standards for labor practices and environmental protection.",
                },
                {
                  step: "04",
                  title: "Transaction Monitoring & AML Procedures",
                  description:
                    "Extensive Anti-Money Laundering (AML) procedures monitor every transaction for suspicious activity. Our compliance team reviews flagged transactions with banking-grade rigor.",
                },
                {
                  step: "05",
                  title: "Chain of Custody Documentation",
                  description:
                    "Complete documentation accompanies every shipment from mine to client, including origin certificates, refining records, assay reports, and logistics tracking — ensuring full traceability.",
                },
                {
                  step: "06",
                  title: "Ongoing Compliance & Audit Readiness",
                  description:
                    "Regular internal audits, compliance training, and policy updates ensure our framework evolves with regulatory requirements. We maintain audit-ready documentation at all times.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 bg-white rounded-xl p-8 border border-slate-200"
                >
                  <div className="text-3xl font-bold text-emerald-200 shrink-0 w-12">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Standards & Certifications We Uphold
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "LBMA Responsible Sourcing",
                  description:
                    "Adherence to the London Bullion Market Association's Responsible Gold and Silver Guidance for Good Delivery refiners.",
                },
                {
                  title: "OECD Due Diligence",
                  description:
                    "Compliance with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
                },
                {
                  title: "UN Global Compact Principles",
                  description:
                    "Sourcing exclusively from mines that comply with the UN Global Compact's principles on human rights, labor, environment, and anti-corruption.",
                },
                {
                  title: "International AML/CTF Regulations",
                  description:
                    "Full compliance with international Anti-Money Laundering and Counter-Terrorism Financing regulations across all jurisdictions we operate in.",
                },
              ].map((standard) => (
                <div
                  key={standard.title}
                  className="bg-emerald-50 rounded-xl p-8 border border-emerald-100"
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{standard.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Compliance Framework?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Our compliance team is available to discuss our due diligence process,
            sourcing policies, and documentation standards with prospective clients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Contact Compliance Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
