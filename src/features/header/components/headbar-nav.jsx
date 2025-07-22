"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

const pages = [
  {
    name: "tutorials",
    href: "/",
  },
  {
    name: "community",
    href: "/",
  },
  {
    name: "our mission",
    href: "/",
  },
  {
    name: "work with us",
    href: "/",
  },
  {
    name: "donate",
    href: "/",
  },
];

export function HeadbarNav({ className }) {
  const t = useTranslations("header");

  return (
    <nav className={cn("hidden md:flex items-center gap-4", className)}>
      {pages.map((page, idx) => (
        <Link
          key={idx}
          href={page.href}
          className="text-sm text-[var(--foreground)] border-b-2 border-transparent transition-all duration-300 font-semibold hover:animate-bounce"
          title={page.name}
        >
          {t(page.name)}
        </Link>
      ))}
    </nav>
  );
}
