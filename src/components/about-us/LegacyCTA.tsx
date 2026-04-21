"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function LegacyCTA() {
  return (
    /* Responsive vertical padding: py-16 on mobile, py-24 on desktop */
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          <FadeItem>
            {/* Responsive Rounded Corners: rounded-3xl on mobile, rounded-[2.5rem] on desktop.
                Responsive Card Padding: px-6 py-16 on mobile, px-8 py-20 on desktop.
            */}
            <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-primary px-6 md:px-8 py-16 md:py-20 text-center shadow-2xl">
              
              {/* Subtle Animated Background Glows */}
              <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-tertiary/10 blur-[80px] md:blur-[100px] rounded-full animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-white/5 blur-[80px] md:blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-8 md:space-y-10">
                {/* Heading scales from text-3xl to text-6xl */}
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-[1.2] md:leading-tight">
                  Ready to build <br className="hidden md:block" />
                  your legacy?
                </h2>
                
                {/* Paragraph scales from text-base to text-xl */}
                <p className="text-base md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                  Schedule a strategy session with our executive council to 
                  discuss your business&apos;s next chapter.
                </p>

                <div className="pt-4 w-full flex justify-center">
                  <Link 
                    href="/contact-us"
className="inline-flex w-full sm:w-auto items-center justify-center px-10 md:px-12 py-4 md:py-5 text-sm md:text-base font-bold bg-tertiary text-white rounded-md transition-all hover:scale-105 hover:brightness-110 shadow-2xl"                  >
                    Book a Strategy Session
                  </Link>
                </div>
              </div>

              {/* Decorative "Glass" Border Layer - Matches parent rounding */}
              <div className="absolute inset-0 rounded-3xl md:rounded-[2.5rem] border border-white/10 pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}