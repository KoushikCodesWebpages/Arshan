"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function LeadershipConnect() {
  return (
    /* py-12 (Mobile) -> py-10 (Desktop) */
    <section className="py-12 md:py-10 border-t border-slate-100 overflow-hidden">
      {/* MOBILE FIX: px-6 for mobile, md:px-28 for your original desktop design */}
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <FadeInStagger className="space-y-4 md:space-y-4">
              <FadeItem>
                <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                  Connect with our leadership
                </span>
              </FadeItem>

              <FadeItem>
                {/* MOBILE: text-3xl, w-full 
                   DESKTOP: md:text-5xl, md:w-[70%] (preserves original design)
                */}
                <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                  Strategic guidance for your next move.
                </h2>
              </FadeItem>

              <FadeItem>
                {/* MOBILE: text-[15px], w-full 
                   DESKTOP: md:text-md, md:w-[80%]
                */}
                <p className={`text-[15px] md:text-md w-full leading-relaxed ${theme.text.muted}`}>
                  Skip the queue. Connect directly with our strategic partners to 
                  discuss high-level growth operations across the globe.
                </p>
              </FadeItem>
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}