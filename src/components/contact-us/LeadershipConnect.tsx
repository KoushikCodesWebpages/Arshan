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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <FadeInStagger className="space-y-4 md:space-y-6">
              <FadeItem>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">
                  Connect with our leadership
                </span>
              </FadeItem>

              <FadeItem>
                {/* MOBILE: text-3xl, w-full 
                   DESKTOP: md:text-5xl, md:w-[70%] (preserves original design)
                */}
                <h2 className={`text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] md:leading-[1.1] w-full ${theme.text.brand}`}>
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