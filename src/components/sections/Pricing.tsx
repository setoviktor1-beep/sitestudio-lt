"use client";

import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const pagePath = `/${locale}`;

  const plans = [
    {
      name: t("p1_name"),
      price: t("p1_price"),
      features: t.raw("p1_features") as string[],
      popular: false
    },
    {
      name: t("p2_name"),
      price: t("p2_price"),
      features: t.raw("p2_features") as string[],
      popular: true
    },
    {
      name: t("p3_name"),
      price: t("p3_price"),
      features: t.raw("p3_features") as string[],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("subtitle")}</p>
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
                  {t("popular")}
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>

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
                {t("cta")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
