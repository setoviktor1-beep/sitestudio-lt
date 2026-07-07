import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://sitestudio.lt";
const serviceSlugs = ["landing-page", "business-website", "web-application"] as const;

type ServiceSlug = (typeof serviceSlugs)[number];

type ServiceProcess = {
  step: string;
  desc: string;
};

type ServiceFaq = {
  q: string;
  a: string;
};

type ServiceContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  price: string;
  delivery: string;
  forWhom: string;
  includes: string[];
  process: ServiceProcess[];
  technologies: string[];
  faq: ServiceFaq[];
  cta: string;
};

function validateSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}

function getServiceName(slug: ServiceSlug, isLT: boolean): string {
  const names: Record<ServiceSlug, { lt: string; en: string }> = {
    "landing-page": { lt: "Landing Page", en: "Landing Page" },
    "business-website": { lt: "Verslo svetainė", en: "Business Website" },
    "web-application": { lt: "Web aplikacija", en: "Web Application" }
  };
  return names[slug][isLT ? "lt" : "en"];
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(
    params.locale as (typeof routing.locales)[number]
  )
    ? (params.locale as "lt" | "en")
    : routing.defaultLocale;

  const slug = validateSlug(params.slug) ? params.slug : "landing-page";
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const data = t.raw(slug) as ServiceContent;

  const isLT = locale === "lt";

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        "lt-LT": `/lt/services/${slug}`,
        "en-US": `/en/services/${slug}`,
        "x-default": `/lt/services/${slug}`
      }
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${locale}/services/${slug}`,
      siteName: "SiteStudio",
      locale: isLT ? "lt_LT" : "en_US",
      type: "website"
    }
  };
}

export default async function ServicePage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  if (!validateSlug(params.slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const slug = params.slug as ServiceSlug;
  const isLT = locale === "lt";

  const t = await getTranslations({ locale, namespace: "servicePages" });
  const data = t.raw(slug) as ServiceContent;

  const priceNumeric = data.price.replace(/\D/g, "");
  const serviceName = getServiceName(slug, isLT);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [
      { "@type": "Country", name: isLT ? "Lietuva" : "Lithuania" },
      { "@type": "Country", name: isLT ? "Belgija" : "Belgium" }
    ],
    description: data.metaDescription,
    url: `${siteUrl}/${locale}/services/${slug}`,
    offers: {
      "@type": "Offer",
      price: priceNumeric,
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          />

          <header className="border-b border-gray-100 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {isLT ? "Paslauga" : "Service"}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{data.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                {data.price}
              </span>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {data.delivery}
              </span>
            </div>
          </header>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Kam tai skirta" : "Who is this for"}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">{data.forWhom}</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Ką įtraukiu" : "What is included"}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.includes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-gray-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Procesas" : "Process"}
            </h2>
            <ol className="mt-6 space-y-6">
              {data.process.map((step, index) => (
                <li key={index} className="relative pl-10">
                  <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{step.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Technologijos" : "Technologies"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Dažniausi klausimai" : "Frequently asked questions"}
            </h2>
            <div className="mt-6 space-y-4">
              {data.faq.map((item, index) => (
                <div key={index} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {isLT ? "Pasiruošę pradėti?" : "Ready to get started?"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              {isLT
                ? "Parašykite apie savo projektą – per 24 valandas atsiųsiu pasiūlymą."
                : "Tell me about your project and I'll send a proposal within 24 hours."}
            </p>
            <Link
              href={`/${locale}#contact`}
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              {data.cta}
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
