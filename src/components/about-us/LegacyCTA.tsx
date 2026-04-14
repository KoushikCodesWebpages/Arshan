"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { div } from "framer-motion/client";

export default function LegacyCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-28">
        <FadeInStagger>
          <FadeItem>
            {/* The Arshan Legacy Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 md:py-20 text-center shadow-2xl">
              
              {/* Subtle Animated Background Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/10 blur-[100px] rounded-full animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                  Ready to build <br className="hidden md:block" />
                  your legacy?
                </h2>
                
                <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                  Schedule a strategy session with our executive council to 
                  discuss your business&apos;s next chapter.
                </p>

                <div className="pt-4">
                  <Link 
                  href="/contact-us"
                  className="bg-neutral text-primary hover:bg-white px-12 py-5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-white/10 active:scale-95">
                    Book a Strategy Session
                  </Link>
                </div>
              </div>

              {/* Decorative "Glass" Border Layer */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}   