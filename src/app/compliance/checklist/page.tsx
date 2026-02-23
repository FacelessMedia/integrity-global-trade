import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckSquare, Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Compliance Checklist — Metals Trading Due Diligence Requirements",
  description: `Use ${SITE_CONFIG.shortName}'s compliance checklist to ensure your metals trading operations meet KYC/AML, sanctions screening, and ethical sourcing requirements. Based on OECD and FATF frameworks.`,
  keywords: ["metals trading compliance checklist", "KYC AML checklist commodities", "due diligence checklist gold trading"],
};

const sections = [
  {
    title: "Counterparty Due Diligence",
    items: [
      "Collect government-issued ID for all principals and beneficial owners",
      "Verify corporate registration and good standing in jurisdiction of incorporation",
      "Map beneficial ownership structure (identify all 25%+ shareholders)",
      "Confirm authorized signatories with board resolution or equivalent",
      "Verify physical business address (not just registered agent address)",
      "Obtain and verify bank reference or financial institution letter",
      "Document source of funds / source of wealth for principals",
    ],
  },
  {
    title: "Sanctions & PEP Screening",
    items: [
      "Screen all counterparties against OFAC SDN and Sectoral Sanctions lists",
      "Screen against EU, UN, and HM Treasury consolidated sanctions lists",
      "Check for Politically Exposed Person (PEP) status of all principals",
      "Run adverse media screening across major news sources",
      "Document all screening results with timestamps and source references",
      "Establish ongoing monitoring schedule (not just one-time screening)",
      "Create escalation procedure for positive/partial matches",
    ],
  },
  {
    title: "Source & Supply Chain Verification",
    items: [
      "Verify mine certification status (UN Certified, Environmental Impact)",
      "Confirm no conflict minerals (3TG) involvement per Dodd-Frank / EU regulation",
      "Obtain chain-of-custody documentation from extraction to delivery",
      "Verify refinery accreditation (LBMA Good Delivery for precious metals)",
      "Assess country-of-origin risk per OECD Annex II guidance",
      "Document all intermediaries in the supply chain",
      "Maintain assay certificates for all refined material",
    ],
  },
  {
    title: "Transaction Monitoring & Reporting",
    items: [
      "Implement real-time transaction monitoring system",
      "Establish suspicious activity detection thresholds and patterns",
      "Create SAR (Suspicious Activity Report) filing procedure",
      "Maintain complete audit trail for every transaction",
      "Conduct quarterly compliance review and reporting",
      "Schedule annual independent compliance audit",
      "Document all compliance decisions with rationale",
    ],
  },
  {
    title: "Record Keeping & Documentation",
    items: [
      "Maintain KYC records for minimum 5 years after relationship ends",
      "Store all transaction records with complete counterparty details",
      "Archive sanctions screening results with timestamps",
      "Keep chain-of-custody documentation for every shipment",
      "Document compliance training records for all employees",
      "Maintain updated compliance policies and procedures manual",
      "Store regulatory correspondence and examination reports",
    ],
  },
];

export default function ComplianceChecklistPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Compliance", href: "/compliance" },
        { name: "Compliance Checklist", href: "/compliance/checklist" },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
              <span>/</span>
              <span className="text-amber-400">Checklist</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Metals Trading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Compliance Checklist</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A comprehensive checklist based on OECD, FATF, and international best practices
              for KYC/AML compliance in precious metals and commodities trading.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, sIdx) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-bold">
                    {sIdx + 1}
                  </div>
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-lg px-5 py-3.5 border border-slate-200">
                      <CheckSquare className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 text-center">
              <ShieldCheck className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Need Help Implementing This Checklist?</h3>
              <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                IGTC implements every item on this checklist as standard practice. Contact us to
                learn how we can serve as your compliant commodities sourcing partner.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Contact Compliance Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
