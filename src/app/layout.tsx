import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from "@/lib/structured-data";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { MobileStickyBar } from "@/components/common/MobileStickyBar";
import { CookieConsent } from "@/components/common/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CommodityPriceTicker } from "@/components/common/CommodityPriceTicker";
import { FloatingQuoteButton } from "@/components/common/FloatingQuoteButton";
import { ExitIntentPopup } from "@/components/common/ExitIntentPopup";
import { ChatBot } from "@/components/common/ChatBot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Global Precious Metals & Commodities Trading`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "precious metals trading",
    "global commodities trading",
    "gold trading company",
    "non-ferrous metals supplier",
    "critical minerals",
    "metals refining",
    "semiconductor metals",
    "ethical metals sourcing",
    "KYC compliance",
    "LBMA accredited",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Global Precious Metals & Commodities Trading`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Global Precious Metals & Commodities Trading`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <meta httpEquiv="content-language" content="en-US" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-amber-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <CommodityPriceTicker />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <MobileStickyBar />
        <CookieConsent />
        <ChatBot />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
