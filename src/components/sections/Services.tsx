"use client";

import { Check, Code, Globe, Zap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const iconClassName = "h-6 w-6 text-blue-600";

export default function Services() {
  const tServices = useTranslations("services");
  const tPricing = useTranslations("pricing");
  const locale = useLocale();
  const pagePath = `/${locale}`;

  const services = [
    {
      title: tServices("s1_title"),
      description: tServices("s1_desc"),
      delivery: tServices("s1_delivery"),
      icon: <Zap className={iconClassName} />
    },
    {
      title: tServices("s2_title"),
      description: tServices("s2_desc"),
      delivery: tServices("s2_delivery"),
      icon: <Globe className={iconClassName} />
    },
    {
      title: tServices("s3_title"),
      description: tServices("s3_desc"),
      delivery: tServices("s3_delivery"),
      icon: <Code className={iconClassName} />
    }
  ];

  const plans = [
    {
      name: tPricing("p1_name"),
      price: tPricing("p1_price"),
      features: tPricing.raw("p1_features") as string[],
      popular: false
    },
    {
      name: tPricing("p2_name"),
      price: tPricing("p2_price"),
      features: tPricing.raw("p2_features") as string[],
      popular: true
    },
    {
      name: tPricing("p3_name"),
      price: tPricing("p3_price"),
      features: tPricing.raw("p3_features") as string[],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {tServices("title")}
          </h2>
          <p className="mt-3 text-gray-600">{tServices("subtitle")}</p>
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

        <div id="pricing" className="relative -top-20" aria-hidden="true" />

        <div className="mt-16 max-w-3xl">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {tPricing("title")}
          </h3>
          <p className="mt-3 text-gray-600">{tPricing("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.popular ? "border-2 border-blue-600" : "border-gray-200"
              }`}
            >
              {plan.popular ? (
                <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {tPricing("popular")}
                </span>
              ) : null}
              <h4 className="text-xl font-semibold text-gray-900">{plan.name}</h4>
              <p className="mt-2 text-3xl font-bold text-gray-900">{plan.price}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`${pagePath}#contact`}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-300 text-gray-800 hover:border-gray-400"
                }`}
              >
                {tPricing("cta")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
