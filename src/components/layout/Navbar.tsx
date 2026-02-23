"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const sectionIds = ["services", "portfolio", "about", "contact"];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const pathWithoutLocale = useMemo(() => {
    const stripped = pathname.replace(/^\/(lt|en)(?=\/|$)/, "");
    return stripped.length ? stripped : "/";
  }, [pathname]);

  const pagePath = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY + 140;
      let currentSection: string | null = null;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el && currentY >= el.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { id: "services", label: t("services") },
    { id: "portfolio", label: t("portfolio") },
    { id: "about", label: t("about") },
    { id: "contact", label: t("contact") }
  ];

  const localeHref = (targetLocale: "lt" | "en") => {
    if (pathWithoutLocale === "/") {
      return `/${targetLocale}`;
    }
    return `/${targetLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
          <Link href={pagePath} className="text-xl font-bold tracking-tight">
            SiteStudio
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`${pagePath}#${item.id}`}
                className={`text-sm transition ${
                  activeSection === item.id
                    ? "font-semibold text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center rounded-lg border border-gray-200 p-1 text-xs">
              <Link
                href={localeHref("lt")}
                className={`rounded px-2 py-1 font-medium ${
                  locale === "lt"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                LT
              </Link>
              <Link
                href={localeHref("en")}
                className={`rounded px-2 py-1 font-medium ${
                  locale === "en"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                EN
              </Link>
            </div>
            <Link
              href={`${pagePath}#contact`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {t("cta")}
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-gray-700 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-gray-100 md:hidden">
            <div className="flex flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`${pagePath}#${item.id}`}
                  className="text-sm text-gray-700"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 flex gap-2">
                <Link
                  href={localeHref("lt")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                    locale === "lt"
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 text-gray-700"
                  }`}
                >
                  LT
                </Link>
                <Link
                  href={localeHref("en")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                    locale === "en"
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 text-gray-700"
                  }`}
                >
                  EN
                </Link>
              </div>
              <Link
                href={`${pagePath}#contact`}
                className="mt-2 inline-flex w-fit rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
