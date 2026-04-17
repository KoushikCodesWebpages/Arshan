"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

export default function GermanyCTA() {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeItem>
          <div
            className={`relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 md:py-24 text-center ${theme.brand.primary}`}
          >
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Center Vertical Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <div className="w-64 h-full bg-white/5 blur-3xl opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mx-auto flex flex-col items-center">
              
              {/* Increased from text-3xl/5xl to 4xl/6xl for cinematic scale */}
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Initiate Your Strategic Talent Plan
              </h2>

              {/* Increased from text-sm/base to text-[15px]/lg */}
              <p className="w-[70%] text-[13px] md:text-xl text-white/70 mt-6 font-semibold leading-relaxed">
                Connect with an HR Strategist to receive a custom-built investment 
                architecture for your global team.
              </p>

              {/* Button */}
              <div className="mt-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-12 py-5 text-base font-bold bg-tertiary text-white rounded-md transition-all hover:scale-105 hover:brightness-110 shadow-2xl"
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