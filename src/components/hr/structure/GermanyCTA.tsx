"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

export default function GermanyCTA() {
  return (
    /* py-12 (Mobile) -> md:py-20 (Desktop) */
    <section className="py-12 md:py-20 bg-[#f1f5f9] overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeItem>
          <div
            className={`relative overflow-hidden rounded-2xl md:rounded-3xl px-6 md:px-16 py-16 md:py-24 text-center ${theme.brand.primary}`}
          >
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Center Vertical Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <div className="w-64 h-full bg-white/5 blur-3xl opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mx-auto flex flex-col items-center">
              
              {/* text-3xl (Mobile) -> md:text-6xl (Desktop) for cinematic scale */}
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] md:leading-[1.1]">
                Initiate Your Strategic  Talent Plan
              </h2>

              {/* w-full (Mobile) -> md:w-[70%] (Desktop) */}
              <p className="w-full md:w-[70%] text-[14px] md:text-xl text-white/70 mt-6 md:mt-8 font-semibold leading-relaxed">
                Connect with an HR Strategist to receive a custom-built investment 
                architecture for your global team.
              </p>

              {/* Button - Full width on smallest mobile, inline on sm+ */}
              <div className="mt-10 w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 md:px-12 py-4 md:py-5 text-sm md:text-base font-bold bg-tertiary text-white rounded-md transition-all hover:scale-105 hover:brightness-110 shadow-2xl"
                >
                  Request a Detailed Quote
                </Link>
              </div>
            </div>

          </div>
        </FadeItem>

      </div>
    </section>
  );
}