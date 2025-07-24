"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
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

  const handleChange = (value) => {
    Cookies.set("NEXT_LOCALE", value);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="appearance-none p-0 m-0 border-none bg-transparent focus:outline-none">
          <Globe className="w-5 h-5 text-foreground" />
        </button>
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
