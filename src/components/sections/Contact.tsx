"use client";

import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const location =
    locale === "lt"
      ? "Briuselis, Belgija (dirbu su klientais visame pasaulyje)"
      : "Brussels, Belgium (working with clients worldwide)";

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("subtitle")}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("name")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 transition focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: event.target.value
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 transition focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("message")}
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: event.target.value
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 transition focus:ring-2"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "..." : t("send")}
            </button>

            {status === "success" ? (
              <p className="text-sm text-green-600">{t("success")}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-600">{t("error")}</p>
            ) : null}
          </form>
        </div>

        <aside className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">SiteStudio</h3>
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Email:</span>{" "}
            viktor@sitestudio.lt
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Location:</span>{" "}
            {location}
          </p>
        </aside>
      </div>
    </section>
  );
}
