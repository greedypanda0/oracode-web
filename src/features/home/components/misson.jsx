"use client";
import { useTranslations } from "next-intl";

export function Mission() {
  const t = useTranslations("mission");

  return (
    <section className="w-full px-4 py-12">
      <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-primary/30 shadow-sm">
        {/* Title Side */}
        <div className="md:w-1/3 w-full flex items-center justify-center bg-primary p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-background text-center md:text-left">
            {t("title")}
          </h2>
        </div>

        {/* Description Side */}
        <div className="md:w-2/3 w-full flex items-center bg-background p-6 md:p-8">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
