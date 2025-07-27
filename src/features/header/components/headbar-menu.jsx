"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Community } from "./headbar-community";
import { Button } from "@/components/ui/button";

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
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Menu className="w-5 h-5 text-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="mt-2 w-full">
        <DropdownMenuItem>nruh</DropdownMenuItem>
        <DropdownMenuItem>Community</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem className="pl-5">nruh</DropdownMenuItem>
        <DropdownMenuItem>nruh</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
