"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function NoticeBanner() {
  return (
    /* py-8 (Mobile) -> md:py-12 (PC) */
    <section className="py-2 md:py-8 ">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          <FadeItem>
            <div className={`relative ${theme.ui.card} p-2 md:p-6 flex items-start gap-6 group transition-colors hover:bg-neutral`}>
              
              {/* Vertical Accent Line - Using Tertiary Gold */}
              <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-tertiary shadow-[2px_0_10px_rgba(164,134,38,0.1)]" />

              <div className="space-y-3 pl-2 md:pl-0">
                <h4 className={`text-xs md:text-md font-extrabold uppercase tracking-[0.2em] ${theme.text.brand}`}>
                  Notice of Services
                </h4>
                {/* text-sm (Mobile) -> lg:text-lg (PC) */}
                <p className={`text-sm lg:text-sm italic leading-relaxed text-secondary w-full font-medium`}>
                  We provide administrative bookkeeping and financial record management. We are not a licensed accounting firm and do not provide audit, tax, or legal advice.
                </p>
              </div>
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}