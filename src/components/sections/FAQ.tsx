"use client";

import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-gray-200 bg-white p-5 open:ring-1 open:ring-blue-100"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
                {item.q}
                <span className="ml-4 text-blue-600 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
