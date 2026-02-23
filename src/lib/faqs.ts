export const SERVICE_FAQS: Record<string, Array<{ question: string; answer: string }>> = {
  "precious-metals-trading": [
    { question: "What precious metals does Integrity Global Trade deal in?", answer: "We trade gold, silver, platinum, and palladium — sourced exclusively from UN-certified and Environmental Impact Certified mines with full chain-of-custody documentation." },
    { question: "What is the minimum order size for precious metals trading?", answer: "We work with clients across a range of volumes, from institutional investors to industrial manufacturers. Contact our trading desk to discuss your specific requirements and we'll provide a tailored solution." },
    { question: "How do you ensure the ethical sourcing of precious metals?", answer: "Every ounce we trade is sourced from UN Certified and Environmental Impact Certified industrial mines. We use ComplyAdvantage AI for real-time sanctions screening, and every customer undergoes full KYC/AML verification regardless of size." },
    { question: "Do you provide physical delivery of precious metals?", answer: "Yes, we offer physical delivery of London Good Delivery bars through our partnership with IPMR (International Precious Metals Refiners), as well as spot and forward contract execution." },
  ],
  "non-ferrous-metals": [
    { question: "What non-ferrous metals do you supply?", answer: "We supply copper, aluminium, zinc, nickel, lead, and tin — all LME-grade materials sourced from certified industrial mines with full compliance documentation." },
    { question: "Why are non-ferrous metals important for electronics?", answer: "Non-ferrous metals like copper offer superior electrical conductivity — up to 6x better than steel. They're essential for wiring, circuit boards, connectors, heat sinks, and virtually every electronic device manufactured today." },
    { question: "Can you supply custom alloy specifications?", answer: "Yes, we work with our refinery partners to provide metals meeting specific alloy compositions, purity levels, and form factors required by your manufacturing process." },
  ],
  "critical-minerals": [
    { question: "What critical minerals does Integrity Global Trade source?", answer: "We source lithium, cobalt, manganese, rare earth elements, tungsten, and tantalum — all critical for battery technology, renewable energy, and advanced manufacturing." },
    { question: "How do you ensure conflict-free sourcing of critical minerals?", answer: "We adhere to OECD Due Diligence Guidance for responsible supply chains, source only from certified operations, and use ComplyAdvantage AI for continuous sanctions screening across the entire supply chain." },
  ],
  "semiconductor-metals": [
    { question: "What purity levels do you offer for semiconductor-grade metals?", answer: "Through our IPMR partnership, we deliver gold refined to 99.99% (4N) and higher purity levels using Miller Processing and electrolytic refining, meeting the most exacting semiconductor manufacturing specifications." },
    { question: "What semiconductor applications do your metals support?", answer: "Our metals are used in chip wafer coating, wire bonding, die bonding, bump bonding, sputtering targets, and conductive pastes across the full spectrum of semiconductor packaging and fabrication." },
    { question: "Do you provide assay certification with every shipment?", answer: "Yes, every batch comes with full assay certification, detailed impurity analysis, material safety data sheets, and chain-of-custody documentation from mine to your facility." },
  ],
  "refining-processing": [
    { question: "Who is your refining partner?", answer: "We partner with IPMR (International Precious Metals Refiners), a state-of-the-art facility specializing in Miller Processing and electrolytic refining to LBMA Good Delivery standards." },
    { question: "What is the Miller Process?", answer: "The Miller Process uses chlorine gas to purify molten gold by converting impurity metals into chloride slag. It's the standard industrial method for achieving 99.5%+ gold purity, and the first step before further electrolytic refining to higher purities." },
    { question: "Can you refine gold doré from mining operations?", answer: "Yes, through our IPMR partnership we accept gold doré and other raw precious metals materials for refining to investment-grade or semiconductor-grade purity specifications." },
  ],
  "supply-chain": [
    { question: "How do you ensure supply chain traceability?", answer: "Every shipment includes complete chain-of-custody documentation from the certified mine through refining, logistics, and final delivery — verified at every step with our KYC/AML compliance framework." },
    { question: "Do you offer bonded warehouse storage?", answer: "Yes, we provide secure bonded warehouse storage facilities for clients who need to hold inventory. All storage locations maintain full security, insurance, and inventory tracking." },
    { question: "What logistics capabilities do you have?", answer: "We manage secure transportation globally, including armored transport for precious metals, customs clearance, insurance, and real-time shipment tracking from origin to destination." },
  ],
  "risk-management": [
    { question: "What hedging strategies do you offer?", answer: "We provide price hedging through forward contracts, futures positioning, and options strategies tailored to your specific exposure and risk tolerance." },
    { question: "Do you provide market intelligence?", answer: "Yes, our team provides market analysis, price forecasting, and strategic advice to help clients make informed trading decisions based on supply-demand fundamentals and macroeconomic factors." },
  ],
};

