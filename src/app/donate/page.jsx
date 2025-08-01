"use client";

import Footer from "@/components/footer";
import DonateSection from "@/components/donateSection";
import { Headbar } from "@/features/header/components/headbar";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function page() {
  return (
    <>
      <Toaster />
      <Headbar />
      <DonateSection />
      <Footer />
    </>
  );
}
