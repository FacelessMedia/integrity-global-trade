import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Find answers to common questions about ${SITE_CONFIG.shortName}'s precious metals trading, compliance process, sourcing standards, pricing, and how to get started as a client.`,
};

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      { q: "How do I start trading with Integrity Global Trade?", a: "Contact our team via the contact page or call us at +1 (773) 219-7674. We'll schedule an initial consultation to understand your requirements, conduct KYC/AML onboarding, and establish your trading account. The entire process typically takes 5-10 business days." },
      { q: "What is the minimum order size?", a: "Minimum order sizes vary by commodity and market conditions. For precious metals, we typically work with institutional and corporate clients. Contact our trading desk for current minimums specific to your requirements." },
      { q: "Which countries do you operate in?", a: "We operate across 50+ countries globally, with particular strength in North America, Europe, Asia-Pacific, and select African markets. Our compliance framework supports international transactions across most jurisdictions." },
      { q: "Do you work with individual investors or only corporations?", a: "Our primary focus is B2B — serving manufacturers, refineries, OEMs, and institutional buyers. We specialize in commercial-scale transactions with full compliance documentation." },
    ],
  },
  {
    category: "Compliance & KYC",
    faqs: [
      { q: "What is your KYC/AML process?", a: "Every counterparty undergoes comprehensive Know Your Customer (KYC) verification including identity verification, beneficial ownership documentation, sanctions screening via ComplyAdvantage AI, PEP (Politically Exposed Person) checks, and adverse media monitoring. This is mandatory regardless of transaction size." },
      { q: "How do you screen for sanctions?", a: "We use ComplyAdvantage's AI-powered platform for real-time screening against 200+ sanctions lists including OFAC, EU, UN, and country-specific lists. Every transaction is monitored automatically with zero manual overrides allowed." },
      { q: "Are you LBMA accredited?", a: "Our refining partner IPMR (International Precious Metals Refiners) operates to LBMA Good Delivery standards. All precious metals we deliver meet LBMA specifications for weight, fineness, and appearance." },
      { q: "How do you ensure ethical sourcing?", a: "We source exclusively from UN Certified and Environmental Impact Certified mines. Our supply chain follows OECD Due Diligence Guidance for Responsible Supply Chains, with full chain-of-custody documentation from mine to delivery." },
    ],
  },
  {
    category: "Commodities & Pricing",
    faqs: [
      { q: "Which commodities do you trade?", a: "We trade precious metals (gold, silver, platinum, palladium), non-ferrous metals (copper, aluminum, zinc, nickel, tin), critical minerals (lithium, cobalt, manganese, rare earths), and semiconductor-grade specialty metals." },
      { q: "How is pricing determined?", a: "Pricing is based on real-time market benchmarks (LBMA, LME, COMEX) plus a transparent commission. We provide competitive quotes based on volume, delivery terms, and purity requirements. Contact our trading desk for current pricing." },
      { q: "Do you offer hedging services?", a: "Yes. Our risk management team provides hedging strategies using futures, options, and forward contracts to help clients manage price volatility. We work with you to design custom risk management programs." },
      { q: "What purity levels can you supply?", a: "We supply metals at various purity levels up to semiconductor-grade (99.99%+). Our IPMR partnership enables Miller Process refining (99.5%+) and electrolytic refining (99.99%+) depending on your requirements." },
    ],
  },
  {
    category: "Delivery & Logistics",
    faqs: [
      { q: "How is physical delivery handled?", a: "We manage the complete logistics chain including insured transport, customs documentation, and secure delivery to your specified facility. All shipments include full chain-of-custody documentation." },
      { q: "What documentation comes with each shipment?", a: "Every shipment includes: assay certificate, chain-of-custody documentation, KYC compliance certificate, insurance documentation, and origin certification from the source mine." },
      { q: "What are typical delivery timelines?", a: "Delivery timelines vary by commodity, quantity, and destination. Typical timelines range from 5-15 business days for standard orders. Rush orders can be accommodated — contact our trading desk." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Questions</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Everything you need to know about trading with Integrity Global Trade — from
              compliance and sourcing to pricing and delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqCategories.map((cat) => (
              <div key={cat.category} id={cat.category.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-amber-500" />
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <details key={faq.q} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-slate-900 hover:text-amber-700 transition-colors">
                        {faq.q}
                        <span className="text-amber-500 group-open:rotate-45 transition-transform text-xl shrink-0 ml-4">+</span>
                      </summary>
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
            <Search className="h-8 w-8 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">
              Our team is available to answer any specific questions about trading, compliance,
              or how we can serve your business needs.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Contact Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
