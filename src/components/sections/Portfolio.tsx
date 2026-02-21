"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/lib/portfolio";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const localeKey = locale === "en" ? "en" : "lt";

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  // Show 3 cards: prev, current, next
  const getVisible = () => {
    const p = (current - 1 + projects.length) % projects.length;
    const n = (current + 1) % projects.length;
    return [p, current, n];
  };

  const visible = getVisible();

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("subtitle")}</p>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {visible.map((idx, pos) => {
              const project = projects[idx];
              const isCenter = pos === 1;
              return (
                <article
                  key={project.id}
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-500 ${
                    isCenter
                      ? "border-blue-200 shadow-lg scale-105"
                      : "border-gray-200 opacity-60 scale-95"
                  }`}
                >
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=600&h=400`}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-700">{project.type[localeKey]}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {isCenter && (
                      <>
                        <p className="mt-3 text-sm text-gray-600">{project.desc[localeKey]}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          {t("view")} →
                        </a>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-gray-300 p-2 hover:border-blue-400 hover:text-blue-600 transition"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border border-gray-300 p-2 hover:border-blue-400 hover:text-blue-600 transition"
              aria-label="Next"
            >
              →
            </button>
          </div>

          <p className="mt-2 text-center text-xs text-gray-400">
            {current + 1} / {projects.length}
          </p>
        </div>
      </div>
    </section>
  );
}
