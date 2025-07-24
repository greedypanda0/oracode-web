"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Community } from "./headbar-community";

const pages = [
  { name: "tutorials", href: "/tutorials" },
  { name: "work with us", href: "/work" },
  { name: "donate", href: "/donate" },
];

export function HeadbarMenu() {
  const router = useRouter();
  const t = useTranslations("header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ring-0 focus:ring-0 border-none bg-transparent p-0 m-0">
        <Menu className="w-5 h-5 text-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="mt-2 w-40">
        <DropdownMenuItem>
          <Community />
        </DropdownMenuItem>
        {pages.map((item) => (
          <DropdownMenuItem
            key={item.href}
            onClick={() => router.push(item.href)}
            className="cursor-pointer"
          >
            {t(item.name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
