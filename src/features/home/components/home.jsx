"use client";
import { useTranslations } from "next-intl";
import { Hero } from "./hero";

export function Home() {
  const t = useTranslations("home");
  return (
    <div className="w-full flex flex-col my-16">
      <Hero />
    </div>
  );
}
