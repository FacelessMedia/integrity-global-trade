import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, Minus, BarChart3, Globe, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Market Outlook — Precious Metals & Commodities Analysis 2026",
  description: `${SITE_CONFIG.shortName}'s market outlook for precious metals, non-ferrous metals, and critical minerals in 2026. Expert analysis of gold, silver, copper, platinum, and critical mineral supply-demand dynamics.`,
  keywords: ["metals market outlook 2026", "gold price forecast", "silver market analysis", "copper demand forecast", "precious metals outlook"],
};

const metals = [
  {
    name: "Gold (XAU)",
    trend: "bullish",
    outlook: "Strong structural support from central bank buying, geopolitical uncertainty, and growing semiconductor demand. Mine production plateau limits supply growth.",
    drivers: ["Central bank reserve diversification", "Geopolitical risk premium", "AI chip manufacturing demand", "De-dollarization trends"],
    risks: ["Higher interest rate environment", "Strong US dollar", "Recycling response at elevated prices"],
  },
  {
    name: "Silver (XAG)",
    trend: "bullish",
    outlook: "Persistent supply deficit driven by solar PV demand growth. Industrial consumption exceeding mine production + recycling. Dual monetary/industrial role creates unique dynamics.",
    drivers: ["Solar PV installations exceeding 350 GW/year", "5G infrastructure deployment", "EV electronics demand", "Supply deficit entering 4th consecutive year"],
    risks: ["Thrifting in solar paste formulations", "Substitution in some electronics", "Mine production response"],
  },
  {
    name: "Platinum (XPT)",
    trend: "neutral",
    outlook: "Transitional period as automotive catalytic converter demand plateaus while hydrogen fuel cell demand begins to emerge. Diversification away from South African concentration is a key theme.",
    drivers: ["Hydrogen economy investment", "PEM fuel cell vehicle adoption", "Jewelry demand recovery", "Investment demand from price discount to gold"],
    risks: ["Automotive demand decline from EV transition", "South African supply concentration", "Recycling from catalytic converters"],
  },
  {
    name: "Copper (Cu)",
    trend: "bullish",
    outlook: "Structural demand growth from electrification — EVs, renewable energy, and grid infrastructure. Supply constrained by permitting delays and declining ore grades at major mines.",
    drivers: ["EV adoption (3-4x copper content vs ICE)", "Renewable energy infrastructure", "Grid modernization globally", "Data center expansion for AI"],
    risks: ["Economic slowdown reducing industrial demand", "Substitution with aluminum in some applications", "New mine supply from DRC and Indonesia"],
  },
  {
    name: "Critical Minerals",
    trend: "bullish",
    outlook: "Lithium, cobalt, and rare earths face dramatic demand growth from the energy transition. Government policies (EU CRMA, US IRA/CHIPS Act) are accelerating supply chain diversification away from China.",
    drivers: ["EV battery production scaling", "Government critical minerals policies", "Supply chain diversification mandates", "Wind energy rare earth magnet demand"],
    risks: ["Lithium oversupply in near-term", "Cobalt demand shift with LFP battery chemistry", "Geopolitical disruption to processing"],
  },
];

export default function MarketOutlookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Market Outlook", href: "/market-outlook" },
      ]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <BarChart3 className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Market Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              2026 Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Outlook</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert analysis of precious metals, non-ferrous metals, and critical minerals
              markets. Supply-demand dynamics, price drivers, and risk factors for 2026.
            </p>
            <p className="text-xs text-slate-500 mt-4">Last updated: February 2026 | Published by {SITE_CONFIG.shortName} Trading Desk</p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Summary</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The global metals market enters 2026 in a period of structural transformation. The energy transition,
                semiconductor industry growth, and geopolitical realignment are reshaping demand patterns across
                precious metals, non-ferrous metals, and critical minerals. Central bank gold buying remains at
                historically elevated levels, while industrial demand for silver, copper, and critical minerals
                continues to accelerate.
              </p>
              <p>
                Supply constraints are emerging across multiple metals — mine production growth is lagging demand
                in silver and copper, platinum supply remains geographically concentrated, and critical mineral
                processing is dominated by China. These dynamics create both opportunity and risk for metals
                buyers, manufacturers, and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal-by-Metal Analysis */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Metal-by-Metal Analysis</h2>
            <div className="space-y-10">
              {metals.map((metal) => (
                <div key={metal.name} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-slate-900">{metal.name}</h3>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      metal.trend === "bullish" ? "bg-emerald-100 text-emerald-700" :
                      metal.trend === "bearish" ? "bg-red-100 text-red-700" :
                      "bg-amber-100 text-amber-700"
                    }`}>
                      {metal.trend === "bullish" ? <TrendingUp className="h-3 w-3" /> :
                       metal.trend === "bearish" ? <TrendingDown className="h-3 w-3" /> :
                       <Minus className="h-3 w-3" />}
                      {metal.trend.charAt(0).toUpperCase() + metal.trend.slice(1)}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{metal.outlook}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3">Key Demand Drivers</div>
                      <div className="space-y-2">
                        {metal.drivers.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-sm text-slate-600">
                            <TrendingUp className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">Risk Factors</div>
                      <div className="space-y-2">
                        {metal.risks.map((r) => (
                          <div key={r} className="flex items-start gap-2 text-sm text-slate-600">
                            <TrendingDown className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Macro Themes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Key Macro Themes for 2026</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Globe, title: "Geopolitical Realignment", description: "Sanctions, trade restrictions, and resource nationalism are reshaping global metals supply chains. Diversification of sourcing away from concentrated producing regions is a strategic priority." },
                { icon: TrendingUp, title: "Electrification Acceleration", description: "EVs, renewable energy, grid infrastructure, and data centers are driving structural demand growth for copper, silver, and critical minerals. This trend is policy-supported and irreversible." },
                { icon: ShieldCheck, title: "Compliance Tightening", description: "EU Due Diligence Regulation, Critical Raw Materials Act, and ESG disclosure requirements are raising the compliance bar for all metals supply chain participants." },
                { icon: BarChart3, title: "Supply Constraints", description: "Permitting delays, declining ore grades, and underinvestment in mine development are constraining supply growth across multiple metals — creating structural deficits." },
              ].map((theme) => {
                const Icon = theme.icon;
                return (
                  <div key={theme.title} className="bg-slate-50 rounded-xl p-7 border border-slate-200">
                    <div className="p-2.5 bg-amber-50 rounded-xl inline-flex mb-4 border border-amber-200">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{theme.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{theme.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Market Briefing?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Our trading desk provides custom market intelligence and pricing analysis for
            institutional clients. Contact us to discuss your specific market outlook needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Contact Trading Desk <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/insights" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
              Read Our Insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
