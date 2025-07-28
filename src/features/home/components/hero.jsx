"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  const tt = useTranslations("header");

  return (
    <section className="w-full flex flex-col md:flex-row px-2 md:px-4 py-8 gap-6 md:h-screen my-12 md:my-0">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
        <Image src="/oracode.png" alt="oracode logo" width={200} height={100} />
        <h2 className="text-xl md:text-3xl font-bold text-foreground">
          {t("slogan")}
        </h2>
        <p className="text-sm md:text-xl font-semibold leading-relaxed text-primary">
          {t("description")}
        </p>
        <Button className="md:w-fit" size="lg">
          <Download /> {tt("download")}
        </Button>
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
