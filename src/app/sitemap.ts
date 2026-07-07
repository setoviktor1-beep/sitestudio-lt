import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://sitestudio.lt/lt",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          lt: "https://sitestudio.lt/lt",
          en: "https://sitestudio.lt/en"
        }
      }
    },
    {
      url: "https://sitestudio.lt/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          lt: "https://sitestudio.lt/lt",
          en: "https://sitestudio.lt/en"
        }
      }
    },
    {
      url: "https://sitestudio.lt/lt/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          lt: "https://sitestudio.lt/lt/privacy-policy",
          en: "https://sitestudio.lt/en/privacy-policy"
        }
      }
    },
    {
      url: "https://sitestudio.lt/en/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          lt: "https://sitestudio.lt/lt/privacy-policy",
          en: "https://sitestudio.lt/en/privacy-policy"
        }
      }
    }
  ];
}
