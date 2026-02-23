import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Car, Plane, Gem, Factory, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: `${SITE_CONFIG.shortName} supplies precious metals, non-ferrous metals, and critical minerals to semiconductor, automotive, aerospace, jewelry, industrial manufacturing, and renewable energy industries worldwide.`,
};

const industries = [
  {
    title: "Semiconductor & Electronics",
    slug: "semiconductors",
    icon: <Cpu className="h-8 w-8" />,
    description: "Ultra-high purity precious metals for chip wafer coating, die bonding, wire bonding, and advanced electronic interconnections.",
    metals: ["Gold (Au)", "Silver (Ag)", "Platinum (Pt)", "Palladium (Pd)", "Copper (Cu)"],
    color: "#3B82F6",
  },
  {
    title: "Automotive",
    slug: "automotive",
    icon: <Car className="h-8 w-8" />,
    description: "Platinum group metals for catalytic converters, copper for electric vehicle wiring, and critical minerals for EV battery production.",
    metals: ["Platinum (Pt)", "Palladium (Pd)", "Rhodium (Rh)", "Copper (Cu)", "Lithium (Li)", "Cobalt (Co)"],
    color: "#EF4444",
  },
  {
    title: "Aerospace & Defense",
    slug: "aerospace",
    icon: <Plane className="h-8 w-8" />,
    description: "High-performance precious metals and specialty alloys for aircraft components, satellite systems, and defense electronics.",
    metals: ["Gold (Au)", "Platinum (Pt)", "Palladium (Pd)", "Silver (Ag)", "Copper (Cu)"],
    color: "#6366F1",
  },
  {
    title: "Jewelry & Luxury",
    slug: "jewelry",
    icon: <Gem className="h-8 w-8" />,
    description: "Ethically sourced, fully traceable precious metals for jewelry manufacturing, luxury goods, and high-end watchmaking.",
    metals: ["Gold (Au)", "Silver (Ag)", "Platinum (Pt)", "Palladium (Pd)"],
    color: "#D4AF37",
  },
  {
    title: "Industrial Manufacturing",
    slug: "industrial",
    icon: <Factory className="h-8 w-8" />,
    description: "Non-ferrous metals and industrial-grade materials for manufacturing, construction, electrical infrastructure, and heavy industry.",
    metals: ["Copper (Cu)", "Aluminium (Al)", "Zinc (Zn)", "Nickel (Ni)", "Lead (Pb)"],
    color: "#78716C",
  },
  {
    title: "Renewable Energy",
    slug: "renewable-energy",
    icon: <Zap className="h-8 w-8" />,
    description: "Silver for solar panel manufacturing, copper for wind turbines, and critical minerals for energy storage and battery technology.",
    metals: ["Silver (Ag)", "Copper (Cu)", "Lithium (Li)", "Cobalt (Co)", "Manganese (Mn)"],
    color: "#22C55E",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries" },
      ]} />
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Industries We Serve</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Metals That Power{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Every Industry</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From semiconductor fabs to solar farms, our ethically sourced metals and minerals
              are the foundation of modern industry. Over $3 billion in closed contract volume
              serving clients across 50+ countries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5" style={{ backgroundColor: industry.color }} />
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 bg-slate-50 p-10 flex flex-col items-center justify-center text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                    >
                      {industry.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {industry.title}
                    </h2>
                  </div>
                  <div className="lg:w-3/4 p-10">
                    <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Metals & Minerals</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.metals.map((metal) => (
                          <span key={metal} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                            {metal}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Metals for Your Industry?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Every industry has unique requirements. Contact our team to discuss your specific
            metal specifications, volumes, and compliance needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
            Discuss Your Requirements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
