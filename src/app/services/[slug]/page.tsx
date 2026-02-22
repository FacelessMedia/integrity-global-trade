import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(serviceIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(serviceIndex - 1 + SERVICES.length) % SERVICES.length];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-amber-400">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <CheckCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-800 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us for this service */}
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose Integrity Global Trade for {service.title}?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At Integrity Global Trade & Commodities Corp, our {service.title.toLowerCase()} services
                  are underpinned by our unwavering commitment to compliance, ethical sourcing, and
                  supply chain transparency. Every transaction is fully KYC/AML verified, and we
                  source exclusively from UN Certified and Environmental Impact Certified mines.
                </p>
                <p>
                  Our partnership with IPMR (International Precious Metals Refiners) and adherence
                  to LBMA, OECD, and international standards ensures that our clients receive
                  materials of the highest quality and provenance. We use ComplyAdvantage AI
                  technology for real-time sanctions screening on every transaction.
                </p>
                <p>
                  Whether you are a semiconductor manufacturer requiring ultra-high purity metals
                  for chip wafer coating, an industrial consumer needing reliable non-ferrous
                  metals supply, or an investor seeking ethically sourced precious metals — our
                  team delivers tailored solutions with full documentation and chain-of-custody
                  traceability.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested in Our {service.title} Services?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Let us understand your requirements and provide a tailored solution
                backed by our compliance-first approach.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
              <Link
                href={`/services/${prevService.slug}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">{prevService.title}</span>
              </Link>
              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                <span className="text-sm">{nextService.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
