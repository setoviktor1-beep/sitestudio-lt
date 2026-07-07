"use client";

import { useLocale, useTranslations } from "next-intl";

export default function StructuredData() {
  const locale = useLocale();
  const t = useTranslations();
  const siteUrl = "https://sitestudio.lt";
  const pageUrl = `${siteUrl}/${locale}`;

  const isLT = locale === "lt";

  const faqItems = (t.raw("faq.items") as { q: string; a: string }[]) || [];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "SiteStudio",
    inLanguage: isLT ? "lt" : "en",
    description: isLT
      ? "Kuriu landing page, verslo svetaines ir web aplikacijas."
      : "I build landing pages, business websites and web applications.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/${locale}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "SiteStudio",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/opengraph-image.png`,
    description: isLT
      ? "Profesionalios svetainės verslui: landing page, verslo svetainės ir web aplikacijos."
      : "Professional websites for business: landing pages, business websites and web applications.",
    email: "viktor@sitestudio.lt",
    address: {
      "@type": "PostalAddress",
      addressLocality: isLT ? "Briuselis" : "Brussels",
      addressCountry: isLT ? "Belgija" : "Belgium"
    },
    areaServed: [
      { "@type": "Country", name: isLT ? "Lietuva" : "Lithuania" },
      { "@type": "Country", name: isLT ? "Belgija" : "Belgium" }
    ],
    sameAs: [
      "https://github.com/setoviktor1-beep",
      "https://www.facebook.com/profile.php?id=61588234395137",
      "https://www.instagram.com/sitestudio.lt/",
      "https://www.tiktok.com/@sitestudio.lt"
    ],
    priceRange: "€€",
    contactPoint: {
      "@type": "ContactPoint",
      email: "viktor@sitestudio.lt",
      contactType: isLT ? "Klientų aptarnavimas" : "Customer service",
      areaServed: [
        { "@type": "Country", name: isLT ? "Lietuva" : "Lithuania" },
        { "@type": "Country", name: isLT ? "Belgija" : "Belgium" }
      ],
      availableLanguage: ["Lithuanian", "English"]
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.8503",
      longitude: "4.3517"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Viktor Seto",
    jobTitle: isLT ? "Web kūrėjas ir AI sprendimų architektas" : "Web Developer and AI Solutions Architect",
    worksFor: { "@id": `${siteUrl}/#organization` },
    url: siteUrl,
    sameAs: ["https://github.com/setoviktor1-beep"],
    address: {
      "@type": "PostalAddress",
      addressLocality: isLT ? "Briuselis" : "Brussels",
      addressCountry: isLT ? "Belgija" : "Belgium"
    }
  };

  const serviceNames = isLT
    ? ["Landing Page", "Verslo svetainė", "Web Aplikacija"]
    : ["Landing Page", "Business Website", "Web Application"];

  const serviceDescriptions = isLT
    ? [
        "Greitas, konvertuojantis vieno puslapio sprendimas su kontaktų forma ir mobilia versija.",
        "4-6 puslapių svetainė su pilnu turiniu, admin valdymu ir SEO optimizacija.",
        "Sudėtingesni projektai su vartotojų sistema, duomenų baze ir mokėjimais."
      ]
    : [
        "A fast, converting single-page solution with contact form and mobile version.",
        "A 4-6 page website with full content, admin management and SEO optimization.",
        "Complex projects with user system, database and payments."
      ];

  const serviceSchemas = serviceNames.map((name, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [
      { "@type": "Country", name: isLT ? "Lietuva" : "Lithuania" },
      { "@type": "Country", name: isLT ? "Belgija" : "Belgium" }
    ],
    description: serviceDescriptions[index],
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: ["299", "599", "1499"][index],
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    }
  }));

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a
            }
          }))
        }
      : null;

  const breadcrumbNames = isLT
    ? ["Paslaugos", "Portfolio", "Apie mane", "DUK", "Kontaktai"]
    : ["Services", "Portfolio", "About", "FAQ", "Contact"];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ["#services", "#portfolio", "#about", "#faq", "#contact"].map(
      (hash, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumbNames[index],
        item: `${pageUrl}${hash}`
      })
    )
  };

  const schemas: Record<string, unknown>[] = [
    websiteSchema,
    organizationSchema,
    personSchema,
    ...serviceSchemas
  ];
  if (faqSchema) schemas.push(faqSchema);
  schemas.push(breadcrumbSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
