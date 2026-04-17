"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function MarketingFinalCTA() {
  return (
    <section className="py-24 bg-white border-t border-border-light overflow-hidden">
      <div className="container mx-auto px-6 lg:px-28 text-center">
        <FadeInStagger>
          <div className="space-y-8">
            
            {/* Headline */}
            <FadeItem>
              <h2 className={`text-5xl md:text-8xl font-bold tracking-tight ${theme.text.brand}`}>
                Ready to scale?
              </h2>
            </FadeItem>

            {/* Subtext */}
            <FadeItem>
              <p className={`text-lg md:text-xl leading-relaxed text-secondary max-w-2xl mx-auto`}>
                Partner with Arshan for professional social media management that 
                transforms your digital presence into a consistent, high-authority brand asset.
              </p>
            </FadeItem>

            {/* Dual Action Buttons */}
            <FadeItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className={`${theme.buttons.primary} inline-flex items-center justify-center min-w-65 py-4 shadow-xl hover:shadow-primary/20 transition-all rounded-md font-bold text-xs tracking-widest uppercase active:scale-95`}
                >
                  Request Account Audit
                </Link>
                
                <Link
                  href="/marketing/workflow"
                  className="inline-flex items-center justify-center min-w-55 py-4 border border-primary/20 text-primary font-bold text-sm tracking-widest uppercase hover:bg-neutral transition-all rounded-sm active:scale-95"
                >
                  Our Case Studies
                </Link>
              </div>
            </FadeItem>
            
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}