"use client";

import { ShieldCheck, X, Check } from "lucide-react";

const comparisons = [
  { feature: "KYC/AML verification on every transaction", igtc: true, traditional: false },
  { feature: "AI-powered sanctions screening (ComplyAdvantage)", igtc: true, traditional: false },
  { feature: "100% UN Certified mine sourcing", igtc: true, traditional: false },
  { feature: "Complete chain-of-custody documentation", igtc: true, traditional: false },
  { feature: "LBMA Good Delivery standard refining (IPMR)", igtc: true, traditional: false },
  { feature: "Environmental Impact Certified mines only", igtc: true, traditional: false },
  { feature: "Semiconductor-grade purity metals", igtc: true, traditional: false },
  { feature: "$3B+ in closed contract volume", igtc: true, traditional: false },
  { feature: "Physical precious metals delivery", igtc: true, traditional: true },
  { feature: "Non-ferrous metals supply", igtc: true, traditional: true },
  { feature: "Global operations (50+ countries)", igtc: true, traditional: true },
  { feature: "Risk management & hedging", igtc: true, traditional: true },
];

export function WhyChooseIGTC() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            The Integrity Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Integrity Global Trade?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Not all commodities trading firms are equal. Here&apos;s how our compliance-first
            approach compares to traditional trading houses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] gap-4 p-6 bg-slate-50 border-b border-slate-200">
              <div className="text-sm font-semibold text-slate-500">Feature</div>
              <div className="text-center">
                <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-200">IGTC</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium text-slate-500">Traditional</div>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_100px_100px] gap-4 p-5 items-center ${idx < comparisons.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="text-sm text-slate-700 font-medium">{row.feature}</div>
                <div className="flex justify-center">
                  {row.igtc ? (
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-400" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.traditional ? (
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-slate-400" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Compliance is our foundation — not an afterthought.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
