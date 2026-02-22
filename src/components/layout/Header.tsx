"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ChevronDown, Phone, Mail, MapPin, ShieldCheck, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top trust bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block border-b border-slate-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-amber-500" />
              <span className="font-medium">{SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-amber-500" />
              {SITE_CONFIG.email}
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3 w-3 text-amber-500" />
              {SITE_CONFIG.address.full}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">KYC/AML Verified</span>
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">$3B+ Closed Contract Volume</span>
            <span className="text-slate-600">|</span>
            <a
              href={SITE_CONFIG.founderLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="h-3 w-3 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Real Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Integrity Global Trade and Commodities"
                width={280}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    "children" in link ? setOpenDropdown(link.label) : undefined
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-50",
                      openDropdown === link.label && "text-slate-900 bg-slate-50"
                    )}
                  >
                    {link.label}
                    {"children" in link && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {"children" in link && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-lg shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors mr-2"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                {SITE_CONFIG.phone}
              </a>
              <Button
                asChild
                className="hidden md:inline-flex bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all font-semibold"
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col gap-1 mt-8">
                    <div className="px-4 mb-6">
                      <Image
                        src="/images/logo.jpg"
                        alt="Integrity Global Trade and Commodities"
                        width={200}
                        height={44}
                        className="h-10 w-auto"
                      />
                    </div>
                    {NAV_LINKS.map((link) => (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                        {"children" in link && (
                          <div className="ml-4 border-l-2 border-slate-100 pl-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4 px-4 space-y-3">
                      <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 font-semibold">
                        <Link href="/contact">Request Consultation</Link>
                      </Button>
                      <a
                        href={`tel:${SITE_CONFIG.phoneRaw}`}
                        className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
