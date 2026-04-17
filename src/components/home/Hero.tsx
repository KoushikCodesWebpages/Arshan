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
          - lg:grid-cols-12: Using a 12-column grid for better control.
          - max-w-screen-2xl: Prevents the layout from becoming too thin on massive screens.
          - px-12 md:px-28: Keeping your preferred wide horizontal gutter.
      */}
      <div className="w-full mx-auto px-6 md:px-28 pt-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column: Spans 7 out of 12 columns to allow the title to expand */}
          <FadeInStagger className="space-y-8 lg:col-span-7"> 
            <div className="space-y-5">
              {/* Refined Gold Label spacing */}
              <FadeItem>
                <span className="text-[12px] font-bold tracking-[0.2em] text-tertiary uppercase mb-4 block">
                  Arshan Business Services
                </span>
              </FadeItem>

              {/* Header: Removed <br /> so it fills the expanded 7-column width naturally */}
              <FadeItem>
                <h1 className={`${theme.text.brand} text-4xl md:text-6xl tracking-tighter leading-[1.1] text-primary`}>
                  Integrated Finance, Marketing, and HR Solutions for SMBs
                </h1>
              </FadeItem>

              {/* Muted body text: Fixed with max-w-xl to keep it at a normal, readable size */}
              <FadeItem>
                <p className="text-secondary text-[18px] leading-relaxed font-medium max-w-xl">
                  Empower your small-to-medium business with precision-
                  engineered operational support. We bridge the gap between
                  strategic vision and execution through expert financial
                  management, data-driven marketing, and scalable HR systems.
                </p>
              </FadeItem>
            </div>

            {/* CTA Group: Matching the buttons from design */}
            <FadeItem className="flex flex-wrap gap-4 pt-6">
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
                className="px-8 py-4 bg-slate-300 text-primary font-bold text-sm rounded-md hover:bg-slate-400 transition-colors"
              >
                View Pillars
              </button>
            </FadeItem>
          </FadeInStagger>

          {/* Visual Column: Spans 5 out of 12 columns */}
          <FadeInStagger className="relative flex justify-center lg:justify-end lg:col-span-5 mt-16 lg:mt-0">
            
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
      
      {/* Background Accent: Subtle gradient on the right */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-l from-slate-50 to-transparent -z-10" />
    </section>
  );
}