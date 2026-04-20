"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import finance1 from '../../../../public/finance1.svg';

export default function FinanceIntro() {
  return (
    /* py-16 (Mobile) -> md:py-24 (PC) */
    <section className="py-16 md:py-24 overflow-hidden bg-background">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content: text-center (Mobile) -> lg:text-left (PC) */}
          <FadeInStagger className="flex-1 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeItem>
              <span className={`uppercase tracking-[0.2em] text-xs md:text-sm font-bold ${theme.brand.accent} opacity-90`}>
                Strategic Management
              </span>
            </FadeItem>
            
            <FadeItem>
              {/* <br /> tags hidden on mobile for better text flow */}
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight ${theme.text.brand}`}>
                Structural Precision <span className="hidden md:inline"><br /></span>
                for Financial <span className="hidden md:inline"><br /></span>
                Excellence.
              </h2>
            </FadeItem>
            
            <FadeItem>
              <p className={`text-base md:text-lg lg:text-xl leading-relaxed max-w-xl text-secondary mx-auto lg:mx-0`}>
                Arshan provides high-fidelity financial record management and
                administrative bookkeeping designed for clarity, scale, and
                uncompromising accuracy.
              </p>
            </FadeItem>

            <FadeItem>
              {/* flex-col (Mobile) -> sm:flex-row (PC) for button layout */}
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const el = document.getElementById("solutions");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${theme.buttons.primary} w-full sm:w-auto px-8 py-4 shadow-xl hover:shadow-primary/20 rounded-sm transition-all active:scale-95 flex justify-center items-center`}
                >
                  View Solutions
                </button>
                 
                <Link 
                  href="/finance/process/" 
                  className={`flex items-center justify-center gap-2 font-bold text-sm ${theme.text.main} group transition-colors hover:text-primary`}
                >
                  Our Process 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeItem>
          </FadeInStagger>

          {/* Stacked Image Effect */}
          <FadeInStagger className="flex-1 w-full lg:w-auto">
            <FadeItem className="relative w-full group">
              {/* max-w-xs (Mobile) -> md:max-w-125 (PC) */}
              <div className="relative w-full max-w-[280px] sm:max-w-125 aspect-square mx-auto">
                
                {/* Back Layer (Navy Accent): Reduced rotation for mobile */}
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-2 md:rotate-3 translate-x-2 md:translate-x-4 translate-y-2 opacity-90 shadow-xl transition-transform duration-700 group-hover:rotate-1 group-hover:translate-x-2" />
                
                {/* Top Layer (The Graph Image): Reduced rotation for mobile */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden -rotate-3 md:-rotate-5 translate-x-2 md:translate-x-4 translate-y-1 md:translate-y-2 shadow-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={finance1}
                    alt="Financial Growth Chart"
                    fill
                    className="object-cover scale-150 rotate-6 transition-transform duration-1000 ease-out group-hover:scale-[1.6] group-hover:rotate-3"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent pointer-events-none" />
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