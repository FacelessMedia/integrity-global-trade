import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal information.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: February 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
            <h2>1. Introduction</h2>
            <p>{SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>
            <p>Our registered address is {SITE_CONFIG.address.full}.</p>

            <h2>2. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name when you submit our contact form or request a consultation.</li>
              <li><strong>Business Information:</strong> Company details, trading requirements, and compliance documentation provided during the onboarding process.</li>
              <li><strong>KYC/AML Documentation:</strong> Identity verification documents, corporate registration documents, and beneficial ownership information required for regulatory compliance.</li>
            </ul>
            <h3>Information Automatically Collected</h3>
            <ul>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
              <li><strong>Cookies:</strong> We use essential cookies to ensure website functionality. See our Cookie section below.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide requested services</li>
              <li>To conduct KYC/AML compliance verification as required by law</li>
              <li>To process and facilitate commodities trading transactions</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To improve our website and services</li>
              <li>To send important updates about our services (with your consent)</li>
            </ul>

            <h2>4. KYC/AML Compliance</h2>
            <p>As a commodities trading company, we are legally required to collect and verify certain personal and business information under Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations. This information is processed using ComplyAdvantage AI-powered compliance technology and is retained as required by applicable regulations.</p>

            <h2>5. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Compliance Partners:</strong> ComplyAdvantage for sanctions screening and AML verification</li>
              <li><strong>Refinery Partners:</strong> IPMR for transaction processing</li>
              <li><strong>Legal Authorities:</strong> When required by law or regulatory obligations</li>
              <li><strong>Service Providers:</strong> Hosting, analytics, and email service providers who assist in operating our business</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security assessments.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information, subject to our legal and regulatory retention obligations. To exercise these rights, contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses essential cookies required for basic functionality. We do not use tracking cookies or third-party advertising cookies without your explicit consent.</p>

            <h2>9. Contact Us</h2>
            <p>For privacy-related inquiries, contact us at:</p>
            <p>{SITE_CONFIG.name}<br />{SITE_CONFIG.address.full}<br />Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><br />Phone: {SITE_CONFIG.phone}</p>
          </div>
        </div>
      </section>
    </>
  );
}
