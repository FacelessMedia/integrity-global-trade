"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
          <div className="text-xs text-slate-400">
            100% KYC/AML Compliant · UN Certified Mine Sourcing · LBMA Standards
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-slate-900 text-lg leading-tight tracking-tight">
                  Integrity Global
                </div>
                <div className="text-xs text-slate-500 tracking-wider uppercase">
                  Trade & Commodities
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
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
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors rounded-md hover:bg-slate-50",
                      openDropdown === link.label && "text-amber-700 bg-slate-50"
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
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-50/50 transition-colors"
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
              <Button
                asChild
                className="hidden md:inline-flex bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/contact">Get in Touch</Link>
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
                    {NAV_LINKS.map((link) => (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-amber-700 hover:bg-amber-50/50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                        {"children" in link && (
                          <div className="ml-4 border-l-2 border-slate-100 pl-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-slate-500 hover:text-amber-700 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4 px-4">
                      <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
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