export const COMMODITY_FAQS: Record<string, Array<{ question: string; answer: string }>> = {
  gold: [
    { question: "How is gold used in semiconductor manufacturing?", answer: "Gold is used for wire bonding connections between chip dies and package leads, chip wafer coating for reliable electrical contacts, and die bonding using gold-tin eutectic alloys. The semiconductor industry consumes approximately 150-200 tons of gold annually." },
    { question: "What forms of gold does Integrity Global Trade supply?", answer: "We supply gold in various forms including London Good Delivery bars, investment bars, wire bonding feedstock, sputtering targets, and custom forms — all refined to 99.99%+ purity through our IPMR partnership." },
    { question: "Is your gold ethically sourced?", answer: "100% of our gold is sourced from UN Certified and Environmental Impact Certified industrial mines with documented chain-of-custody. Every transaction undergoes KYC/AML verification using ComplyAdvantage AI." },
  ],
  silver: [
    { question: "Why is silver important for solar energy?", answer: "Silver is a critical component in photovoltaic solar cells — each standard solar panel contains approximately 20 grams of silver paste for electrical contacts. Silver's unmatched electrical conductivity makes it irreplaceable in solar technology." },
    { question: "What industrial applications use silver?", answer: "Silver is used in electronics (circuit boards, connectors), solar panels, medical devices, industrial catalysts, photography, brazing alloys, and water purification. It has the highest electrical conductivity of any metal." },
  ],
  "platinum-palladium": [
    { question: "What are platinum group metals (PGMs)?", answer: "PGMs include platinum, palladium, rhodium, iridium, ruthenium, and osmium. They are characterized by exceptional catalytic properties, corrosion resistance, and high melting points — making them essential for automotive, chemical, and electronic applications." },
    { question: "Why are PGMs important for the automotive industry?", answer: "Platinum and palladium are primary components in catalytic converters, which reduce harmful exhaust emissions. As global emission standards tighten, demand for PGMs in automotive applications continues to grow." },
  ],
  copper: [
    { question: "Why is copper demand growing in the energy transition?", answer: "Electric vehicles use 3-4x more copper than conventional cars. Renewable energy systems (solar, wind) require significantly more copper per megawatt than fossil fuel generation. Global electrification is driving unprecedented copper demand growth." },
    { question: "What grades of copper does Integrity Global Trade supply?", answer: "We supply LME-grade copper cathodes, copper rod, and other forms meeting specific industrial specifications — all sourced from certified mines with full compliance documentation." },
  ],
  "critical-minerals": [
    { question: "What are critical minerals?", answer: "Critical minerals are materials essential for modern technology and economic security that face supply chain risks. They include lithium, cobalt, manganese, rare earth elements, tungsten, tantalum, and graphite — vital for batteries, electronics, defense, and clean energy." },
    { question: "How does Integrity Global Trade source critical minerals responsibly?", answer: "We source exclusively from certified operations with full OECD Due Diligence compliance, avoiding conflict-affected regions and ensuring environmental and labor standards are met at every stage of the supply chain." },
  ],
};
