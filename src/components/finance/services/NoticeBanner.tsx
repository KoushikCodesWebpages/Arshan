"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function NoticeBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-28">
        <FadeInStagger>
          <FadeItem>
            <div className={`relative ${theme.ui.card} bg-background p-8 md:p-10 flex items-start gap-6 group transition-colors hover:bg-neutral`}>
              
              {/* Vertical Accent Line - Using Tertiary Gold */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary shadow-[2px_0_10px_rgba(164,134,38,0.1)]" />

              <div className="space-y-3">
                <h4 className={`text-md font-extrabold uppercase tracking-[0.2em] ${theme.text.brand}`}>
                  Notice of Services
                </h4>
                <p className={`text-base lg:text-lg italic leading-relaxed text-secondary w-full`}>
                  We provide administrative bookkeeping and financial record management. We are not a licensed accounting firm and do not provide audit, tax, or
legal advice.
                </p>
              </div>
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}