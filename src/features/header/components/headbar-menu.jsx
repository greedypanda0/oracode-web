"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Menu } from "lucide-react";
import { HeadbarNav } from "./headbar-nav";

export function HeadbarMenu() {
  return (
    <Select onValueChange={() => {}}>
      <SelectTrigger>
        <Menu className="h-4 w-4" />
      </SelectTrigger>
      <SelectContent>
        <HeadbarNav className="flex-col items-start p-2 flex" />
      </SelectContent>
    </Select>
  );
}
