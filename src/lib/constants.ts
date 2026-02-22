export const SITE_CONFIG = {
  name: "Integrity Global Trade & Commodities Corp",
  shortName: "Integrity Global Trade",
  abbreviation: "IGTC",
  description:
    "A premier global commodities trading company specializing in precious metals, non-ferrous metals, and critical minerals for semiconductor manufacturing. Ethical sourcing from UN-certified mines with full KYC/AML compliance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://integrityglobaltrade.com",
  founder: "Timothy Mercer",
  founderTitle: "Founder & CEO",
  email: "info@integrityglobaltrade.com",
  phone: "+1 (555) 000-0000",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Precious Metals Trading", href: "/services/precious-metals-trading" },
      { label: "Non-Ferrous Metals", href: "/services/non-ferrous-metals" },
      { label: "Critical Minerals & Rare Earths", href: "/services/critical-minerals" },
      { label: "Semiconductor Metals", href: "/services/semiconductor-metals" },
      { label: "Refining & Processing", href: "/services/refining-processing" },
      { label: "Supply Chain Management", href: "/services/supply-chain" },
      { label: "Risk Management & Hedging", href: "/services/risk-management" },
    ],
  },
  {
    label: "Commodities",
    href: "/commodities",
    children: [
      { label: "Gold", href: "/commodities/gold" },
      { label: "Silver", href: "/commodities/silver" },
      { label: "Platinum & Palladium", href: "/commodities/platinum-palladium" },
      { label: "Copper", href: "/commodities/copper" },
      { label: "Critical Minerals", href: "/commodities/critical-minerals" },
    ],
  },
  { label: "Compliance", href: "/compliance" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Precious Metals Trading",
    slug: "precious-metals-trading",
    description:
      "Global sourcing and trading of gold, silver, platinum, and palladium from UN-certified mines with full chain-of-custody documentation.",
    icon: "gem",
    features: [
      "Physical delivery of London Good Delivery bars",
      "Spot and forward contract execution",
      "Full traceability from mine to market",
      "LBMA and IPMR accredited refinery partnerships",
    ],
  },
  {
    title: "Non-Ferrous Metals",
    slug: "non-ferrous-metals",
    description:
      "Trading and supply of copper, aluminium, zinc, nickel, and other non-ferrous metals essential for modern manufacturing and infrastructure.",
    icon: "layers",
    features: [
      "Superior electrical conductivity metals",
      "LME-grade material sourcing",
      "Industrial-scale supply capability",
      "Custom alloy specifications",
    ],
  },
  {
    title: "Critical Minerals & Rare Earths",
    slug: "critical-minerals",
    description:
      "Strategic sourcing of critical minerals and rare earth elements vital for the energy transition and advanced technology manufacturing.",
    icon: "atom",
    features: [
      "Lithium, cobalt, manganese sourcing",
      "Rare earth element procurement",
      "Energy transition material supply",
      "Conflict-free certified sourcing",
    ],
  },
  {
    title: "Semiconductor Metals",
    slug: "semiconductor-metals",
    description:
      "Specialized precious metals refining and supply for semiconductor chip wafer coating, electronic connections, and advanced microelectronics.",
    icon: "cpu",
    features: [
      "Ultra-high purity gold for chip wafer coating",
      "Silver for electronic interconnections",
      "Platinum group metals for catalytic applications",
      "Semiconductor-grade quality certification",
    ],
  },
  {
    title: "Refining & Processing",
    slug: "refining-processing",
    description:
      "Partnership with IPMR and world-class refineries for state-of-the-art Miller Processing and precious metals refining to the highest purity standards.",
    icon: "factory",
    features: [
      "IPMR partnership for Miller Processing",
      "LBMA Good Delivery accreditation",
      "Multi-metal refining capabilities",
      "Assay and quality certification",
    ],
  },
  {
    title: "Supply Chain Management",
    slug: "supply-chain",
    description:
      "End-to-end metals supply chain management from certified mine sourcing through refining, logistics, and final delivery to your facility.",
    icon: "truck",
    features: [
      "Mine-to-market chain of custody",
      "Secure logistics and transportation",
      "Bonded warehouse storage",
      "Real-time shipment tracking",
    ],
  },
  {
    title: "Risk Management & Hedging",
    slug: "risk-management",
    description:
      "Comprehensive commodity price risk management solutions including hedging strategies, forward contracts, and market intelligence.",
    icon: "shield-check",
    features: [
      "Price hedging strategies",
      "Forward and futures contract execution",
      "Market analysis and intelligence",
      "Portfolio risk assessment",
    ],
  },
] as const;

