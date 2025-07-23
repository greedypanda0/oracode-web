"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Menu } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const pages = [
  { name: "tutorials", href: "/tutorials" },
  { name: "community", href: "/community" },
  { name: "work with us", href: "/work" },
  { name: "donate", href: "/donate" },
];

export function HeadbarMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select onValueChange={(val) => router.push(val)} defaultValue={pathname}>
      <SelectTrigger className="text-foreground border-none shadow-none">
        <Menu className="h-4 w-4" color="#fff" />
      </SelectTrigger>
      <SelectContent>
        {pages.map((item, key) => (
          <SelectItem value={item.href} key={key}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
