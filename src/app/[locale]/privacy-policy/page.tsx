import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacy");
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={16} />
          SiteStudio
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-gray-600">{t("intro")}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="mt-2 leading-relaxed text-gray-600">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} SiteStudio. All rights reserved.
        </p>
      </div>
    </main>
  );
}
