"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const pagePath = `/${locale}`;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t("h1")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`${pagePath}#contact`}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {t("cta")}
            </Link>
            <Link
              href={`${pagePath}#portfolio`}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-400"
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
