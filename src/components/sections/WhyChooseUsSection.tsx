"use client";

import { CheckCircle, Globe, Shield, Zap, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Uncompromising Compliance",
    description:
      "Every transaction undergoes rigorous KYC/AML verification. We use ComplyAdvantage AI for real-time sanctions screening — no exceptions, regardless of customer size.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Ethical & Certified Sourcing",
    description:
      "All raw materials sourced exclusively from UN Certified and Environmental Impact Certified industrial mines with the highest labor and environmental standards.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Semiconductor-Grade Quality",
    description:
      "Specialized refining of precious metals for chip wafer coating and electronic connections through our IPMR partnership — meeting the most exacting purity standards.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "IPMR Refinery Partnership",
    description:
      "Our exclusive partnership with International Precious Metals Refiners provides access to state-of-the-art Miller Processing technology and LBMA Good Delivery accreditation.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Full Value Chain Coverage",
    description:
      "From mine sourcing through refining, logistics, and delivery — we manage the entire precious metals supply chain with complete chain-of-custody documentation.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Industry-Leading Standards",
    description:
      "Adherence to LBMA, OECD, and international precious metals industry standards ensures our clients receive only the highest quality, fully compliant materials.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Integrity Global
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Leading Industries Trust Us
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            In an industry where trust and compliance are paramount, Integrity Global Trade
            sets the standard for responsible, transparent commodities trading.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
