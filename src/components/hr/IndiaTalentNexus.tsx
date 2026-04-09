"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme"; 
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import hr1 from '../../../public/hr1.svg';

export default function IndiaTalentNexus() {
  return (
    <section className="py-24 bg-background">
      <div className="w-full mx-auto px-28 ">
        
        {/* Header Section */}
        <FadeInStagger>
          <div className="mb-16">
            <FadeItem>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
                India Talent Nexus
              </h2>
            </FadeItem>
            <FadeItem>
              <p className={`${theme.text.muted} max-w-2xl text-lg lg:text-xl leading-relaxed`}>
                Leverage high-caliber expertise with significant cost efficiency through 
                our specialized India-based employment programs.
              </p>
            </FadeItem>
          </div>

          {/* Grid Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. Large Feature Card (Left - 7 Columns) */}
            <FadeItem className="lg:col-span-7">
              <div className={`${theme.ui.card} relative h-full p-10 flex flex-col justify-between group overflow-hidden border-border-light`}>
                
                {/* Decorative Side Bar - Using Tertiary (Gold) from your CSS */}
                <div className="absolute left-0 top-10 bottom-10 w-1 bg-tertiary rounded-r-full shadow-[0_0_10px_rgba(164,134,38,0.3)]" />
                
                <div>
                  <div className="mb-8 p-3 bg-primary/5 w-fit rounded-full">
                    <div className="w-6 h-6 text-primary">
                       <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">Scale Without Constraints</h3>
                  <p className={`${theme.text.main} text-lg mb-8 leading-relaxed`}>
                    Access India&apos;s premier tech and business talent pool. Our end-to-end 
                    recruitment process handles everything from sourcing to legal onboarding.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-sm text-sm font-semibold uppercase tracking-wider">
                    60% Cost Reduction
                  </span>
                  <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-sm text-sm font-semibold uppercase tracking-wider">
                    Full Compliance
                  </span>
                </div>
              </div>
            </FadeItem>

            {/* 2. Right Stack (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Dark Card - Architectural Hiring */}
              <FadeItem className="h-full">
                <div className={`${theme.brand.primary} p-8 rounded-sm shadow-xl h-full relative overflow-hidden group`}>
                  <h3 className={`text-xl font-bold mb-3 ${theme.brand.textOnPrimary}`}>
                    Architectural Hiring
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Precision-matched roles aligned with your corporate culture and structural requirements.
                  </p>
                  {/* Decorative glow using tertiary color variable */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full -mr-10 -mb-10 blur-2xl group-hover:bg-tertiary/20 transition-colors" />
                </div>
              </FadeItem>

              {/* White Card - Risk Mitigation */}
              <FadeItem>
                <div className={`${theme.ui.card} p-8 flex flex-col gap-4 border-border-light`}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-tertiary rounded-sm flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                       </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Risk Mitigation</h3>
                  </div>
                  <p className={theme.text.main}>
                    We handle local labor laws and employment regulations so you focus on the output.
                  </p>
                </div>
              </FadeItem>

            </div>
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}