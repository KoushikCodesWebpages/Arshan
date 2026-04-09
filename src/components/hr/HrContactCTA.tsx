"use client";

import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function HRContactCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-28">
        <FadeInStagger>
          <FadeItem>
            <div className={`relative overflow-hidden rounded-[2rem] p-12 lg:p-20 text-center ${theme.brand.primary} shadow-2xl`}>
              
              {/* Subtle Decorative Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  Ready to Architect Your Global Team?
                </h2>
                
                <p className="text-slate-300 text-lg lg:text-xl mb-12 leading-relaxed opacity-90">
                  Speak with our HR consultants to design a custom hiring and payroll strategy 
                  that scales with your ambition.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* Primary CTA Button (Gold/Tertiary) */}
                  <button className={`${theme.buttons.tertiary} px-8 py-4 text-base min-w-[240px]`}>
                    Schedule a Consultation
                  </button>

                  {/* Secondary CTA Button (Transparent/Glass) */}
                  <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-sm transition-all active:scale-[0.98] min-w-[240px]">
                    Download Pricing Guide
                  </button>
                </div>
              </div>

              {/* Decorative Background Element (The subtle glow in your image) */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}