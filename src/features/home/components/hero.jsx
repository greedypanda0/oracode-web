"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="w-full flex flex-col md:flex-row px-4 py-8 gap-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
        <Image src="/oracode.png" alt="oracode logo" width={200} height={100} />
        <h2 className="text-2xl font-medium text-foreground">{t("slogan")}</h2>
        <p className="text-md leading-relaxed text-secondary">{t("description")}</p>
      </div>

      {/* Right Section (Image Placeholder) */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
        <Image
          src="/code.png"
          alt="Oracode app illustration"
          width={500}
          height={500}
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
