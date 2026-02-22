"use client";

import Link from "next/link";
import { ArrowRight, UserCheck, Brain, Globe, Leaf, Award, FileCheck } from "lucide-react";
import { COMPLIANCE_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "user-check": <UserCheck className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  leaf: <Leaf className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  "file-check": <FileCheck className="h-6 w-6" />,
};

export function ComplianceSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - content */}
          <div>
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Compliance & Ethics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Integrity Is Not Just Our Name — It&apos;s Our Foundation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              In the global commodities trading industry, compliance isn&apos;t optional — it&apos;s
              essential. We go beyond regulatory requirements, implementing AI-powered screening,
              comprehensive KYC/AML protocols, and sourcing exclusively from certified mines.
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["KYC/AML Verified", "ComplyAdvantage AI", "UN Certified Mines", "LBMA Standards", "OECD Compliant", "Environmental Certified"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    {badge}
                  </span>
                )
              )}
            </div>

            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Our Compliance Framework
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right column - feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPLIANCE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
