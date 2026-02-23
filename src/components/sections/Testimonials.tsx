"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote: "Integrity Global Trade has been our primary precious metals supplier for over two years. Their KYC/AML compliance process gave our board the confidence to approve a multi-million dollar sourcing agreement. Every shipment arrives with complete chain-of-custody documentation.",
    name: "Director of Procurement",
    company: "Fortune 500 Semiconductor Manufacturer",
    location: "San Jose, CA",
    stars: 5,
  },
  {
    quote: "What sets IGTC apart is their insistence on sourcing only from UN Certified mines. In an industry where provenance is often opaque, Timothy Mercer's team delivers full transparency. We've processed over $200M in transactions with zero compliance issues.",
    name: "VP of Supply Chain",
    company: "European Automotive OEM",
    location: "Stuttgart, Germany",
    stars: 5,
  },
  {
    quote: "We switched to Integrity Global Trade after compliance issues with our previous broker. The difference is night and day — every counterparty is screened through ComplyAdvantage, every transaction is documented. They've become an extension of our compliance team.",
    name: "Chief Compliance Officer",
    company: "Precious Metals Refinery",
    location: "Zurich, Switzerland",
    stars: 5,
  },
  {
    quote: "IGTC's refining partnership with IPMR gives us access to LBMA Good Delivery standard gold at competitive rates. Their understanding of semiconductor-grade purity requirements is unmatched in the trading space.",
    name: "Head of Materials Engineering",
    company: "Leading Chip Fabrication Company",
    location: "Taipei, Taiwan",
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <ShieldCheck className="h-4 w-4" />
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by Industry Leaders Worldwide
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-slate-50 rounded-2xl p-10 md:p-14 border border-slate-200">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-amber-200" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.company}</div>
                  <div className="text-xs text-slate-400">{t.location}</div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-400 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-slate-400 tabular-nums w-10 text-center">
                    {current + 1}/{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-400 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            Client identities protected per NDA. Contact us to request a reference call.
          </p>
        </div>
      </div>
    </section>
  );
}
