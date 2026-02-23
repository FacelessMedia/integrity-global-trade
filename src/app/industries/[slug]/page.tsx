import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle, ShieldCheck, Cpu, Car, Plane, Gem, Factory, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

const INDUSTRIES = [
  {
    title: "Semiconductor & Electronics",
    slug: "semiconductors",
    icon: "cpu",
    heroDescription: "The semiconductor industry demands the highest purity metals available. Integrity Global Trade supplies ultra-high purity gold, silver, platinum, and palladium specifically refined for chip wafer coating, die bonding, wire bonding, and advanced electronic interconnections.",
    sections: [
      {
        heading: "Why Precious Metals Are Essential for Semiconductors",
        content: "Modern semiconductor manufacturing relies on precious metals at nearly every stage of chip production. Gold is used for wire bonding connections between the chip die and the package leads — its exceptional conductivity and resistance to corrosion make it irreplaceable. Silver paste is used in die attach processes. Platinum and palladium serve as catalysts and contact materials in specialized applications. As chips become smaller and more complex, the purity requirements for these metals become even more demanding — often requiring 99.99% or higher purity levels.",
      },
      {
        heading: "Our Semiconductor Metals Capabilities",
        content: "Through our partnership with IPMR (International Precious Metals Refiners), we deliver metals refined to semiconductor-grade purity using state-of-the-art Miller Processing technology. Every shipment comes with full assay certification, chain-of-custody documentation, and compliance verification. We supply gold bonding wire feedstock, silver paste materials, platinum sputtering targets, and palladium plating solutions — all sourced from UN-certified mines with complete traceability.",
      },
      {
        heading: "Compliance for the Semiconductor Supply Chain",
        content: "The semiconductor industry faces increasing regulatory scrutiny around conflict minerals and supply chain transparency. Our comprehensive KYC/AML compliance framework, powered by ComplyAdvantage AI, ensures every transaction meets the highest standards. We provide full OECD-compliant due diligence documentation, making us an ideal partner for semiconductor manufacturers who need audit-ready supply chain records.",
      },
    ],
    metals: ["Gold (Au) — Wire bonding, chip wafer coating", "Silver (Ag) — Die attach, conductive paste", "Platinum (Pt) — Sputtering targets, catalysts", "Palladium (Pd) — Plating solutions, contacts", "Copper (Cu) — Interconnects, lead frames"],
    color: "#3B82F6",
  },
  {
    title: "Automotive",
    slug: "automotive",
    icon: "car",
    heroDescription: "The automotive industry is one of the largest consumers of platinum group metals and is rapidly increasing demand for copper, lithium, and cobalt as the electric vehicle revolution accelerates.",
    sections: [
      {
        heading: "Catalytic Converter Metals",
        content: "Every internal combustion vehicle requires platinum, palladium, and rhodium in its catalytic converter to reduce harmful emissions. We supply PGMs to catalytic converter manufacturers worldwide, with full traceability from mine to factory. As emission standards tighten globally, demand for these metals continues to grow.",
      },
      {
        heading: "Electric Vehicle Materials",
        content: "The EV revolution is driving unprecedented demand for copper (electric motors, wiring harnesses, charging infrastructure), lithium and cobalt (battery cathodes), and rare earth elements (permanent magnets). We source these critical minerals from certified, responsible mines — essential for automakers who need to demonstrate ESG compliance across their supply chains.",
      },
      {
        heading: "Automotive-Grade Quality Standards",
        content: "Automotive OEMs require the highest quality standards and complete supply chain documentation. Our metals meet IATF 16949 quality requirements, and every shipment includes full chain-of-custody certification, material safety data sheets, and compliance documentation.",
      },
    ],
    metals: ["Platinum (Pt) — Catalytic converters", "Palladium (Pd) — Catalytic converters", "Rhodium (Rh) — Catalytic converters", "Copper (Cu) — EV motors, wiring, charging", "Lithium (Li) — Battery cathodes", "Cobalt (Co) — Battery cathodes"],
    color: "#EF4444",
  },
  {
    title: "Aerospace & Defense",
    slug: "aerospace",
    icon: "plane",
    heroDescription: "Aerospace and defense applications demand the most reliable and highest-performing materials available. Our precious metals and specialty alloys meet the exacting standards of this critical industry.",
    sections: [
      {
        heading: "Mission-Critical Materials",
        content: "From satellite communications systems to jet engine components, precious metals play a vital role in aerospace. Gold is used in electrical contacts and connectors that must perform flawlessly in extreme conditions. Platinum-group metals serve as catalysts in fuel cells and chemical processing. Silver is essential for high-conductivity electrical systems. Every gram must meet the most demanding specifications.",
      },
      {
        heading: "Defense-Grade Supply Chain Security",
        content: "Defense contractors require supply chain security and traceability that goes beyond commercial standards. Our KYC/AML compliance framework, sanctions screening, and chain-of-custody documentation provide the audit trail that defense procurement demands. We source exclusively from allied, certified mining operations.",
      },
    ],
    metals: ["Gold (Au) — Connectors, contacts, coatings", "Platinum (Pt) — Catalysts, fuel cells", "Silver (Ag) — Electrical systems", "Palladium (Pd) — Electronic components", "Copper (Cu) — Wiring, heat exchangers"],
    color: "#6366F1",
  },
  {
    title: "Jewelry & Luxury",
    slug: "jewelry",
    icon: "gem",
    heroDescription: "The luxury and jewelry industry increasingly demands ethically sourced, fully traceable precious metals. We provide responsibly mined gold, silver, and platinum with complete provenance documentation.",
    sections: [
      {
        heading: "Ethical Sourcing for Luxury Brands",
        content: "Consumer awareness of ethical sourcing has transformed the jewelry industry. Major luxury brands now require their precious metals suppliers to demonstrate responsible mining practices, environmental stewardship, and fair labor conditions. Our exclusive sourcing from UN-certified and Environmental Impact Certified mines meets and exceeds these requirements.",
      },
      {
        heading: "LBMA Good Delivery Standards",
        content: "Through our partnership with IPMR, we supply gold and silver refined to LBMA Good Delivery standards — the global benchmark for precious metals quality. Every bar comes with assay certificates, origin documentation, and full chain-of-custody records that satisfy the most demanding compliance audits.",
      },
    ],
    metals: ["Gold (Au) — Fine jewelry, luxury watches", "Silver (Ag) — Sterling silver jewelry", "Platinum (Pt) — Premium jewelry, engagement rings", "Palladium (Pd) — White gold alloys, watchmaking"],
    color: "#D4AF37",
  },
  {
    title: "Industrial Manufacturing",
    slug: "industrial",
    icon: "factory",
    heroDescription: "Modern industrial manufacturing depends on reliable supplies of non-ferrous metals. We provide copper, aluminium, zinc, nickel, and other essential materials for construction, electrical infrastructure, and heavy industry.",
    sections: [
      {
        heading: "Non-Ferrous Metals for Industry",
        content: "Non-ferrous metals are the backbone of modern manufacturing. Copper provides superior electrical and thermal conductivity for wiring, motors, and heat exchangers. Aluminium offers lightweight strength for construction and transportation. Zinc protects steel through galvanization. Nickel provides corrosion resistance for stainless steel and specialty alloys. We supply these metals at industrial scale with consistent quality.",
      },
      {
        heading: "Reliable Supply at Scale",
        content: "Industrial manufacturers need reliable, consistent supply to keep production lines running. Our global sourcing network, secure logistics infrastructure, and bonded warehouse capabilities ensure uninterrupted supply. We offer spot purchases, forward contracts, and managed inventory programs tailored to your production schedule.",
      },
    ],
    metals: ["Copper (Cu) — Electrical, thermal applications", "Aluminium (Al) — Construction, transportation", "Zinc (Zn) — Galvanization, alloys", "Nickel (Ni) — Stainless steel, specialty alloys", "Lead (Pb) — Batteries, radiation shielding"],
    color: "#78716C",
  },
  {
    title: "Renewable Energy",
    slug: "renewable-energy",
    icon: "zap",
    heroDescription: "The global energy transition is creating unprecedented demand for silver, copper, lithium, cobalt, and rare earth elements. We source the critical minerals that power the renewable future.",
    sections: [
      {
        heading: "Solar Energy Materials",
        content: "Silver is a critical component in photovoltaic solar cells — each standard solar panel contains approximately 20 grams of silver paste for electrical contacts. As global solar installations continue to grow exponentially, silver demand from this sector is projected to increase significantly. We supply solar-grade silver to panel manufacturers worldwide.",
      },
      {
        heading: "Energy Storage & Battery Metals",
        content: "Grid-scale energy storage and electric vehicle batteries require lithium, cobalt, manganese, and nickel in massive quantities. We source these critical minerals from certified operations with full ESG compliance — essential for renewable energy companies that need to demonstrate sustainability across their entire supply chain.",
      },
      {
        heading: "Wind & Grid Infrastructure",
        content: "Wind turbines require significant quantities of copper for generators and electrical systems, plus rare earth elements for permanent magnets. Grid modernization demands vast amounts of copper and aluminium for transmission lines. We provide the metals that connect renewable generation to consumers.",
      },
    ],
    metals: ["Silver (Ag) — Solar cell contacts", "Copper (Cu) — Wind turbines, grid infrastructure", "Lithium (Li) — Battery storage", "Cobalt (Co) — Battery cathodes", "Manganese (Mn) — Battery chemistry", "Rare Earths — Permanent magnets"],
    color: "#22C55E",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu className="h-8 w-8" />,
  car: <Car className="h-8 w-8" />,
  plane: <Plane className="h-8 w-8" />,
  gem: <Gem className="h-8 w-8" />,
  factory: <Factory className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} | Industries We Serve`,
    description: industry.heroDescription,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const idx = INDUSTRIES.findIndex((i) => i.slug === slug);
  const next = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
  const prev = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries" },
        { name: industry.title, href: `/industries/${industry.slug}` },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-amber-400 transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-amber-400">{industry.title}</span>
          </nav>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${industry.color}20`, color: industry.color }}>
              {iconMap[industry.icon]}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{industry.title}</h1>
          </div>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">{industry.heroDescription}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {industry.sections.map((section) => (
              <div key={section.heading} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Metals & Minerals for {industry.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industry.metals.map((metal) => (
                  <div key={metal} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                    <CheckCircle className="h-5 w-5 shrink-0" style={{ color: industry.color }} />
                    <span className="text-slate-700 text-sm font-medium">{metal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-12 flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Compliance Guaranteed</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every metal we supply to the {industry.title.toLowerCase()} industry comes with full KYC/AML verification,
                  chain-of-custody documentation, and sourcing from UN-certified mines. Our ComplyAdvantage AI
                  sanctions screening ensures full regulatory compliance on every transaction.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Metals for {industry.title}?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Contact our team to discuss your specific requirements, volumes, and compliance needs.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
              <Link href={`/industries/${prev.slug}`} className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
                <ArrowLeft className="h-4 w-4" /><span className="text-sm">{prev.title}</span>
              </Link>
              <Link href={`/industries/${next.slug}`} className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
                <span className="text-sm">{next.title}</span><ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
