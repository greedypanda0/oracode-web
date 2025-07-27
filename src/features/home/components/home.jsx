"use client";
import { useTranslations } from "next-intl";
import { Hero } from "./hero";
import { Mission } from "./mission";
import { Reviews } from "./reviews";

export function Home() {
  const t = useTranslations("home");

  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Mission />
      <Reviews />
    </div>
  );
}
