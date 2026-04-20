"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import finance2 from "../../../../public/finance2.svg";

export default function FiscalClarity() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-primary text-white relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(164,134,38,0.05),transparent_50%)] pointer-events-none" />

      <div className="w-full mx-auto px-6 md:px-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* Left Content - Desktop sizes preserved */}
          <FadeInStagger className="lg:flex-2 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeItem>
              <span className={`uppercase tracking-[0.3em] text-sm md:text-md font-bold ${theme.brand.accent}`}>
                Sovereign Ledger
              </span>
            </FadeItem>
            
            <FadeItem>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight w-full">
                Your Clear Path to Fiscal Clarity
              </h2>
            </FadeItem>
            
            <FadeItem>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed w-full lg:w-[80%] text-slate-300/80 mx-auto lg:mx-0">
                We provide an open, structured approach to managing your
                financial data, ensuring transparent processes and collaborative
                record keeping for complete peace of mind.
              </p>
            </FadeItem>

            <FadeItem className="w-full sm:w-auto">
              <Link 
                href="/contact-us"
                className="inline-block bg-white text-primary px-10 py-4 font-bold rounded-sm shadow-xl hover:bg-slate-100 transition-all active:scale-95 w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </FadeItem>
          </FadeInStagger>

          {/* Right Image Stack - Fixed for Mobile Rendering */}
          <FadeInStagger className="lg:flex-1 w-full relative group mt-16 lg:mt-0">
            {/* Added w-full and min-h to prevent container collapse */}
            <FadeItem className="relative w-full aspect-4/5 max-w-[320px] md:max-w-md mx-auto min-h-100 md:min-h-0">
              
              {/* THE BIG GLOW */}
              <div 
                className="absolute -inset-12 md:-inset-24 blur-[80px] md:blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none" 
                style={{ 
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(13,38,73,0) 70%)',
                  mixBlendMode: 'screen' 
                }} 
              />

              {/* OUTER TRANSLUCENT FRAME */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 -rotate-1 transition-all duration-700 group-hover:rotate-0 group-hover:bg-white/10" />
              
              {/* MAIN IMAGE CONTAINER */}
              <div className="absolute inset-3 md:inset-4 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900 transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src={finance2}
                  alt="Financial Analysis Meeting"
                  fill
                  className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                
                <div className="absolute inset-0 bg-linear-to-tr from-primary/60 via-transparent to-white/10 pointer-events-none" />
              </div>

            </FadeItem>
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}