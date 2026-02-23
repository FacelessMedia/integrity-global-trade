import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Search, FileCheck, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Due Diligence Process — How We Verify Every Transaction",
  description: `${SITE_CONFIG.shortName}'s comprehensive due diligence process ensures every counterparty, every source, and every transaction meets the highest international compliance standards. OECD-aligned five-step framework.`,
  keywords: ["due diligence metals trading", "KYC commodities", "counterparty verification", "OECD due diligence minerals"],
};

const steps = [
  {
    step: 1,
    title: "Counterparty Identification & Verification",
    icon: Users,
    description: "Every new counterparty undergoes comprehensive identity verification before any transaction is initiated. This includes corporate registration verification, beneficial ownership documentation, director identification, and authorized signatory confirmation.",
    details: [
      "Government-issued ID verification for all principals",
      "Corporate registration and good standing confirmation",
      "Beneficial ownership structure mapping (25%+ threshold)",
      "Authorized signatory documentation and verification",
      "Physical address confirmation and site verification where applicable",
    ],
  },
  {
    step: 2,
    title: "Sanctions & PEP Screening",
    icon: Search,
    description: "All counterparties are screened in real-time through ComplyAdvantage's AI-powered platform against 200+ global sanctions lists, politically exposed persons databases, and adverse media sources.",
    details: [
      "OFAC (U.S. Office of Foreign Assets Control) screening",
      "EU consolidated sanctions list screening",
      "UN Security Council sanctions list screening",
      "PEP (Politically Exposed Persons) identification",
      "Adverse media monitoring across 100+ languages",
      "Ongoing monitoring — not just at onboarding",
    ],
  },
  {
    step: 3,
    title: "Source Verification & Mine Certification",
    icon: FileCheck,
    description: "Every commodity source is verified against UN Certification and Environmental Impact Certification standards. We conduct on-site verification where possible and require complete provenance documentation.",
    details: [
      "UN Certified mine status verification",
      "Environmental Impact Certification confirmation",
      "Conflict minerals (3TG) avoidance assessment",
      "OECD Annex II risk factor evaluation",
      "Source country risk assessment and monitoring",
      "Chain-of-custody documentation from extraction point",
    ],
  },
  {
    step: 4,
    title: "Risk Assessment & Classification",
    icon: AlertTriangle,
    description: "Each counterparty and transaction is assigned a risk classification based on multiple factors including jurisdiction, transaction size, commodity type, and counterparty history. Enhanced due diligence is applied to higher-risk classifications.",
    details: [
      "Country/jurisdiction risk scoring",
      "Transaction pattern analysis",
      "Commodity-specific risk assessment",
      "Enhanced due diligence for elevated risk profiles",
      "Ongoing risk re-assessment at regular intervals",
    ],
  },
  {
    step: 5,
    title: "Transaction Monitoring & Reporting",
    icon: CheckCircle,
    description: "All transactions are monitored in real-time for suspicious activity indicators. Our FATF-aligned monitoring system flags unusual patterns and ensures full regulatory reporting compliance.",
    details: [
      "Real-time transaction monitoring via ComplyAdvantage",
      "Suspicious activity detection and SAR filing",
      "FATF-aligned reporting framework",
      "Complete audit trail for every transaction",
      "Quarterly compliance reporting and review",
      "Annual independent compliance audit",
    ],
  },
];

export default function DueDiligencePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Compliance", href: "/compliance" },
        { name: "Due Diligence", href: "/compliance/due-diligence" },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
              <span>/</span>
              <span className="text-amber-400">Due Diligence</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Our Due Diligence{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Process</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A five-step OECD-aligned framework that ensures every counterparty, every source,
              and every transaction meets the highest international compliance standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex gap-8">
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-700 font-bold text-lg">
                      {s.step}
                    </div>
                    {s.step < steps.length && <div className="w-0.5 flex-1 bg-emerald-200 mt-3" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-5 w-5 text-emerald-600 md:hidden" />
                      <h2 className="text-xl font-bold text-slate-900">
                        <span className="text-emerald-600 md:hidden">Step {s.step}: </span>
                        {s.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-5">{s.description}</p>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-2.5">
                      {s.details.map((d) => (
                        <div key={d} className="flex items-start gap-3 text-sm">
                          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
            <ShieldCheck className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Due Diligence?</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Our compliance team is available to walk you through our process and demonstrate
              how we protect your business from regulatory risk.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Speak with Compliance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
