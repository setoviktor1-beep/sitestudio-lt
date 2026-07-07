import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://sitestudio.lt";

export function generateStaticParams() {
  return getAllSlugs();
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

  const post = getPostBySlug(locale, params.slug);

  if (!post) {
    return {
      title: locale === "lt" ? "Straipsnis | SiteStudio" : "Article | SiteStudio"
    };
  }

  const isLT = locale === "lt";
  const langKey = isLT ? "lt" : "en";
  const alternateLocale = isLT ? "en" : "lt";
  const alternateSlug = post.slugs[alternateLocale];

  return {
    title: post.title[langKey],
    description: post.excerpt[langKey],
    alternates: {
      canonical: `/${locale}/blog/${post.slugs[langKey]}`,
      languages: {
        "lt-LT": `/lt/blog/${post.slugs.lt}`,
        "en-US": `/en/blog/${post.slugs.en}`,
        "x-default": `/lt/blog/${post.slugs.lt}`
      }
    },
    openGraph: {
      title: post.title[langKey],
      description: post.excerpt[langKey],
      url: `/${locale}/blog/${post.slugs[langKey]}`,
      siteName: "SiteStudio",
      locale: isLT ? "lt_LT" : "en_US",
      type: "article",
      authors: [post.author],
      publishedTime: post.date
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const isLT = locale === "lt";
  const langKey = isLT ? "lt" : "en";
  const post = getPostBySlug(locale as "lt" | "en", params.slug);

  if (!post) {
    notFound();
  }

  const sections = post.content[langKey];
  const faq = post.faq?.[langKey];

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[langKey],
    description: post.excerpt[langKey],
    url: `${siteUrl}/${locale}/blog/${post.slugs[langKey]}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteUrl
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: isLT ? "lt" : "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${locale}/blog/${post.slugs[langKey]}`
    }
  };

  const faqSchema = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    : null;

  const schemas = faqSchema ? [blogPostingSchema, faqSchema] : [blogPostingSchema];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />

          <header className="border-b border-gray-100 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {isLT ? "Blogas" : "Blog"}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title[langKey]}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(isLT ? "lt-LT" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime[langKey]}</span>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">{post.excerpt[langKey]}</p>
          </header>

          <div className="mt-12 space-y-10">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mt-4 text-lg leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {faq && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold text-gray-900">
                {isLT ? "Dažniausi klausimai" : "Frequently asked questions"}
              </h2>
              <div className="mt-6 space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">{item.q}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {isLT ? "Norite sužinoti daugiau?" : "Want to learn more?"}
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
