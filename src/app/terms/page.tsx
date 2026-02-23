import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_CONFIG.name}. Review our terms governing use of our website and commodities trading services.`,
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }]} />
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300">Last updated: February 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the website of {SITE_CONFIG.name} (&quot;Company,&quot; &quot;we,&quot; &quot;our&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you should not use this website.</p>

            <h2>2. Company Information</h2>
            <p>{SITE_CONFIG.name} is a commodities trading company registered in the State of Wyoming, USA, with its principal office at {SITE_CONFIG.address.full}.</p>

            <h2>3. Services</h2>
            <p>We provide precious metals trading, non-ferrous metals supply, critical minerals sourcing, metals refining and processing, supply chain management, and risk management services. All services are subject to:</p>
            <ul>
              <li>Successful completion of KYC/AML verification procedures</li>
              <li>Execution of separate trading agreements</li>
              <li>Compliance with applicable laws and regulations</li>
              <li>Acceptance of our compliance and ethical sourcing policies</li>
            </ul>

            <h2>4. KYC/AML Compliance</h2>
            <p>All prospective clients must undergo Know Your Customer (KYC) and Anti-Money Laundering (AML) verification before any trading relationship can be established. This requirement applies to all entities regardless of size or transaction volume. We reserve the right to decline any business relationship that does not meet our compliance standards.</p>

            <h2>5. No Investment Advice</h2>
            <p>Nothing on this website constitutes investment advice, financial advice, trading advice, or any other form of professional advice. Market data, price information, and market analysis provided on this website are for informational purposes only. You should consult with qualified professionals before making any investment or trading decisions.</p>

            <h2>6. Commodity Price Disclaimer</h2>
            <p>Commodity prices displayed on this website, if any, are indicative only and do not constitute an offer to buy or sell at those prices. Actual trading prices are subject to market conditions at the time of transaction execution and may differ from any indicative prices shown.</p>

            <h2>7. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of {SITE_CONFIG.name} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>

            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Wyoming, United States of America.</p>

            <h2>10. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p>{SITE_CONFIG.name}<br />{SITE_CONFIG.address.full}<br />Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><br />Phone: {SITE_CONFIG.phone}</p>
          </div>
        </div>
      </section>
    </>
  );
}
