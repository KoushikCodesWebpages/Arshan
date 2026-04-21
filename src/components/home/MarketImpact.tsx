"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const stats = [
  {
    value: "99.8%",
    label: "COMPLIANCE RATE",
  },
  {
    value: "5+",
    label: "GLOBAL MARKETS",
  },
];

export default function MarketImpact() {
  return (
    /* py-12 (Mobile) -> md:py-20 (PC) */
    <section className="py-12 md:py-12 bg-white overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">

        {/* grid-cols-1 (Mobile) -> lg:grid-cols-3 (PC) 
            text-center (Mobile) -> lg:text-left (PC)
        */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">

          {/* Left Text */}
          <FadeItem className="space-y-3">
            <p className="text-sm tracking-widest text-tertiary font-semibold uppercase">
              Market Impact
            </p>

            <h3 className={`w-full lg:w-[90%] text-2xl md:text-3xl font-semibold ${theme.text.main} mx-auto lg:mx-0`}>
              Proven results across global industries.
            </h3>
          </FadeItem>

          {/* Stats Container: 
              Using a nested grid (grid-cols-2) on mobile so stats sit side-by-side 
              instead of one long vertical list.
          */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 lg:flex lg:justify-around">
            {stats.map((stat, index) => (
              <FadeItem key={index} className="text-center">

                <div className={`text-3xl md:text-4xl font-bold ${theme.text.brand}`}>
                  {stat.value}
                </div>

                <p className="text-[10px] md:text-sm  tracking-widest text-text-muted uppercase font-medium">
                  {stat.label}
                </p>

              </FadeItem>
            ))}
          </div>

        </FadeInStagger>

      </div>
    </section>
  );
}