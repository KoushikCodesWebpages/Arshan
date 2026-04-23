"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";

export default function WorkflowHero() {
  return (
    /* Increased top padding for mobile to account for fixed navbars */
    <section className="pt-12 md:pt-12 pb-16 md:pb-8 bg-white overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 md:gap-16">
          
          {/* Left Side: Typography */}
          <FadeInStagger className="w-full space-y-6 md:space-y-8">
            <FadeItem>
              <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                Our Process
              </span>
            </FadeItem>
            
            <FadeItem>
              {/* Responsive scaling: 4xl (Phone) -> 7xl (Tablet) -> 8xl (Desktop) */}
              <h1 className={`text-4xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight ${theme.text.brand} mb-6 md:mb-8`}>
                The Architecture <br className="hidden sm:block" /> of Influence
              </h1>
            </FadeItem>
            
            <FadeItem>
              <p className={`text-base md:text-lg leading-relaxed ${theme.text.muted} w-full md:w-[70%]`}>
                Precision social media management for the modern enterprise. We
                don't just post; we construct digital ecosystems that convert
                attention into sovereign authority.
              </p>
            </FadeItem>
          </FadeInStagger>

          {/* Right Side: Managed Services Badge */}
          <FadeItem className="w-full lg:w-auto pb-4 md:pb-6">
            <div className="flex flex-col items-start lg:items-start gap-6 md:gap-10">
              
              {/* Horizontal line - hidden on mobile to avoid breaking vertical flow */}
              <div className="hidden lg:block w- h-px bg-border-light" />
              
              <div className="flex items-center gap-3 group cursor-default">
                {/* Tertiary Gold Star */}
                <div className="w-5 h-5 rounded-full bg-tertiary flex items-center justify-center transition-transform duration-700 group-hover:rotate-180 shrink-0">
                  <Star className="w-2.5 h-2.5 text-white fill-white" />
                </div>
                
                <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase ${theme.brand.accent}`}>
                  Arshan Managed Services
                </span>
              </div>
            </div>
          </FadeItem>

        </div>
      </div>
    </section>
  );
}