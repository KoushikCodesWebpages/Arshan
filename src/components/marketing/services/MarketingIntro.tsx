"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import marketing1 from "../../../../public/Professional workspace representing high-end social media management and brand consistency(2).svg";

export default function MarketingIntro() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <FadeInStagger className="flex-1 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-6">
              <FadeItem>
                <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                  Elevate Your Digital Presence
                </span>
              </FadeItem>
              
              <FadeItem className="order-1">
                <h1 className={`text-4xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight ${theme.text.brand} mb-6 md:mb-8`}>
                  Professional <br className="hidden sm:block" />
                  Social Media <br className="hidden sm:block" />
                  Management.
                </h1>
              </FadeItem>

              {/* MOBILE IMAGE: High-Contrast Version */}
              <FadeItem className="lg:hidden order-2 w-full max-w-sm mx-auto">
                 {/* bg-slate-950 ensures a deep black base for contrast */}
                 <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-neutral bg-slate-950">
                    <Image
                      src={marketing1}
                      alt="Digital Presence Visualization"
                      fill
                      className="object-cover opacity-80" /* Slightly reduced opacity to let the black BG through */
                      priority
                    />
                    
                    {/* Strong Mobile Vignette: Forces the dark contrast on the edges */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
                    
                    {/* Deep Blue Depth Overlay */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none" />
                 </div>
              </FadeItem>

              <FadeItem className="order-3">
                <p className={`text-base md:text-lg leading-relaxed ${theme.text.muted} w-full md:w-[90%]`}>
                  We manage your brand&apos;s digital narrative through consistent 
                  posting, strategic scheduling, and professional account 
                  maintenance. Build authority and scale your influence.
                </p>
              </FadeItem>
            </div>

            <FadeItem className="order-4 w-full">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${theme.buttons.primary} w-full sm:w-auto px-10 py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-sm active:scale-95 shadow-xl hover:shadow-primary/20 transition-all`}
                >
                  View Services
                </button>
                
                <Link 
                  href="/marketing/#social-media-pricing"
                  className="w-full sm:w-auto px-10 py-4 border border-primary/20 text-primary font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm hover:bg-neutral transition-all active:scale-95 inline-block text-center"
                >
                  Our Pricing
                </Link>
              </div>
            </FadeItem>
          </FadeInStagger>

          {/* DESKTOP IMAGE: Preserved with full effects */}
          <FadeInStagger className="hidden lg:block flex-1 relative group">
            <FadeItem>
              <div className="relative w-full max-w-137.5 aspect-square mx-auto">
                <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={marketing1}
                    alt="Digital Presence Visualization"
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)] mix-blend-multiply" />
                  <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,255,0.15)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
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