export const COMMODITIES = [
  {
    title: "Gold",
    slug: "gold",
    symbol: "Au",
    description:
      "The world's most trusted precious metal. We source and trade physical gold from certified mines for investment, industrial, and semiconductor applications.",
    applications: ["Semiconductor chip wafer coating", "Electronic connections", "Investment bars and coins", "Jewelry manufacturing", "Aerospace components"],
    color: "#D4AF37",
  },
  {
    title: "Silver",
    slug: "silver",
    symbol: "Ag",
    description:
      "The most electrically conductive metal. Essential for electronics, solar energy, and industrial applications with growing demand in green technology.",
    applications: ["Electronics and circuitry", "Solar panel manufacturing", "Medical devices", "Industrial catalysts", "Photography and imaging"],
    color: "#C0C0C0",
  },
  {
    title: "Platinum & Palladium",
    slug: "platinum-palladium",
    symbol: "Pt/Pd",
    description:
      "Platinum group metals critical for catalytic, automotive, and high-technology applications with unique chemical and physical properties.",
    applications: ["Automotive catalytic converters", "Fuel cell technology", "Chemical processing catalysts", "Medical implants", "Electronics"],
    color: "#E5E4E2",
  },
  {
    title: "Copper",
    slug: "copper",
    symbol: "Cu",
    description:
      "The premier non-ferrous conductor metal. Essential for electrical infrastructure, renewable energy, and the global electrification transition.",
    applications: ["Electrical wiring and infrastructure", "Renewable energy systems", "Electric vehicle components", "Construction", "Telecommunications"],
    color: "#B87333",
  },
  {
    title: "Critical Minerals",
    slug: "critical-minerals",
    symbol: "Li/Co/Mn",
    description:
      "Strategic minerals essential for battery technology, renewable energy, and advanced manufacturing including lithium, cobalt, and manganese.",
    applications: ["Battery technology (EV & storage)", "Renewable energy infrastructure", "Advanced electronics", "Defense applications", "Medical technology"],
    color: "#4A90D9",
  },
] as const;

export const STATS = [
  { value: "50+", label: "Countries Served" },
  { value: "$2B+", label: "Annual Trade Volume" },
  { value: "100%", label: "KYC/AML Compliance" },
  { value: "15+", label: "Years of Experience" },
] as const;

export const COMPLIANCE_FEATURES = [
  {
    title: "KYC/AML Compliance",
    description:
      "Every corporate customer must fully comply with Know Your Customer requirements and consent to comprehensive background screening, regardless of size.",
    icon: "user-check",
  },
  {
    title: "AI-Powered Sanctions Screening",
    description:
      "We utilize ComplyAdvantage AI software to ensure full compliance with government sanctions, ITG and banking policies in real-time.",
    icon: "brain",
  },
  {
    title: "UN Certified Mine Sourcing",
    description:
      "All raw materials are sourced exclusively from industrial mines holding the highest standards for labor practices and environmental stewardship.",
    icon: "globe",
  },
  {
    title: "Environmental Impact Certification",
    description:
      "Our supply chain exclusively sources from Environmental Impact Certified mines committed to sustainable and responsible mining practices.",
    icon: "leaf",
  },
  {
    title: "LBMA & OECD Standards",
    description:
      "Full adherence to London Bullion Market Association responsible sourcing guidelines and OECD due diligence standards for minerals.",
    icon: "award",
  },
  {
    title: "Chain of Custody Documentation",
    description:
      "Complete mine-to-market traceability with documented chain of custody for every shipment, ensuring full transparency and accountability.",
    icon: "file-check",
  },
] as const;
