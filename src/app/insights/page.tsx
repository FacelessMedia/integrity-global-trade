import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights & News",
  description: `Market analysis, industry insights, and news from ${SITE_CONFIG.shortName}. Stay informed on precious metals, commodities markets, semiconductor metals, and compliance updates.`,
};

const articles = [
  {
    title: "The Role of Precious Metals in Semiconductor Manufacturing",
    excerpt:
      "Gold, silver, and platinum group metals are critical components in semiconductor chip wafer coating and electronic connections. Understanding the supply chain from mine to chip fab.",
    category: "Industry Analysis",
    date: "February 2026",
    readTime: "8 min read",
    slug: "precious-metals-semiconductor-manufacturing",
  },
  {
    title: "Understanding KYC/AML Compliance in Metals Trading",
    excerpt:
      "Why Know Your Customer and Anti-Money Laundering compliance is non-negotiable in the global commodities trading industry, and how AI technology is transforming due diligence.",
    category: "Compliance",
    date: "February 2026",
    readTime: "6 min read",
    slug: "kyc-aml-compliance-metals-trading",
  },
  {
    title: "Non-Ferrous Metals: Why They Matter for Electronics",
    excerpt:
      "Copper, aluminium, and other non-ferrous metals are the backbone of modern electronics. Exploring why these metals are superior conductors and their role in the tech supply chain.",
    category: "Market Insights",
    date: "January 2026",
    readTime: "7 min read",
    slug: "non-ferrous-metals-electronics",
  },
  {
    title: "Ethical Sourcing: How UN Certified Mines Protect the Supply Chain",
    excerpt:
      "The importance of sourcing from UN Certified and Environmental Impact Certified mines, and how responsible procurement protects businesses and communities alike.",
    category: "Sustainability",
    date: "January 2026",
    readTime: "5 min read",
    slug: "ethical-sourcing-un-certified-mines",
  },
  {
    title: "Gold Refining for Chip Wafer Coating: Process & Quality Standards",
    excerpt:
      "A deep dive into the specialized process of refining gold to semiconductor-grade purity for chip wafer coating applications, including LBMA and IPMR quality standards.",
    category: "Technical",
    date: "December 2025",
    readTime: "10 min read",
    slug: "gold-refining-chip-wafer-coating",
  },
  {
    title: "Critical Minerals and the Energy Transition: Market Outlook 2026",
    excerpt:
      "How the global energy transition is driving demand for lithium, cobalt, manganese, and rare earth elements — and what it means for commodities traders and industrial consumers.",
    category: "Market Outlook",
    date: "December 2025",
    readTime: "9 min read",
    slug: "critical-minerals-energy-transition-2026",
  },
];

const categoryColors: Record<string, string> = {
  "Industry Analysis": "bg-blue-50 text-blue-700 border-blue-200",
  Compliance: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Market Insights": "bg-amber-50 text-amber-700 border-amber-200",
  Sustainability: "bg-green-50 text-green-700 border-green-200",
  Technical: "bg-purple-50 text-purple-700 border-purple-200",
  "Market Outlook": "bg-orange-50 text-orange-700 border-orange-200",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Insights & News
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Market Intelligence &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Industry Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay informed with our analysis of precious metals markets, commodities trends,
              compliance updates, and semiconductor industry developments.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Article image placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-slate-300" />
                </div>

                <div className="p-6">
                  {/* Category badge */}
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-4 ${
                      categoryColors[article.category] || "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    {article.category}
                  </span>

                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed on Market Developments
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contact us to receive our market analysis reports and industry insights
            directly to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Subscribe to Insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
