import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { COMMODITIES, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { CommodityJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/lib/structured-data";
import { COMMODITY_FAQS } from "@/lib/faqs";
import { COMMODITY_EXPANDED_CONTENT } from "@/lib/commodity-content";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { ShieldCheck, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMMODITIES.map((commodity) => ({ slug: commodity.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const commodity = COMMODITIES.find((c) => c.slug === slug);
  if (!commodity) return {};
  return {
    title: `${commodity.title} Trading`,
    description: `${commodity.description} Trade ${commodity.title.toLowerCase()} with ${SITE_CONFIG.shortName} — ethically sourced from UN-certified mines with full KYC/AML compliance.`,
  };
}

export default async function CommodityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const commodity = COMMODITIES.find((c) => c.slug === slug);

  if (!commodity) {
    notFound();
  }

  const commodityIndex = COMMODITIES.findIndex((c) => c.slug === slug);
  const nextCommodity = COMMODITIES[(commodityIndex + 1) % COMMODITIES.length];
  const prevCommodity = COMMODITIES[(commodityIndex - 1 + COMMODITIES.length) % COMMODITIES.length];
  const expanded = COMMODITY_EXPANDED_CONTENT[slug];

  return (
    <>
      <CommodityJsonLd commodity={commodity} />
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Commodities", href: "/commodities" },
        { name: commodity.title, href: `/commodities/${commodity.slug}` },
      ]} />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/commodities" className="hover:text-amber-400 transition-colors">Commodities</Link>
            <span>/</span>
            <span className="text-amber-400">{commodity.title}</span>
          </nav>

          <div className="flex items-center gap-6 mb-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold"
              style={{
                backgroundColor: `${commodity.color}20`,
                color: commodity.color,
              }}
            >
              {commodity.symbol}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {commodity.title} Trading
            </h1>
          </div>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            {commodity.description}
          </p>
          <p className="text-xs text-slate-500 mt-4">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commodity.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0" style={{ color: commodity.color }} />
                    <span className="text-slate-700 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Capabilities */}
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our {commodity.title} Trading Capabilities
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Integrity Global Trade & Commodities Corp provides comprehensive {commodity.title.toLowerCase()} trading
                  services backed by our industry-leading compliance framework. All {commodity.title.toLowerCase()} sourced
                  through our network originates from UN Certified and Environmental Impact Certified
                  industrial mines with documented chain-of-custody from mine to delivery.
                </p>
                <p>
                  Through our partnership with IPMR (International Precious Metals Refiners), we offer
                  access to state-of-the-art refining and processing capabilities, ensuring our clients
                  receive material meeting the most exacting quality and purity specifications.
                </p>
                <p>
                  Every {commodity.title.toLowerCase()} transaction undergoes rigorous KYC/AML verification using
                  ComplyAdvantage AI-powered sanctions screening. No exceptions — regardless of customer
                  size or transaction volume.
                </p>
              </div>
            </div>

            {/* Expanded Content — Items 6-10 */}
            {expanded && (
              <>
                {/* Market Overview */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Market Overview</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    {expanded.marketOverview.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Why Trade with IGTC */}
                <div className="mb-16 bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                    Why Trade {commodity.title} with IGTC
                  </h2>
                  <div className="space-y-3">
                    {expanded.whyIGTC.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supply Chain */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Supply Chain & Delivery</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{expanded.supplyChain}</p>
                </div>

                {/* Specifications Table */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Trading Specifications</h2>
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    {expanded.specifications.map((spec, i) => (
                      <div key={spec.label} className={`flex items-center justify-between px-6 py-4 ${i < expanded.specifications.length - 1 ? "border-b border-slate-100" : ""}`}>
                        <span className="text-sm font-semibold text-slate-500">{spec.label}</span>
                        <span className="text-sm text-slate-900 font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry Applications (expanded) */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Industry Applications</h2>
                  <div className="space-y-4">
                    {expanded.industryApplications.map((app) => (
                      <div key={app.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">{app.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{app.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Quality Standards */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Quality & Compliance Standards</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["LBMA Standards", "OECD Compliant", "UN Certified Mines", "KYC/AML Verified", "Environmental Certified", "Chain of Custody"].map(
                  (standard) => (
                    <div
                      key={standard}
                      className="bg-white border border-slate-200 rounded-lg p-4 text-center"
                    >
                      <div className="w-3 h-3 rounded-full bg-emerald-500 mx-auto mb-2" />
                      <span className="text-sm font-medium text-slate-700">{standard}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Related Services — Item #10 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.slice(0, 4).map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                    <ArrowRight className="h-4 w-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Section — Item #2 */}
            {COMMODITY_FAQS[commodity.slug] && (
              <div className="mb-16">
                <FAQJsonLd faqs={COMMODITY_FAQS[commodity.slug]} />
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {COMMODITY_FAQS[commodity.slug].map((faq) => (
                    <details key={faq.question} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                      <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-semibold hover:text-amber-700 transition-colors">
                        {faq.question}
                        <span className="text-amber-500 group-open:rotate-45 transition-transform text-xl">+</span>
                      </summary>
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Price Disclaimer — Item #85 */}
            <div className="mb-16 bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Disclaimer:</strong> Commodity prices are subject to market conditions and may fluctuate significantly.
                Any price information referenced on this page is for informational purposes only and does not constitute
                an offer to buy or sell at any specific price. Actual trading prices are determined at the time of
                transaction execution. Contact our trading desk for current pricing.
              </p>
            </div>

            {/* Related Blog Posts — Internal Linking */}
            {(() => {
              const titleLower = commodity.title.toLowerCase();
              const related = BLOG_POSTS.filter((p) =>
                p.keywords.some((k) => k.toLowerCase().includes(titleLower) || titleLower.includes(k.split(" ")[0].toLowerCase())) ||
                p.title.toLowerCase().includes(titleLower)
              ).slice(0, 3);
              if (related.length === 0) return null;
              return (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-amber-600" />
                    Related Insights
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {related.map((post) => (
                      <Link key={post.slug} href={`/insights/${post.slug}`} className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                        <div className="text-xs font-semibold text-amber-600 mb-2">{post.category}</div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2">{post.title}</h3>
                        <p className="text-xs text-slate-500">{post.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Trade {commodity.title} with Integrity
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Contact our trading desk to discuss your {commodity.title.toLowerCase()} requirements
                and discover how our compliance-first approach serves your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
              >
                Contact Trading Desk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
              <Link
                href={`/commodities/${prevCommodity.slug}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">{prevCommodity.title}</span>
              </Link>
              <Link
                href={`/commodities/${nextCommodity.slug}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                <span className="text-sm">{nextCommodity.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
