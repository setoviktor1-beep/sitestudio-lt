import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import { projects, getProjectBySlug } from "@/lib/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://sitestudio.lt";
const caseStudySlugs = ["valuecraft", "london-handyman-pro", "ai-audit-saas"] as const;

type CaseStudySlug = (typeof caseStudySlugs)[number];

function validateSlug(slug: string): slug is CaseStudySlug {
  return caseStudySlugs.includes(slug as CaseStudySlug);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({ locale, slug }))
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

  const slug = validateSlug(params.slug) ? params.slug : "valuecraft";
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    return {
      title: locale === "lt" ? "Atvejo analizė | SiteStudio" : "Case Study | SiteStudio"
    };
  }

  const isLT = locale === "lt";
  const title = `${project.title} | ${isLT ? "Atvejo analizė" : "Case Study"} | SiteStudio`;
  const description = project.desc[isLT ? "lt" : "en"];

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/portfolio/${slug}`,
      languages: {
        "lt-LT": `/lt/portfolio/${slug}`,
        "en-US": `/en/portfolio/${slug}`,
        "x-default": `/lt/portfolio/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/portfolio/${slug}`,
      siteName: "SiteStudio",
      locale: isLT ? "lt_LT" : "en_US",
      type: "article"
    }
  };
}

export default async function CaseStudyPage({
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

  const slug = params.slug as CaseStudySlug;
  const isLT = locale === "lt";
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "portfolio" });
  const caseStudy = project.caseStudy;
  const langKey = isLT ? "lt" : "en";

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${siteUrl}/${locale}/portfolio/${slug}`,
    description: project.desc[langKey],
    creator: { "@id": `${siteUrl}/#organization` },
    about: caseStudy.challenge[langKey],
    abstract: caseStudy.solution[langKey],
    keywords: project.tech.join(", "),
    inLanguage: isLT ? "lt" : "en"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
          />

          <header className="border-b border-gray-100 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {isLT ? "Atvejo analizė" : "Case Study"}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {project.type[langKey]}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">{project.desc[langKey]}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              {t("view")} →
            </a>
          </header>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Iššūkis" : "Challenge"}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              {caseStudy.challenge[langKey]}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Sprendimas" : "Solution"}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              {caseStudy.solution[langKey]}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Rezultatai" : "Results"}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              {caseStudy.results[langKey]}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isLT ? "Technologijos" : "Tech Stack"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {caseStudy.testimonial && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                {isLT ? "Kliento atsiliepimas" : "Client testimonial"}
              </h2>
              <blockquote className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-gray-50 p-6">
                <p className="text-lg italic text-gray-800">
                  “{caseStudy.testimonial.quote[langKey]}”
                </p>
                <footer className="mt-4 text-sm font-semibold text-gray-600">
                  — {caseStudy.testimonial.author}
                </footer>
              </blockquote>
            </section>
          )}

          <section className="mt-16 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {isLT ? "Norite panašaus rezultato?" : "Want a similar result?"}
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
              {isLT ? "Gauti pasiūlymą" : "Get a quote"}
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
