import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, ShieldCheck, Building } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "Precious Metals Trading", href: "/services/precious-metals-trading" },
    { label: "Non-Ferrous Metals", href: "/services/non-ferrous-metals" },
    { label: "Critical Minerals", href: "/services/critical-minerals" },
    { label: "Semiconductor Metals", href: "/services/semiconductor-metals" },
    { label: "Refining & Processing", href: "/services/refining-processing" },
    { label: "Supply Chain Management", href: "/services/supply-chain" },
  ],
  commodities: [
    { label: "Gold (Au)", href: "/commodities/gold" },
    { label: "Silver (Ag)", href: "/commodities/silver" },
    { label: "Platinum & Palladium", href: "/commodities/platinum-palladium" },
    { label: "Copper (Cu)", href: "/commodities/copper" },
    { label: "Critical Minerals", href: "/commodities/critical-minerals" },
  ],
  industries: [
    { label: "Semiconductor & Electronics", href: "/industries/semiconductors" },
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Aerospace & Defense", href: "/industries/aerospace" },
    { label: "Jewelry & Luxury", href: "/industries/jewelry" },
    { label: "Industrial Manufacturing", href: "/industries/industrial" },
    { label: "Renewable Energy", href: "/industries/renewable-energy" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Why Choose IGTC", href: "/why-igtc" },
    { label: "Market Outlook", href: "/market-outlook" },
    { label: "FAQ", href: "/faq" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-t-2 border-amber-500">
        <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Partner with a Trusted Trading Firm?
            </h3>
            <p className="text-slate-400 mt-2 max-w-xl">
              Over $3 billion in closed contract volume. Full KYC/AML compliance on every transaction.
              Verified sourcing from certified mines. Let&apos;s discuss how we can serve your business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg whitespace-nowrap"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Integrity Global Trade and Commodities"
                width={220}
                height={48}
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              A premier global commodities trading company with over <strong className="text-white">$3 billion
              in closed contract volume</strong>. Specializing in precious metals,
              non-ferrous metals, and critical minerals with uncompromising KYC/AML compliance.
            </p>

            {/* Physical Address */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <Building className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium">Corporate Headquarters</div>
                  <div className="text-slate-400">
                    {SITE_CONFIG.address.street} {SITE_CONFIG.address.suite}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-amber-500" />
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Social / LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.founderLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Timothy Mercer on LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Commodities
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.commodities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Compliance
            </h4>
            <div className="space-y-3">
              {["KYC/AML Verified", "LBMA Standards", "OECD Compliant", "UN Certified Mines", "ComplyAdvantage AI", "IPMR Partnership"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-400">{badge}</span>
                  </div>
                )
              )}
            </div>
            <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-white">$3B+</div>
              <div className="text-xs text-slate-400 mt-1">Closed Contract Volume</div>
              <div className="text-xs text-slate-500 mt-0.5">Est. {SITE_CONFIG.established}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="bg-slate-800" />
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Registered in the State of Wyoming, USA ·{" "}
            <a href="https://wyobiz.wyo.gov/Business/FilingSearch.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors underline">
              Wyoming Secretary of State
            </a>{" "}
            · SSL Secured · KYC/AML Verified
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/compliance" className="hover:text-slate-300 transition-colors">
            Compliance
          </Link>
          <Link href="/glossary" className="hover:text-slate-300 transition-colors">
            Glossary
          </Link>
        </div>
      </div>
    </footer>
  );
}
