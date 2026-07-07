"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const pagePath = `/${locale}`;

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-0px)] items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a1040 50%, #0f0a1e 100%)" }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-300">
          {t("badge")}
        </span>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t("h1")}
        </h1>
        <p className="mt-6 text-lg text-white/70 sm:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`${pagePath}#contact`}
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition hover:bg-white/90 hover:scale-105"
          >
            {t("cta")}
          </Link>
          <Link
            href={`${pagePath}#portfolio`}
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            {t("cta2")}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-2xl font-black text-white">{t("stat1")}</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">{t("stat1_label")}</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">{t("stat2")}</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">{t("stat2_label")}</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">{t("stat3")}</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">{t("stat3_label")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
