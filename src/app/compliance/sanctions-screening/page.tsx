import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Globe, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sanctions Screening — AI-Powered Real-Time Compliance",
  description: `${SITE_CONFIG.shortName} uses ComplyAdvantage AI technology for real-time sanctions screening against 200+ global lists. OFAC, EU, UN screening on every transaction. Zero manual overrides.`,
  keywords: ["sanctions screening metals", "OFAC compliance commodities", "AML screening gold trading", "ComplyAdvantage metals"],
};

const lists = [
  "OFAC — U.S. Office of Foreign Assets Control (SDN List, Sectoral Sanctions)",
  "EU — European Union Consolidated Sanctions List",
  "UN — United Nations Security Council Consolidated List",
  "FATF — Financial Action Task Force High-Risk Jurisdictions",
  "HM Treasury — UK Sanctions List",
  "DFAT — Australian Department of Foreign Affairs and Trade",
  "SECO — Swiss State Secretariat for Economic Affairs",
  "OSFI — Canadian Office of the Superintendent of Financial Institutions",
  "MAS — Monetary Authority of Singapore",
  "200+ additional country-specific and regional sanctions lists",
];

const capabilities = [
  { icon: Zap, title: "Real-Time Screening", description: "Every counterparty is screened instantly at onboarding and continuously monitored. No batch processing delays — results in milliseconds." },
  { icon: Cpu, title: "AI-Powered Detection", description: "Machine learning algorithms detect name variations, transliterations, and fuzzy matches that traditional screening would miss." },
  { icon: Globe, title: "Global Coverage", description: "200+ sanctions lists from every major jurisdiction. 100+ languages for adverse media monitoring. Global PEP databases." },
  { icon: AlertTriangle, title: "Risk Scoring", description: "Automated risk classification assigns a risk score to every counterparty based on jurisdiction, entity type, and screening results." },
  { icon: ShieldCheck, title: "Zero Manual Overrides", description: "No IGTC employee can override a sanctions hit. Any positive match triggers an automatic transaction freeze pending review." },
  { icon: CheckCircle, title: "Full Audit Trail", description: "Complete screening history maintained for every counterparty. Every search, result, and decision is permanently logged." },
];

export default function SanctionsScreeningPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Compliance", href: "/compliance" },
        { name: "Sanctions Screening", href: "/compliance/sanctions-screening" },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
              <span>/</span>
              <span className="text-amber-400">Sanctions Screening</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              AI-Powered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Sanctions Screening</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Powered by ComplyAdvantage, our sanctions screening system checks every counterparty
              against 200+ global sanctions lists in real-time. Zero manual overrides. Zero exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Screening Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="bg-slate-50 rounded-xl p-7 border border-slate-200">
                    <div className="p-2.5 bg-emerald-50 rounded-xl inline-flex mb-4 border border-emerald-200">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lists */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sanctions Lists Covered</h2>
            <p className="text-slate-600 mb-10">Every counterparty is screened against all of the following lists — automatically, in real-time, with no exceptions.</p>
            <div className="space-y-3">
              {lists.map((list) => (
                <div key={list} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{list}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Trade with Confidence</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Our AI-powered screening ensures you&apos;re always on the right side of compliance.
            Contact us to learn more about our sanctions screening process.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
            Contact Compliance Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
