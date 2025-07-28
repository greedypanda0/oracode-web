"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const langs = [
  { value: "en", name: "English", flag: "🇬🇧" },
  { value: "hi", name: "Hindi", flag: "🇮🇳" },
];

export function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const defLanguage = langs.find((e) => e.value === locale);

  const handleChange = (value) => {
    Cookies.set("NEXT_LOCALE", value);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">{defLanguage.flag}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {langs.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => handleChange(lang.value)}
            className={lang.value === locale ? "font-semibold" : ""}
          >
            {lang.flag} {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
