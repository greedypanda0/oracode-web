"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Community } from "./headbar-community";
import { Heart } from "lucide-react";

const pages = [
  {
    name: "tutorials",
    href: "/",
  },
  {
    name: "work with us",
    href: "/",
  },
  {
    name: "vision",
    href: "/vision",
  },
  {
    name: "donate",
    href: "/donate",
  },
];

export function HeadbarNav({ className }) {
  const t = useTranslations("header");

  return (
    <nav className={cn("hidden md:flex items-center gap-8", className)}>
      <Community />

      {pages.map((page, idx) => (
        <Link
          key={idx}
          href={page.href}
          className={cn(
            "text-sm text-foreground hover:text-primary border-white transition-all duration-100 font-semibold flex gap-2 justify-center items-center",
            page.name === "donate" && "font-extrabold text-md text-red-600"
          )}
          title={page.name}
        >
          {page.name === "donate" && <Heart size={15} />} {t(page.name)}
        </Link>
      ))}
    </nav>
  );
}
