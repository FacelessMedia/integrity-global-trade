import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
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
  company: [
    { label: "About Us", href: "/about" },
    { label: "Compliance & Ethics", href: "/compliance" },
    { label: "Insights & News", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Partner with Integrity?
            </h3>
            <p className="text-amber-100 mt-1">
              Discover how our ethical sourcing and global trading expertise can serve your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-amber-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Integrity Global
                </div>
                <div className="text-xs text-slate-400 tracking-wider uppercase">
                  Trade & Commodities
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              A premier global commodities trading company specializing in precious metals,
              non-ferrous metals, and critical minerals. Committed to ethical sourcing from
              UN-certified mines with full KYC/AML compliance.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-amber-500" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                {SITE_CONFIG.phone}
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
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
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
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
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
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Compliance badges */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                  KYC/AML
                </span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                  LBMA
                </span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                  OECD
                </span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                  UN Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="bg-slate-800" />
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
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
        </div>
      </div>
    </footer>
  );
}
