"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import finance1 from '../../../public/finance1.svg';

export default function FinanceIntro() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="w-full mx-auto px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <FadeInStagger className="flex-1 space-y-6">
            <FadeItem>
              <span className={`uppercase tracking-[0.2em] text-xs font-bold ${theme.brand.accent} opacity-90`}>
                Strategic Management
              </span>
            </FadeItem>
            
            <FadeItem>
              <h2 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${theme.text.brand}`}>
                Structural Precision <br />
                for Financial <br />
                Excellence.
              </h2>
            </FadeItem>
            
            <FadeItem>
              <p className={`text-lg lg:text-xl leading-relaxed max-w-xl ${theme.text.muted}`}>
                Arshan provides high-fidelity financial record management and
                administrative bookkeeping designed for clarity, scale, and
                uncompromising accuracy.
              </p>
            </FadeItem>

            <FadeItem>
              <div className="flex items-center gap-8 pt-4">
                <button className={`${theme.buttons.primary} px-8 py-4 shadow-xl hover:shadow-primary/20 rounded-sm transition-all active:scale-95`}>
                  View Solutions
                </button>
                
                <button className={`flex items-center gap-2 font-bold text-sm ${theme.text.main} group transition-colors hover:text-primary`}>
                  Our Process 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeItem>
          </FadeInStagger>

          {/* Stacked Image Effect */}
          <FadeInStagger className="flex-1 space-y-6">
                      {/* We put 'group' here so the hover is detected for the whole image stack */}
          <FadeItem className="flex-1 relative w-full group">
            <div className="relative w-full max-w-125 aspect-square mx-auto">
              
              {/* Back Layer (Navy Accent) */}
              <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 translate-x-4 translate-y-2 opacity-90 shadow-xl transition-transform duration-700 group-hover:rotate-1 group-hover:translate-x-2" />
              
              {/* Top Layer (The Graph Image) */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden -rotate-5 translate-x-4 translate-y-2 shadow-2xl border border-white/10 bg-slate-900">
                <Image
                  src={finance1}
                  alt="Financial Growth Chart"
                  fill
                  className="object-cover scale-150 rotate-6 transition-transform duration-1000 ease-out group-hover:scale-[1.6] group-hover:rotate-3"
                  priority
                />

                {/* Subtle Overlay Gradient for Depth */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent pointer-events-none" />
                
                {/* Internal Glow effect */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />
              </div>

            </div>
          </FadeItem>
          </FadeInStagger>


        </div>
      </div>
    </section>
  );
}