"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Cookies from "js-cookie";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const langs = [
  {
    value: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    value: "hi",
    name: "Hindi",
    flag: "🇮🇳",
  },
];

export function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const handleChange = (value) => {
    Cookies.set("NEXT_LOCALE", value);
    router.refresh();
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger icon={true} className="text-foreground border-none shadow-none">
        {langs.find((c) => c.value === locale)?.flag || "🌐"} {locale}
      </SelectTrigger>
      <SelectContent>
        {langs.map((item, key) => (
          <SelectItem value={item.value} key={key}>
            {item.flag} {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
