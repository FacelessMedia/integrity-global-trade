"use client";

import Link from "next/link";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-400 text-sm font-medium">
              UN Certified Mine Sourcing · LBMA Standards · Full KYC/AML Compliance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Global Precious Metals{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Trading
            </span>{" "}
            Built on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Integrity
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Integrity Global Trade & Commodities Corp delivers ethically sourced precious metals,
            non-ferrous metals, and critical minerals from UN-certified mines to semiconductor
            manufacturers, industrial consumers, and global markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 transition-all text-base px-8 py-6"
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">100% Compliant</div>
                <div className="text-xs text-slate-400">KYC/AML verified trading</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                <Globe className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Global Operations</div>
                <div className="text-xs text-slate-400">50+ countries served</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">LBMA Standards</div>
                <div className="text-xs text-slate-400">Accredited refinery partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
