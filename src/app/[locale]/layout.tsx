import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export const metadata: Metadata = {
  title: "SiteStudio - Profesionalios svetainės verslui",
  description:
    "Kuriu landing page, verslo svetaines ir web aplikacijas. Greitas pristatymas, modernus dizainas, SEO pagrindai.",
  keywords: [
    "svetainių kūrimas",
    "landing page kūrimas",
    "web dizainas",
    "Next.js",
    "Lietuva",
    "Belgija"
  ],
  openGraph: {
    title: "SiteStudio - Profesionalios svetainės verslui",
    description: "Kuriu landing page, verslo svetaines ir web aplikacijas.",
    url: "https://sitestudio.lt",
    siteName: "SiteStudio",
    locale: "lt_LT",
    type: "website"
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
  const messages =
    locale === "en"
      ? (await import("../../../messages/en.json")).default
      : (await import("../../../messages/lt.json")).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages as any}>
      {children}
    </NextIntlClientProvider>
  );
}
