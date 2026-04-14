"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";

export default function WorkflowHero() {
  return (
    <section className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          
          {/* Left Side: Typography */}
          <FadeInStagger className="max-w-4xl space-y-8">
            <FadeItem>
              <span className={`uppercase tracking-[0.3em] text-[10px] font-bold ${theme.text.muted} opacity-80`}>
                Our Process
              </span>
            </FadeItem>
            
            <FadeItem>
              {/* Uses theme.text.brand for primary navy color */}
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${theme.text.brand} leading-[0.95] -translate-x-1`}>
                The Architecture of <br />
                Influence
              </h1>
            </FadeItem>
            
            <FadeItem>
              {/* Uses theme.text.muted for slate-grey subtext */}
              <p className={`text-lg md:text-xl leading-relaxed max-w-xl opacity-70 ${theme.text.muted}`}>
                Precision social media management for the modern enterprise. We
                don't just post; we construct digital ecosystems that convert
                attention into sovereign authority.
              </p>
            </FadeItem>
          </FadeInStagger>

          {/* Right Side: Managed Services Badge with Divider */}
          <FadeItem className="w-full lg:w-auto pb-6">
            <div className="flex flex-col items-start lg:items-start gap-10">
              {/* Uses border-light from your globals.css variables */}
              <div className="hidden lg:block w-100 h-px bg-border-light" />
              
              <div className="flex items-center gap-3 group cursor-default">
                {/* Uses tertiary (Gold) for the star icon background */}
                <div className="w-5 h-5 rounded-full bg-tertiary flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
                  <Star className="w-2.5 h-2.5 text-white fill-white" />
                </div>
                {/* Uses theme.brand.accent (Gold) for the badge text */}
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${theme.brand.accent}`}>
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