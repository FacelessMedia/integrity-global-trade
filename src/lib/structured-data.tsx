import { SITE_CONFIG, SERVICES, COMMODITIES } from "./constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: `${SITE_CONFIG.established}`,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder,
      jobTitle: SITE_CONFIG.founderTitle,
      url: SITE_CONFIG.founderLinkedin,
      image: `${SITE_CONFIG.url}/images/timothy-mercer.jpg`,
      sameAs: [SITE_CONFIG.founderLinkedin],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "sales",
      email: SITE_CONFIG.email,
      availableLanguage: "English",
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    sameAs: [SITE_CONFIG.founderLinkedin],
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10-50" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "Precious Metals Trading",
      "Gold Trading",
      "Silver Trading",
      "Platinum Trading",
      "Palladium Trading",
      "Non-Ferrous Metals",
      "Copper Trading",
      "Critical Minerals",
      "Semiconductor Metals",
      "Metals Refining",
      "Supply Chain Management",
      "KYC/AML Compliance",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/logo.png`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$$",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: (typeof SERVICES)[number] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((f, i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f },
        position: i + 1,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CommodityJsonLd({ commodity }: { commodity: (typeof COMMODITIES)[number] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${commodity.title} Trading`,
    description: commodity.description,
    url: `${SITE_CONFIG.url}/commodities/${commodity.slug}`,
    brand: { "@type": "Organization", name: SITE_CONFIG.name },
    category: "Commodities > Metals",
    material: commodity.title,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; href: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_CONFIG.url}${url}`,
    isPartOf: { "@type": "WebSite", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_CONFIG.url}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/images/logo.png` },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
