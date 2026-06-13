"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Globe, Award, ShieldCheck, Phone, BadgeDollarSign, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/8 via-transparent to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            {/* Verified badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold">
                Verified · KYC/AML Compliant · $1B+ Allocated Volume
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Global Commodities Trading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Built on Trust
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Integrity Global Trade & Commodities Corp has facilitated over{" "}
              <strong className="text-white">$1 billion in allocated contracts</strong> across
              precious metals, non-ferrous metals, and critical minerals. Every transaction is
              fully KYC/AML verified with documented chain-of-custody from UN-certified mines.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 transition-all text-base px-8 py-6 font-semibold"
              >
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white text-base px-8 py-6"
              >
                <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <BadgeDollarSign className="h-5 w-5 text-amber-400" />, title: "$1B+", subtitle: "Allocated Contract Volume" },
                { icon: <Shield className="h-5 w-5 text-emerald-400" />, title: "100%", subtitle: "KYC/AML Compliance" },
                { icon: <Globe className="h-5 w-5 text-blue-400" />, title: "50+", subtitle: "Countries Served" },
                { icon: <Award className="h-5 w-5 text-amber-400" />, title: "LBMA", subtitle: "Standards Compliant" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                  {item.icon}
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Trust card */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              {/* Verified header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Verified Trading Firm</div>
                  <div className="text-emerald-400 text-xs font-semibold">Fully Compliant · Established {SITE_CONFIG.established}</div>
                </div>
              </div>

              {/* Key facts */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Volume</span>
                  <span className="text-white font-bold text-lg">$1,000,000,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Years in Operation</span>
                  <span className="text-white font-bold">4+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Compliance Rate</span>
                  <span className="text-emerald-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">KYC/AML</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Sanctions Screening</span>
                  <span className="text-white font-medium text-xs">ComplyAdvantage AI</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/10">
                {["LBMA", "OECD", "IPMR", "UN Certified", "KYC/AML"].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-full border border-white/10 font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Founder */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/timothy-mercer.jpg"
                    alt="Timothy Mercer - Founder & CEO"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Timothy Mercer</div>
                    <div className="text-slate-400 text-xs">Founder & CEO</div>
                  </div>
                  <a
                    href={SITE_CONFIG.founderLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              {/* HQ Address */}
              <div className="mt-4 text-xs text-slate-500 text-center">
                {SITE_CONFIG.address.full}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
