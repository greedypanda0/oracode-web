"use client";
import { useTranslations } from "next-intl";
import { Hero } from "./hero";
import { Mission } from "./misson";

export function Home() {
  const t = useTranslations("home");
  
  return (
    <div className="w-full flex flex-col my-16">
      <Hero />
      <Mission />
    </div>
  );
}
