"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

export default function LegalInquiriesCTA() {
  return (
    <FadeItem className="pt-8 md:pt-12">
      <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-8 md:p-16 ${theme.brand.primary} text-white flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12`}>
        
        {/* Left Content - Center aligned on mobile, left on desktop */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Legal Inquiries
          </h2>
          <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            If you have any questions regarding our terms, disclosure, or 
            data processing practices, please reach out to our legal department.
          </p>
          
          <div className="pt-2 md:pt-4 space-y-1">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
              Legal Department
            </h4>
            <a 
              href="mailto:legal@arshan.de"
              className="text-base md:text-lg font-medium text-white hover:text-tertiary transition-colors block"
            >
              legal@arshan.de
            </a>
          </div>
        </div>

        {/* Right Icon Box (Glass effect) - Scaled for mobile */}
        <div className="relative group">
          <div className="w-40 h-40 md:w-64 md:h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
            <ShieldCheck 
              strokeWidth={1} 
              className="w-16 h-16 md:w-28 md:h-28 text-tertiary transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          
          {/* Subtle Decorative Glow */}
          <div className="absolute inset-0 bg-tertiary/20 blur-[60px] md:blur-[80px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
        
      </div>
    </FadeItem>
  );
}