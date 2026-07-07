import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const siteUrl = "https://sitestudio.lt";

const localizedMetadata: Record<
  "lt" | "en",
  {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    locale: string;
    lang: string;
  }
> = {
  lt: {
    title: "SiteStudio - Profesionalios svetainės verslui",
    description:
      "Kuriu landing page, verslo svetaines ir web aplikacijas. Greitas pristatymas, modernus dizainas, SEO pagrindai. Dirbu su klientais Lietuvoje ir Belgijoje.",
    keywords: [
      "svetainių kūrimas",
      "landing page kūrimas",
      "verslo svetainė",
      "web dizainas",
      "Next.js",
      "Lietuva",
      "Belgija",
      "Briuselis"
    ],
    openGraphTitle: "SiteStudio - Profesionalios svetainės verslui",
    openGraphDescription:
      "Kuriu landing page, verslo svetaines ir web aplikacijas. Greitas pristatymas, modernus dizainas.",
    locale: "lt_LT",
    lang: "lt"
  },
  en: {
    title: "SiteStudio - Professional Websites for Business",
    description:
      "I build landing pages, business websites and web applications. Fast delivery, modern design, SEO fundamentals included. Working with clients in Lithuania, Belgium and worldwide.",
    keywords: [
      "website development",
      "landing page design",
      "business website",
      "web design",
      "Next.js",
      "Lithuania",
      "Belgium",
      "Brussels"
    ],
    openGraphTitle: "SiteStudio - Professional Websites for Business",
    openGraphDescription:
      "Landing pages, business websites and web applications. Fast delivery, modern design, SEO included.",
    locale: "en_US",
    lang: "en"
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(
    params.locale as (typeof routing.locales)[number]
  )
    ? (params.locale as "lt" | "en")
    : routing.defaultLocale;

  const meta = localizedMetadata[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Viktor Seto", url: siteUrl }],
    creator: "Viktor Seto",
    publisher: "SiteStudio",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "lt-LT": "/lt",
        "en-US": "/en",
        "x-default": "/lt"
      }
    },
    openGraph: {
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url: `/${locale}`,
      siteName: "SiteStudio",
      locale: meta.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: meta.openGraphTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      images: ["/opengraph-image.png"]
    },
    verification: {
      google: undefined
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const meta = localizedMetadata[locale as "lt" | "en"];

  const messages =
    locale === "en"
      ? (await import("../../../messages/en.json")).default
      : (await import("../../../messages/lt.json")).default;

  return (
    <html lang={meta.lang}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages as any}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
