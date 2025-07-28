"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Globe, MessageCircle, Github, LifeBuoy, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Community() {
  const t = useTranslations("header")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="text-sm text-foreground font-semibold p-0 hover:text-primary flex flex-row gap-2 justify-center items-center">
          {t("community")} <ChevronDown size={15} />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/forum" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Forum
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="https://discord.gg/example"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            Discord
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="https://github.com/oracode"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Contribute
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/faq" className="flex items-center gap-2">
            <LifeBuoy className="w-4 h-4" />
            FAQ
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/report" className="flex items-center gap-2">
            🐛 Report an Issue
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
