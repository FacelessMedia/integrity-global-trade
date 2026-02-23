import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { COMMODITIES, SITE_CONFIG } from "@/lib/constants";
import { CommodityJsonLd, BreadcrumbJsonLd } from "@/lib/structured-data";

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
