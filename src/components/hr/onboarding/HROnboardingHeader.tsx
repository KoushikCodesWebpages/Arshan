"use client";

import React from "react";
import { theme } from "@/lib/theme";

export default function HROnboardingHeader() {
  return (
    <header className="mb-16 animate-in fade-in slide-in-from-top-4 duration-1000 ease-out">
      {/* Institutional Branding Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-[#A48626]/30" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A48626]">
          Institutional HR Division
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
        Onboarding:<br />
        <span className="text-primary">Arshan HR Services</span>
      </h1>

      {/* Description */}
      <p className="text-slate-500 mt-8 max-w-2xl text-lg leading-relaxed font-medium opacity-90">
        Finalize your partnership with our institutional HR division. 
        Complete the architectural profile of your firm to begin the high-level recruitment cycle.
      </p>

      {/* Decorative divider for the header section */}
      <div className="mt-12 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent" />
    </header>
  );
}