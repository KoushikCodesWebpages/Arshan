"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

export default function GermanyCTA() {
  return (
    <section className="py-16 bg-[#f1f5f9]">
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeItem>
          <div
            className={`relative overflow-hidden rounded-3xl px-8 md:px-16 py-12 md:py-20 text-center ${theme.brand.primary}`}
          >
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Center Vertical Glow (KEY DETAIL) */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <div className="w-55 h-full bg-white/5 blur-2xl opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Initiate àour Strategic Talent Plan
              </h2>

              <p className="text-sm md:text-base text-white/60 mt-4 leading-relaxed max-w-xl">
                Connect with an HR Strategist to receive a custom-built investment 
                architecture for your global team.
              </p>

              {/* Button */}
              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold bg-tertiary text-white rounded-md transition-all hover:brightness-110 shadow-lg"
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