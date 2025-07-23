"use client";
import { useTranslations } from "next-intl";

export function Mission() {
  const t = useTranslations("mission");
  
  return (
    <div className="w-full px-4 py-8 flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full flex items-center justify-center bg-primary/40 rounded-l-xl">
        <h2 className="text-2xl font-semibold text-foreground text-center md:text-left">
          {t("title")}
        </h2>
      </div>
      <div className="md:w-2/3 w-full flex items-center border-2 border-primary/40 p-6 rounded-r-xl">
        <p className="text-base text-primary-foreground leading-relaxed">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
