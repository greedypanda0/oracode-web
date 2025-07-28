"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageChanger } from "./headbar-language";
import { AuthButton } from "./headbar-auth";
import { cn } from "@/lib/utils";

const pages = [
  { name: "tutorials", href: "/tutorials" },
  { name: "work with us", href: "/work" },
  { name: "donate", href: "/donate" },
];

export function HeadbarMenu() {
  const t = useTranslations("header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Menu className="w-5 h-5 text-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        side="bottom"
        className="!left-0 !w-screen !max-w-none md:!w-auto md:!max-w-sm p-2"
      >
        <DropdownMenuGroup>
          {pages.map((page) => (
            <Link key={page.name} href={page.href} title={page.name}>
              <DropdownMenuItem
                className={cn(
                  "py-2",
                  page.name === "donate" && "!text-red-500 font-semibold"
                )}
              >
                {page.name === "donate" && <Heart size={15} className="mr-2" />}
                {t(page.name)}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuItem>Community</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem>nruh</DropdownMenuItem>

        <div className="flex flex-row items-center gap-2 px-2 pt-2">
          <LanguageChanger />
          <AuthButton />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
