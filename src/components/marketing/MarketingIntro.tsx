"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import marketing1 from "../../../public/Professional workspace representing high-end social media management and brand consistency(2).svg";

export default function MarketingIntro() {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className=" w-full mx-auto px-28 ">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <FadeInStagger className="flex-1 space-y-8">
            <div className="space-y-6">
              <FadeItem>
                <span className={`uppercase tracking-[0.2em] text-[10px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                  Elevate Your Digital Presence
                </span>
              </FadeItem>
              
              <FadeItem>
                <h2 className={`text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight ${theme.text.brand}`}>
                  Professional <br />
                  Social Media <br />
                  Management.
                </h2>
              </FadeItem>
              
              <FadeItem>
                <p className={`text-lg lg:text-xl leading-relaxed max-w-xl ${theme.text.muted}`}>
                  We manage your brand&apos;s digital narrative through consistent 
                  posting, strategic scheduling, and professional account 
                  maintenance. Build authority and scale your influence.
                </p>
              </FadeItem>
            </div>

            <FadeItem>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button className={`${theme.buttons.primary} px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm active:scale-95 shadow-xl hover:shadow-primary/20 transition-all`}>
                  View Services
                </button>
                
                <button className="px-10 py-4 border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral transition-all active:scale-95">
                  Our Pricing
                </button>
              </div>
            </FadeItem>
          </FadeInStagger>
          {/* Change 1: Wrap the entire image section in FadeInStagger */}
          <FadeInStagger className="flex-1 relative group">
            {/* Change 2: Put the cinematic card structure INSIDE a FadeItem */}
            <FadeItem>
              <div className="relative w-full max-w-137.5 aspect-square mx-auto">
                
                {/* Outer Glow / Shadow - Only visible on hover */}
                <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* The Image Container with Lens Effects */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={marketing1}
                    alt="Digital Presence Visualization"
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    priority
                  />

                  {/* 1. THE "HOLE": Central clarity and deep vignette for that Arshan 'Lens' look */}
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)] mix-blend-multiply" />

                  {/* 2. TEAL/CYAN LIGHT LEAK: Matches the graphic's color palette */}
                  <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,255,0.15)_0%,transparent_50%)]" />

                  {/* 3. DEPTH LAYER: Deep primary blue overlay */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

                  {/* 4. CARD POLISH: Subtle inner glow and glass border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />
                </div>
              </div>
            </FadeItem>
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}