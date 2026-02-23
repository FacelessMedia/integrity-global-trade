import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Users, Briefcase } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Careers — Join Our Growing Team",
  description: `Explore career opportunities at ${SITE_CONFIG.shortName}. We're building a world-class team of commodities trading, compliance, and supply chain professionals committed to ethical sourcing.`,
};

const values = [
  { icon: ShieldCheck, title: "Integrity First", description: "Every decision we make starts with compliance and ethics. We never cut corners on due diligence." },
  { icon: Globe, title: "Global Impact", description: "Our work spans 50+ countries, connecting certified mines to Fortune 500 manufacturers." },
  { icon: TrendingUp, title: "Growth Trajectory", description: "Over $3B in closed volume in 4 years. We're scaling fast and need exceptional people." },
  { icon: Users, title: "Small Team, Big Impact", description: "Every team member has a direct impact on the business. No bureaucracy, just results." },
];

const openings = [
  { title: "Senior Precious Metals Trader", department: "Trading Desk", location: "Remote / Sheridan, WY", type: "Full-Time" },
  { title: "KYC/AML Compliance Analyst", department: "Compliance & Risk", location: "Remote", type: "Full-Time" },
  { title: "Supply Chain Coordinator", department: "Operations", location: "Remote / Sheridan, WY", type: "Full-Time" },
  { title: "Business Development Manager", department: "Client Relations", location: "Remote", type: "Full-Time" },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Careers</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Build Your Career in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Ethical Commodities Trading</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Join a fast-growing company that&apos;s redefining compliance standards in the global
              commodities industry. We&apos;re looking for exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Work at IGTC?</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="p-2.5 bg-amber-50 rounded-xl shrink-0">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-slate-600 mb-10">
              We&apos;re actively hiring for the following roles. Don&apos;t see your perfect fit?
              Send us your resume anyway — we&apos;re always interested in exceptional talent.
            </p>
            <div className="space-y-4">
              {openings.map((job) => (
                <Link
                  key={job.title}
                  href="/contact"
                  className="group flex items-center justify-between bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-amber-500" />
                      <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{job.department}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Send your resume and a brief note about why you&apos;re interested in commodities trading
            to our team. We review every application personally.
          </p>
          <Link
            href={`mailto:${SITE_CONFIG.email}?subject=Career Inquiry`}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
