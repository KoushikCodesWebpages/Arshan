"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GlobalBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const excludedPaths = [
    "/",
    "/marketing",
    "/hr",
    "/finance",
    "/about-us",
    "/contact-us"
  ];
  const currentPath = pathname.replace(/\/$/, "") || "/";

  if (excludedPaths.includes(currentPath)) {
    return null;
  }

  return (
    <div className="fixed top-20 left-8 z-100">
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className={`
          flex items-center justify-center 
          w-12 h-12 
          bg-black rounded-full
          border border-white/10
          transition-all duration-200 ease-in-out
          
          /* Initial Shadow */
          shadow-lg
          
          /* Hover State: Quick Glow & Scale */
          hover:scale-110 
          hover:bg-neutral-900
          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
          hover:border-white/30
          
          active:scale-95
          group
        `}
      >
        <ArrowLeft 
          className="w-5 h-5 text-white transition-all duration-200 group-hover:-translate-x-1 group-hover:scale-110" 
        />
      </button>
    </div>
  );
}