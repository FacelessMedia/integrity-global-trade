import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, ShieldCheck, Award, Globe, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Team — Leadership & Expertise",
  description: `Meet the leadership team behind ${SITE_CONFIG.shortName}. Led by founder Timothy Mercer, our team brings decades of experience in precious metals trading, compliance, and global supply chain management.`,
};

const leadership = [
  {
    name: "Timothy Mercer",
    title: "Founder & Chief Executive Officer",
    image: "/images/tim-mercer.jpg",
    linkedin: SITE_CONFIG.founderLinkedin,
    bio: "Timothy Mercer founded Integrity Global Trade & Commodities Corp with a singular vision: to bring institutional-grade compliance and ethical sourcing standards to the global commodities trading industry. Under his leadership, IGTC has facilitated over $3 billion in closed contract volume across 50+ countries, serving Fortune 500 semiconductor manufacturers, European automotive OEMs, and international refineries.",
    expertise: ["Precious Metals Trading", "KYC/AML Compliance", "Supply Chain Due Diligence", "Semiconductor Metals"],
  },
];

const departments = [
  {
    name: "Trading Desk",
    icon: Globe,
    description: "Our trading desk executes transactions across precious metals, non-ferrous metals, and critical minerals markets worldwide. Every trade undergoes real-time compliance screening.",
    roles: ["Senior Precious Metals Trader", "Non-Ferrous Metals Analyst", "Critical Minerals Specialist"],
  },
  {
    name: "Compliance & Risk",
    icon: ShieldCheck,
    description: "Our compliance team ensures every transaction meets or exceeds KYC/AML requirements. Powered by ComplyAdvantage AI technology for real-time sanctions screening and risk assessment.",
    roles: ["Chief Compliance Officer", "KYC/AML Analyst", "Risk Assessment Specialist"],
  },
  {
    name: "Supply Chain & Operations",
    icon: Award,
    description: "From UN Certified mine verification to LBMA Good Delivery standard refining through our IPMR partnership, our operations team manages the entire supply chain with full traceability.",
    roles: ["Supply Chain Director", "Logistics Coordinator", "Quality Assurance Manager"],
  },
  {
    name: "Client Relations",
    icon: Users,
    description: "Our client relations team provides personalized service to every counterparty, ensuring seamless onboarding, transparent communication, and long-term partnership development.",
    roles: ["Client Relations Manager", "Business Development Lead", "Account Executive"],
  },
];

export default function TeamPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Our Team", href: "/team" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Team</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Led by Experience.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Driven by Integrity.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our leadership team combines deep commodities trading expertise with an unwavering
              commitment to compliance, ethical sourcing, and client service.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Leadership</h2>
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{person.name}</h3>
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#004182] transition-colors" aria-label={`${person.name} LinkedIn`}>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-amber-600 font-semibold mb-4">{person.title}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{person.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map((skill) => (
                      <span key={skill} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Departments</h2>
            <p className="text-lg text-slate-600 mb-12">
              Every function at IGTC is built around compliance, transparency, and client service.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept) => {
                const Icon = dept.icon;
                return (
                  <div key={dept.name} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-amber-50 rounded-xl">
                        <Icon className="h-5 w-5 text-amber-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{dept.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{dept.description}</p>
                    <div className="space-y-1.5">
                      {dept.roles.map((role) => (
                        <div key={role} className="text-xs text-slate-500 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-amber-400" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Team</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            We&apos;re always looking for talented professionals who share our commitment to integrity
            and compliance in the global commodities space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
