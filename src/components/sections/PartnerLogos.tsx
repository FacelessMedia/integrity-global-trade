"use client";

import { ShieldCheck } from "lucide-react";

const partners = [
  { name: "IPMR", label: "International Precious Metals Refiners", type: "Refinery Partner" },
  { name: "LBMA", label: "London Bullion Market Association", type: "Standards Body" },
  { name: "OECD", label: "Organisation for Economic Co-operation", type: "Due Diligence" },
  { name: "ComplyAdvantage", label: "AI-Powered Compliance", type: "Technology Partner" },
  { name: "UN Global Compact", label: "United Nations Certified Mines", type: "Certification" },
  { name: "FATF", label: "Financial Action Task Force", type: "AML Standards" },
];

export function PartnerLogos() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Trusted Partners & Compliance Standards
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-5 border border-slate-200 text-center hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="text-lg font-bold text-slate-800 mb-1">{partner.name}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{partner.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
