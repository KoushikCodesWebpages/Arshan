"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import hrstructure1 from "../../../../public/hrstructure1.svg";

export default function StructuralHero() {
  return (
    /* py-16 (Mobile) -> md:py-24 (PC) */
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        {/* Switched order-2/order-1 logic to keep image prominent on mobile stack */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          
          {/* LEFT CONTENT BLOCK */}
          <FadeItem className="flex flex-col items-start justify-center order-2 lg:order-1">
            <div className=" px-3 py-1 rounded-xs mb-6 md:mb-8">
              <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                Institutional Strategy
              </span>
            </div>

            {/* text-4xl (Mobile) -> md:text-7xl (PC) */}
            <h1 className={`text-4xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight ${theme.text.brand} mb-6 md:mb-8`}>
              Strategic Talent <br className="hidden md:block" />
              Investment <br className="hidden md:block" />
              Structure
            </h1>

            <p className={`text-base md:text-lg leading-relaxed ${theme.text.muted} w-full md:w-[90%] mb-8 md:mb-10`}>
              Consolidating global talent costs through architectural precision. We
              provide the framework for sovereign labor markets, balancing efficiency
              with operational excellence.
            </p>

            <a
              href="/hr/architecture" 
              className={`${theme.buttons.base} ${theme.buttons.primary} w-full sm:w-auto text-center px-8 py-4 text-base md:text-lg shadow-lg`}
            >
              Explore Clusters
            </a>
          </FadeItem>

          {/* RIGHT IMAGE BLOCK */}
          <FadeItem className="relative w-full min-h-75 md:min-h-112.5 lg:min-h-full order-1 lg:order-2">
            <div className="relative h-full w-full overflow-hidden rounded-3xl md:rounded-brand shadow-2xl border border-border-light">
              <Image
                src={hrstructure1}
                alt="Architectural building facade"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}