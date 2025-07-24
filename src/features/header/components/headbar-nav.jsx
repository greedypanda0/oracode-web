"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Community } from "./headbar-community";

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
    href: "/",
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
            "text-sm text-foreground hover:border-b-2 border-white transition-all duration-100 font-semibold",
            page.name === "donate" && "text-accent font-extrabold text-md"
          )}
          title={page.name}
        >
          {t(page.name)}
        </Link>
      ))}
    </nav>
  );
}
