"use client";

import { Code, Globe, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const iconClassName = "h-6 w-6 text-blue-600";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("s1_title"),
      description: t("s1_desc"),
      delivery: t("s1_delivery"),
      icon: <Zap className={iconClassName} />
    },
    {
      title: t("s2_title"),
      description: t("s2_desc"),
      delivery: t("s2_delivery"),
      icon: <Globe className={iconClassName} />
    },
    {
      title: t("s3_title"),
      description: t("s3_desc"),
      delivery: t("s3_delivery"),
      icon: <Code className={iconClassName} />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{service.description}</p>
              <p className="mt-4 text-sm font-medium text-blue-700">
                {service.delivery}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
