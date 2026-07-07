import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sitestudio.lt";

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

  const isLT = locale === "lt";

  return {
    title: isLT ? "Privatumo politika | SiteStudio" : "Privacy Policy | SiteStudio",
    description: isLT
      ? "SiteStudio privatumo politika. Sužinokite, kaip renkame, naudojame ir saugome jūsų asmens duomenis."
      : "SiteStudio privacy policy. Learn how we collect, use and protect your personal data.",
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        "lt-LT": "/lt/privacy-policy",
        "en-US": "/en/privacy-policy",
        "x-default": "/lt/privacy-policy"
      }
    },
    openGraph: {
      title: isLT ? "Privatumo politika | SiteStudio" : "Privacy Policy | SiteStudio",
      description: isLT
        ? "SiteStudio privatumo politika."
        : "SiteStudio privacy policy.",
      url: `/${locale}/privacy-policy`,
      siteName: "SiteStudio",
      locale: isLT ? "lt_LT" : "en_US",
      type: "website"
    }
  };
}

export default async function PrivacyPolicyPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("privacy");
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={16} />
          SiteStudio
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-gray-600">{t("intro")}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="mt-2 leading-relaxed text-gray-600">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} SiteStudio. All rights reserved.
        </p>
      </div>
    </main>
  );
}
