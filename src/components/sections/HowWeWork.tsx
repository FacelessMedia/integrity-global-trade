"use client";

import { ShieldCheck, Search, FileCheck, Truck, HandshakeIcon } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your metals requirements, volumes, specifications, and timeline to understand exactly what you need.",
    icon: <HandshakeIcon className="h-6 w-6" />,
  },
  {
    step: "02",
    title: "KYC/AML Verification",
    description: "Every client undergoes our rigorous compliance process — KYC verification, sanctions screening via ComplyAdvantage AI, and background checks. No exceptions.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    step: "03",
    title: "Source & Verify",
    description: "We source materials exclusively from UN Certified and Environmental Impact Certified mines with documented chain-of-custody from origin.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    step: "04",
    title: "Refine & Certify",
    description: "Through our IPMR partnership, metals are refined to exact specifications with full assay certification and quality documentation.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    step: "05",
    title: "Secure Delivery",
    description: "Secure logistics with real-time tracking, insurance, customs clearance, and complete chain-of-custody documentation delivered to your facility.",
    icon: <Truck className="h-6 w-6" />,
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Verified Trading Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every transaction follows our rigorous 5-step process — ensuring compliance,
            quality, and full traceability from mine to your facility.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-8">
              {steps.map((item, idx) => (
                <div key={item.step} className="flex gap-6 md:gap-8 items-start">
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border-2 border-amber-200">
                      {item.icon}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
