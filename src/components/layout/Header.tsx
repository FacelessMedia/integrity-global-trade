"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft, Phone, Mail, MapPin, ShieldCheck, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavLink = (typeof NAV_LINKS)[number];

function hasChildren(link: NavLink): link is NavLink & { children: ReadonlyArray<{ label: string; href: string }> } {
  return "children" in link && Array.isArray((link as Record<string, unknown>).children);
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, []);

  // Close mobile menu on route change (link click)
  const handleMobileLink = useCallback(() => {
    closeMobile();
  }, [closeMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    if (mobileOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  // Find the active submenu data
  const activeSubmenu = mobileSubmenu
    ? NAV_LINKS.find((l) => l.label === mobileSubmenu)
    : null;

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
            <span className="text-slate-400">$1B+ Allocated Contract Volume</span>
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
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Integrity Global Trade and Commodities"
                width={280}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasChildren(link) ? setOpenDropdown(link.label) : undefined}
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
                    {hasChildren(link) && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {hasChildren(link) && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
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

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden md:inline-flex bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all font-semibold"
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========= Mobile Menu Overlay ========= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={menuRef}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-250"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <Image
                src="/images/logo.png"
                alt="IGTC"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={closeMobile}
                className="p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable nav content */}
            <div className="flex-1 overflow-y-auto">
              {/* Main level (no submenu active) */}
              {!mobileSubmenu && (
                <nav className="py-3" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <div key={link.label}>
                      {hasChildren(link) ? (
                        <button
                          type="button"
                          onClick={() => setMobileSubmenu(link.label)}
                          className="flex items-center justify-between w-full px-5 py-3.5 text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronRight className="h-4 w-4 text-slate-400" />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={handleMobileLink}
                          className="flex items-center px-5 py-3.5 text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              )}

              {/* Submenu level */}
              {mobileSubmenu && activeSubmenu && hasChildren(activeSubmenu) && (
                <div className="animate-in slide-in-from-right duration-200">
                  {/* Back button */}
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center gap-2 w-full px-5 py-3.5 text-sm font-semibold text-amber-600 hover:bg-amber-50 transition-colors border-b border-slate-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {/* Section title + "View all" link */}
                  <Link
                    href={activeSubmenu.href}
                    onClick={handleMobileLink}
                    className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base font-bold text-slate-900">{activeSubmenu.label}</span>
                    <span className="text-xs text-amber-600 font-semibold">View All</span>
                  </Link>

                  {/* Sub-page links */}
                  <nav className="py-2">
                    {activeSubmenu.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={handleMobileLink}
                        className="block px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-slate-100 space-y-3">
              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 font-semibold">
                <Link href="/contact" onClick={handleMobileLink}>Request Consultation</Link>
              </Button>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium py-1"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
