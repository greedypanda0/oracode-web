"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { LanguageChanger } from "./headbar-language";
import { HeadbarNav } from "./headbar-nav";
import Image from "next/image";
import { HeadbarMenu } from "./headbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Headbar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      }}
      className="fixed top-4 inset-x-0 z-40 mx-4 md:mx-auto flex h-14 max-w-7xl items-center justify-between backdrop-blur-md px-6"
    >
      {/* Title  */}
      <div className={cn("text-[var(--primary-foreground)] font-bold text-lg")}>
        <Link href="/">
          <Image src="/oracode.png" alt="oracode pfp" width={100} height={50} />
          {/* Oracode */}
        </Link>
      </div>

      {/* Navbar  */}
      <div className="flex items-center gap-6">
        <HeadbarNav />
      </div>

      {/* Buttons  */}
      <div className="flex flex-row items-center gap-2">
        <LanguageChanger />
        <HeadbarMenu />
        <Button className="hidden md:flex">
          <Download /> Download
        </Button>
        <Button className="hidden md:flex">Sign In</Button>
      </div>
    </motion.header>
  );
}
