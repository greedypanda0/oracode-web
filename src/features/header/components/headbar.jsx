"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { LanguageChanger } from "./headbar-language";
import { HeadbarNav } from "./headbar-nav";
import Image from "next/image";
import { HeadbarMenu } from "./headbar-menu";

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
      className="fixed top-4 inset-x-0 z-40 mx-4 md:mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl bg-[var(--primary)] backdrop-blur-md px-6 shadow-md border border-[var(--border)]"
    >
      <div className="text-[var(--primary-foreground)] font-bold text-lg">
        <Link href="/">
          {/* <Image src="/ora.webp" alt="oracode pfp" width={100} height={50} /> */}
          Oracode
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <HeadbarNav />
      </div>
      
      <div className="flex flex-row items-center gap-2">
          <LanguageChanger />
          <HeadbarMenu />
        </div>
    </motion.header>
  );
}
