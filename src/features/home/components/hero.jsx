"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const slogan = useTranslations("slogan");
  const lines = [slogan("1"), slogan("2")];

  return (
    <div className="w-full flex flex-row py-16">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
      <div>
        {lines.map((line, idx) => (
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl italic text-[var(--primary)] font-extrabold"
          >
            {line}
          </motion.h1>
        ))}
        </div>
      </div>
      <div className="hidden md:w-1/2 md:flex justify-center items-center h-full">
      <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      > 
      <Image src="/panda.png" alt="panda logo" width={300} height={300} />
      </motion.div>   
      </div>
    </div>
  );
}
