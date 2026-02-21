"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const techBadges = [
  { label: "Next.js", color: "bg-black text-white" },
  { label: "React", color: "bg-blue-100 text-blue-700" },
  { label: "TypeScript", color: "bg-blue-600 text-white" },
  { label: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
  { label: "Supabase", color: "bg-green-100 text-green-700" },
  { label: "Stripe", color: "bg-purple-100 text-purple-700" },
];

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const pagePath = `/${locale}`;

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">

          {/* Left: text */}
          <div className="max-w-xl flex-1">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Web Development
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t("h1")}
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
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

          {/* Right: browser mockup */}
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Browser window */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded-md bg-white border border-gray-200 px-3 py-1 text-xs text-gray-400">
                    sitestudio.lt
                  </div>
                </div>
                {/* Browser content */}
                <div className="p-6 space-y-3 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[200px]">
                  <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-full rounded bg-gray-100" />
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 w-24 rounded-lg bg-blue-500 opacity-80" />
                    <div className="h-8 w-20 rounded-lg bg-gray-200" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-16 rounded-lg bg-white border border-gray-100 shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -left-6 top-8 flex flex-col gap-2">
                {techBadges.slice(0, 3).map((b) => (
                  <span
                    key={b.label}
                    className={`rounded-full px-3 py-1 text-xs font-semibold shadow-md ${b.color}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="absolute -right-6 bottom-12 flex flex-col gap-2">
                {techBadges.slice(3).map((b) => (
                  <span
                    key={b.label}
                    className={`rounded-full px-3 py-1 text-xs font-semibold shadow-md ${b.color}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4 rounded-xl bg-white px-5 py-3 shadow-lg border border-gray-100">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">13+</p>
                  <p className="text-xs text-gray-500">Projektų</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">3-5d</p>
                  <p className="text-xs text-gray-500">Pristatymas</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">100%</p>
                  <p className="text-xs text-gray-500">Kokybė</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
