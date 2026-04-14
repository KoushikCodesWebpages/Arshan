"use client";

import React from "react";
import { Gavel } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function LegalHeader() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeInStagger className="flex flex-col lg:flex-row justify-between items-end gap-12">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <FadeItem>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8D6E1E]">
                Compliance & Transparency
              </span>
            </FadeItem>

            <FadeItem>
              <h1 className={`text-6xl md:text-7xl font-bold tracking-tight mt-4 leading-[1.1] ${theme.text.brand}`}>
                Legal & Privacy
              </h1>
            </FadeItem>

            <FadeItem>
              <p className={`text-base md:text-lg mt-6 leading-relaxed ${theme.text.muted} max-w-xl`}>
                Comprehensive legal documentation including our business 
                disclosure, user terms, and data protection practices.
              </p>
            </FadeItem>
          </div>

          {/* RIGHT CARD - Resized for more presence */}
          <FadeItem className="lg:mb-2">
            <div className="bg-[#F8FAFC] rounded-2xl p-10 min-w-[240px] md:min-w-[280px] flex flex-col items-start text-left shadow-sm border border-slate-100/50">
              
              {/* Larger Icon with specific brand coloring */}
              <Gavel 
                strokeWidth={1.5} 
                className="w-10 h-10 text-[#1A365D] mb-10 transform -scale-x-100 opacity-80" 
              />

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A365D]/40 block">
                  Last Updated
                </span>

                <span className="text-base font-bold text-[#1A365D] tracking-tight">
                  April 15, 2026
                </span>
              </div>

            </div>
          </FadeItem>

        </FadeInStagger>

      </div>
    </section>
  );
}