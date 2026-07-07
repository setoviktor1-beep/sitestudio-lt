"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stat1"), label: t("stat1_label") },
    { value: t("stat2"), label: t("stat2_label") },
    { value: t("stat3"), label: t("stat3_label") }
  ];

  const credentials = t.raw("credentials") as string[];
  const whyPoints = t.raw("why_points") as string[];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-sm font-medium text-blue-700">{t("role")}</p>
          <p className="mt-4 leading-relaxed text-gray-600">{t("text")}</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {t("credentials_title")}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {credentials.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {t("why_title")}
            </h3>
            <ul className="mt-3 space-y-2">
              {whyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
