import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Award, Users, Target, Eye, Linkedin, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name}, a premier global commodities trading company founded by ${SITE_CONFIG.founder}. Specializing in precious metals, non-ferrous metals, and critical minerals with full KYC/AML compliance.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Built on Integrity.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Driven by Excellence.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Integrity Global Trade & Commodities Corp is a premier international trading
              company specializing in the ethical sourcing, refining, and global distribution
              of precious metals, non-ferrous metals, and critical minerals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                From Vision to Global Impact
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded by Timothy Mercer, Integrity Global Trade & Commodities Corp was
                  established with a singular vision: to create a commodities trading company
                  where compliance and ethics are not afterthoughts — they are the foundation
                  of every transaction.
                </p>
                <p>
                  In an industry often plagued by opacity and questionable sourcing practices,
                  we chose a different path. Every raw material we trade is sourced from
                  industrial mines holding the highest standards for labor practices and
                  environmental stewardship — UN Certified and Environmental Impact Certified.
                </p>
                <p>
                  Our partnership with IPMR (International Precious Metals Refiners) provides
                  our clients access to state-of-the-art Miller Processing technology, enabling
                  us to deliver precious metals refined to the highest purity standards — including
                  specialized refining for semiconductor chip wafer coating and electronic
                  connection applications.
                </p>
                <p>
                  Today, with over <strong>$3 billion in closed contract volume</strong>,
                  Integrity Global Trade serves clients across 50+ countries, providing
                  precious metals, non-ferrous metals, and critical minerals to semiconductor
                  manufacturers, industrial consumers, renewable energy companies, and
                  institutional investors worldwide.
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-amber-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {["LBMA", "OECD", "UN Certified", "KYC/AML", "ComplyAdvantage"].map((badge) => (
                    <span
                      key={badge}
                      className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-10 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the world&apos;s most trusted commodities trading partner by delivering
                ethically sourced precious metals, non-ferrous metals, and critical minerals
                with uncompromising compliance and full supply chain transparency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A global commodities market where every transaction is transparent, every
                source is ethical, and every partner in the supply chain upholds the highest
                standards of integrity and environmental responsibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Integrity</strong> in every transaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Compliance</strong> without compromise</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Sustainability</strong> in sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Excellence</strong> in service delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Transparency</strong> across the supply chain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Leadership
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <Image
                    src="/images/timothy-mercer.jpg"
                    alt="Timothy Mercer - Founder & CEO of Integrity Global Trade & Commodities Corp"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-xl object-cover mb-3"
                  />
                  <a
                    href={SITE_CONFIG.founderLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors w-full justify-center"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    View LinkedIn
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Timothy Mercer</h3>
                  <p className="text-amber-600 font-medium mb-1">Founder & CEO</p>
                  <p className="text-slate-400 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                  </p>
                  <div className="space-y-3 text-slate-600 leading-relaxed">
                    <p>
                      Timothy Mercer brings extensive experience in global commodities trading,
                      precious metals markets, and international supply chain management.
                      His vision for Integrity Global Trade was born from a deep commitment
                      to transforming how precious metals are sourced, traded, and delivered
                      across global markets.
                    </p>
                    <p>
                      Under his leadership, the company has facilitated over <strong className="text-slate-800">$3 billion
                      in closed contracts and facilitation</strong>, established partnerships with
                      UN-certified mines, built a comprehensive compliance framework powered
                      by ComplyAdvantage AI technology, and forged strategic alliances with
                      world-class refineries including IPMR.
                    </p>
                    <p>
                      Timothy&apos;s focus on the intersection of precious metals and semiconductor
                      technology has positioned Integrity Global Trade as a specialized
                      supplier of ultra-high purity metals for chip wafer coating and
                      advanced electronics manufacturing.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 font-medium">
                      <ShieldCheck className="h-3 w-3" /> KYC/AML Verified
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                      Est. {SITE_CONFIG.established}
                    </span>
                    <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full border border-amber-200 font-medium">
                      $3B+ Closed Volume
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with Integrity
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join the growing number of global businesses that trust Integrity Global Trade
            for their precious metals and commodities sourcing needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
