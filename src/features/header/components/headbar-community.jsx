"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Globe, MessageCircle, Github, LifeBuoy } from "lucide-react";
import Link from "next/link";

export function Community() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-foreground font-semibold p-0">
          Community
        </Button>
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
