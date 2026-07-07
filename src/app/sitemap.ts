import type { MetadataRoute } from "next";

const siteUrl = "https://sitestudio.lt";

const pages = [
  { path: "", priority: 1 },
  { path: "privacy-policy", priority: 0.3 }
];

const services = ["landing-page", "business-website", "web-application"];
const caseStudies = ["valuecraft", "london-handyman-pro", "ai-audit-saas"];
const blogPosts = [
  { lt: "nextjs-vs-wordpress", en: "nextjs-vs-wordpress" },
  { lt: "kiek-kainuoja-svetaine", en: "how-much-does-website-cost" }
];

function createEntry(
  locale: "lt" | "en",
  path: string,
  priority: number,
  changeFrequency: "monthly" | "yearly" | "weekly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}/${locale}${path ? `/${path}` : ""}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        lt: `${siteUrl}/lt${path ? `/${path}` : ""}`,
        en: `${siteUrl}/en${path ? `/${path}` : ""}`
      }
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["lt", "en"] as const) {
    for (const page of pages) {
      entries.push(createEntry(locale, page.path, page.priority, "monthly"));
    }

    for (const slug of services) {
      entries.push(createEntry(locale, `services/${slug}`, 0.8, "monthly"));
    }

    for (const slug of caseStudies) {
      entries.push(createEntry(locale, `portfolio/${slug}`, 0.7, "monthly"));
    }

    for (const post of blogPosts) {
      const slug = locale === "lt" ? post.lt : post.en;
      entries.push(createEntry(locale, `blog/${slug}`, 0.7, "weekly"));
    }
  }

  return entries;
}
