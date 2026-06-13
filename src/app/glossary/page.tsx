import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Commodities & Metals Trading Glossary",
  description: "Comprehensive glossary of precious metals, non-ferrous metals, commodities trading, refining, compliance, and supply chain terminology used in the global metals industry.",
  keywords: ["metals trading glossary", "precious metals terms", "commodities terminology", "LBMA glossary", "gold trading terms"],
};

const glossaryTerms = [
  { term: "AML (Anti-Money Laundering)", definition: "Laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income. In metals trading, AML compliance requires transaction monitoring, suspicious activity reporting, and customer due diligence." },
  { term: "Assay", definition: "The process of analyzing a metal to determine its composition and purity. An assay certificate documents the results and accompanies refined metals throughout the supply chain." },
  { term: "Base Metals", definition: "Common, non-precious metals such as copper, aluminium, zinc, nickel, lead, and tin. Also called non-ferrous metals when referring to metals that don't contain iron." },
  { term: "Bullion", definition: "Precious metals (gold, silver, platinum, palladium) in bulk form, typically as bars or ingots, valued by weight and purity rather than face value." },
  { term: "Chain of Custody", definition: "The documented trail that records the sequence of custody, control, transfer, and disposition of materials from source to end user. Essential for compliance and traceability in metals trading." },
  { term: "ComplyAdvantage", definition: "An AI-powered regulatory compliance technology platform used for real-time sanctions screening, PEP identification, and adverse media monitoring in financial and commodities trading." },
  { term: "Conflict Minerals", definition: "Minerals mined in conditions of armed conflict and human rights abuses, particularly in the Democratic Republic of Congo. Includes tin, tantalum, tungsten, and gold (3TG)." },
  { term: "CPC (Cost Per Click)", definition: "In digital marketing, the price paid each time someone clicks on an advertisement. High CPC keywords in metals trading indicate high commercial value." },
  { term: "Critical Minerals", definition: "Minerals essential for economic and national security that face supply chain risks. Includes lithium, cobalt, manganese, rare earth elements, and others vital for clean energy and defense." },
  { term: "Doré", definition: "A semi-pure alloy of gold and silver, typically produced at a mine site. Doré bars are sent to refineries for further purification to investment or industrial grade." },
  { term: "Due Diligence", definition: "The investigation and assessment of a business or individual before entering a transaction. In metals trading, due diligence covers identity verification, source verification, and risk assessment." },
  { term: "Electrolytic Refining", definition: "A purification process where impure metal is dissolved from an anode and deposited as pure metal on a cathode using an electric current. Used to achieve 99.99%+ purity for gold and copper." },
  { term: "Fineness", definition: "A measure of the purity of a precious metal, expressed in parts per thousand. For example, 999.9 fineness means 99.99% pure gold." },
  { term: "Good Delivery", definition: "The LBMA standard for gold and silver bars accepted in the London wholesale market. Good Delivery bars must meet specific weight, dimensions, fineness, and appearance requirements." },
  { term: "IPMR", definition: "International Precious Metals Refiners — a refinery specializing in Miller Processing and precious metals refining to LBMA Good Delivery standards." },
  { term: "KYC (Know Your Customer)", definition: "The process of verifying the identity of clients and assessing their risk profile. In commodities trading, KYC is mandatory for all counterparties regardless of size." },
  { term: "LBMA", definition: "London Bullion Market Association — the international trade association representing the global wholesale over-the-counter market for gold and silver. Sets the Good Delivery standards." },
  { term: "LME", definition: "London Metal Exchange — the world's largest market for trading base/non-ferrous metals including copper, aluminium, zinc, nickel, lead, and tin." },
  { term: "Miller Process", definition: "A gold refining technique that uses chlorine gas to purify molten gold by converting impurities into chloride slag. Produces gold of approximately 99.5-99.7% purity." },
  { term: "Non-Ferrous Metals", definition: "Metals that do not contain significant amounts of iron. Includes copper, aluminium, zinc, nickel, tin, and lead. Valued for electrical conductivity, corrosion resistance, and lightweight properties." },
  { term: "OECD Due Diligence Guidance", definition: "The Organisation for Economic Co-operation and Development's framework for responsible supply chains of minerals from conflict-affected and high-risk areas." },
  { term: "PEP (Politically Exposed Person)", definition: "An individual who holds or has held a prominent public position. PEPs and their associates are subject to enhanced due diligence in financial and commodities transactions." },
  { term: "PGM (Platinum Group Metals)", definition: "A group of six metallic elements: platinum, palladium, rhodium, iridium, ruthenium, and osmium. Known for catalytic properties and used in automotive, chemical, and electronic applications." },
  { term: "Physical Trading", definition: "The buying and selling of actual physical commodities (as opposed to derivatives or futures contracts). Physical trading involves storage, transportation, insurance, and delivery of real material." },
  { term: "Precious Metals", definition: "Rare, naturally occurring metallic elements with high economic value. The four primary precious metals are gold (Au), silver (Ag), platinum (Pt), and palladium (Pd)." },
  { term: "Sanctions Screening", definition: "The process of checking individuals and entities against government sanctions lists (OFAC, EU, UN) to prevent prohibited transactions. Modern screening uses AI technology for real-time verification." },
  { term: "Semiconductor-Grade", definition: "Ultra-high purity metals (typically 99.99% or higher) suitable for use in semiconductor manufacturing processes such as chip wafer coating, wire bonding, and die bonding." },
  { term: "Spot Price", definition: "The current market price at which a commodity can be bought or sold for immediate delivery. Spot prices fluctuate based on supply, demand, and market conditions." },
  { term: "Sputtering Target", definition: "A high-purity metal disc used in physical vapor deposition (PVD) to coat semiconductor wafers and other substrates with thin metal films." },
  { term: "Troy Ounce", definition: "The standard unit of measurement for precious metals. One troy ounce equals approximately 31.1 grams. The LBMA Good Delivery gold bar weighs 350-430 troy ounces." },
  { term: "UN Certified Mine", definition: "A mining operation that complies with United Nations standards for human rights, labor practices, environmental protection, and anti-corruption. Sourcing from certified mines ensures ethical supply chain integrity." },
  { term: "Wire Bonding", definition: "A semiconductor packaging process that creates electrical connections between a chip die and its package using thin metal wires (typically gold or palladium-coated copper)." },
];

export default function GlossaryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Glossary", href: "/glossary" }]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Resources</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Metals & Commodities{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Trading Glossary</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A comprehensive reference guide to precious metals, non-ferrous metals, commodities trading,
              refining, compliance, and supply chain terminology used in the global metals industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {glossaryTerms.map((item) => (
                <div key={item.term} id={item.term.toLowerCase().replace(/[^a-z0-9]/g, "-")} className="bg-slate-50 rounded-xl p-6 border border-slate-200 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{item.term}</h2>
                  <p className="text-slate-600 leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Have Questions About Metals Trading?</h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Our team is available to discuss any aspect of precious metals, non-ferrous metals,
                or commodities trading. Over $1 billion in allocated contract volume.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
