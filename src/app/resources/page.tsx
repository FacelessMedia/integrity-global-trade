import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShieldCheck, FileText, BarChart3, Globe, GraduationCap, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resources — Guides, Glossary & Market Intelligence",
  description: `Access ${SITE_CONFIG.shortName}'s library of resources including our metals trading glossary, industry insights, compliance guides, and case studies for commodities professionals.`,
};

const resources = [
  {
    title: "Industry Insights & Analysis",
    description: "In-depth articles on precious metals markets, semiconductor supply chains, compliance best practices, and commodity trading strategies.",
    href: "/insights",
    icon: BarChart3,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    count: "10+ Articles",
  },
  {
    title: "Metals & Commodities Glossary",
    description: "Comprehensive reference guide with 30+ industry terms covering precious metals, refining, compliance, and supply chain terminology.",
    href: "/glossary",
    icon: GraduationCap,
    color: "bg-amber-50 text-amber-600 border-amber-200",
    count: "32 Terms",
  },
  {
    title: "Case Studies",
    description: "Real-world examples of how IGTC delivers ethically sourced commodities to Fortune 500 manufacturers, automotive OEMs, and international refineries.",
    href: "/case-studies",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    count: "3 Case Studies",
  },
  {
    title: "Compliance Framework",
    description: "Learn about our KYC/AML compliance process, ComplyAdvantage AI integration, OECD due diligence adherence, and supply chain traceability standards.",
    href: "/compliance",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    count: "Compliance Hub",
  },
  {
    title: "Industry Landing Pages",
    description: "Specialized resources for semiconductor, automotive, aerospace, jewelry, industrial manufacturing, and renewable energy sectors.",
    href: "/industries",
    icon: Globe,
    color: "bg-sky-50 text-sky-600 border-sky-200",
    count: "6 Industries",
  },
  {
    title: "Privacy & Legal",
    description: "Our privacy policy, terms of service, and legal documentation demonstrating our commitment to data protection and transparency.",
    href: "/privacy",
    icon: BookOpen,
    color: "bg-slate-50 text-slate-600 border-slate-200",
    count: "Legal Docs",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Resources</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Knowledge Hub for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Commodities Professionals</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Access our library of market insights, industry guides, compliance resources,
              and educational content for precious metals and commodities trading.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl border ${resource.color} mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">{resource.count}</span>
                    <ArrowRight className="h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Something Specific?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Our team is available to discuss any aspect of precious metals trading, compliance,
            or supply chain management. Over $1 billion in allocated contract volume.
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
