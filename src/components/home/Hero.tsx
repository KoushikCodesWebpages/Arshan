"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

import home1 from '../../../public/home1.svg'


export default function Hero() {
  return (
    /* OUTER WRAPPER: Fixed background, sits directly on body. */
    <section className="relative w-full border-b border-gray-100 overflow-hidden font-sans">
      
      {/* INNER CONTAINER: 
          1. Updated padding-x to 'px-16 md:px-20' to give it that "Wide Professional" grid from the design.
          2. Fixed vertical padding 'pt-24 pb-32' (more space at the top/bottom) to prevent crowding the Navbar and creating the separation seen in 'image_4.png'.
          3. 'max-w-screen-2xl mx-auto' ensures the content doesn't stretch too wide on larger screens (matching the 'Arshan' brand containment in the design).
      */}
      <div className="w-full max-w-screen-2xl mx-auto px-16 md:px-20 pt-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
      {/* Content Column */}
      {/* REMOVED: animate-in fade-in slide-in-from-left duration-700 */}
      <FadeInStagger className="space-y-8"> 
        <div className="space-y-5">
          {/* Refined Gold Label spacing */}
          <FadeItem>
            <span className="text-[11px] font-bold tracking-[0.2em] text-tertiary uppercase mb-4 block">
              Arshan Business Services
            </span>
          </FadeItem>
          {/* Bold Arshan Header, tightly packed. */}
          <FadeItem>
            <h1 className={`${theme.text.brand} text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-primary`}>
              Integrated Finance, Marketing, <br /> and HR Solutions for SMBs
            </h1>
          </FadeItem>
          {/* Muted body text, max-w to match design lines. */}
          <FadeItem>
            <p className="text-secondary opacity-80 text-[16px] leading-relaxed max-w-xl font-medium">
              Empower your business with precision-engineered support. We bridge the gap between 
              strategic vision and execution through expert system optimization and data-driven tools.
            </p>
          </FadeItem>
        </div>

        {/* CTA Group: Matching the buttons from design */}
        <FadeItem className="flex flex-wrap gap-4 pt-6">
          {/* Dark Navy Button (Shadow updated to match design lift) */}
          <Link
            href="/contact-us"
            className={`${theme.buttons.base} ${theme.buttons.primary} px-8 py-4 flex items-center gap-3 group shadow-xl shadow-primary/20 rounded-md`}
          >
            Request Technical Audit
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
        <button
          onClick={() => {
            const el = document.getElementById("pillars");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className=" px-8 py-4 bg-slate-300 text-primary font-bold text-sm rounded-md hover:bg-slate-400 transition-colors"
        >
          View Pillars
        </button>
        </FadeItem>
      </FadeInStagger>

      {/* Visual Column */}
      {/* REMOVED: animate-in fade-in zoom-in duration-1000 */}
      <FadeInStagger className="relative flex justify-center lg:justify-end mt-16 lg:mt-0">
        
        {/* Main Image Container */}
        <FadeItem className="relative w-full max-w-130 h-112.5 md:h-150 rounded-2xl overflow-hidden shadow-2xl group">
          {/* BRAND OVERLAY */}
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply z-10 pointer-events-none" />
          
          <Image
            src={home1} 
            alt="Arshan Strategic Architecture"
            fill
            className="object-cover grayscale-10 contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 520px"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-10" />
        </FadeItem>

        {/* The Floating Value Card */}
        <FadeItem className="absolute -bottom-10 -left-6 md:-left-10 bg-white p-8 rounded-xl shadow-2xl border-l-4 border-tertiary max-w-[320px] z-20 opacity-100">
          <h3 className="text-primary font-bold text-lg mb-2">
            High-End Compliance
          </h3>
          <p className="text-secondary opacity-70 text-sm leading-relaxed font-medium">
            Every detail meticulously reviewed to ensure operational excellence and financial integrity.
          </p>
        </FadeItem>
      </FadeInStagger>

        </div>
      </div>
      
      {/* Background Accent: Subtle gradient on the right (faintly visible in design) */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-l from-slate-50 to-transparent -z-10" />
    </section>
  );
}