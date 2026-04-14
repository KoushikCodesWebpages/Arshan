"use client";

import React, { useEffect } from "react";
import LegalHeader from "@/components/terms/LegalHeaders";
import LegalLayout from "@/components/terms/LegalLayout";
import { theme } from "@/lib/theme";

export default function TermsPage() {
  
  useEffect(() => {
    // 1. Check if there is a hash in the URL (e.g., #terms)
    const hash = window.location.hash;
    if (hash) {
      // 2. Small delay to ensure LegalLayout and its internal IDs are rendered
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // 500ms buffer for content mounting

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <LegalHeader />

      {/* 2. Main content area */}
      <div className="relative">
        <LegalLayout />
      </div>
    </main>
  );
}