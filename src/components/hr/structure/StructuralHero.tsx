"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import hrstructure1 from "../../../../public/hrstructure1.svg";

export default function StructuralHero() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        {/* Changed items-center to items-stretch (default) 
            This ensures both grid columns are always the same height.
        */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT CONTENT BLOCK */}
          <FadeItem className="flex flex-col items-start justify-center">
            <div className="bg-[#E0E7FF] px-3 py-1 rounded-xs mb-8">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#4353a3]">
                Institutional Strategy
              </span>
            </div>

            <h1 className={`text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight ${theme.text.brand} mb-8`}>
              Strategic Talent <br className="hidden md:block" />
              Investment <br className="hidden md:block" />
              Structure
            </h1>

            <p className={`text-lg leading-relaxed ${theme.text.muted} w-[90%] mb-10`}>
              Consolidating global talent costs through architectural precision. We
              provides the framework for sovereign labor markets, balancing efficiency
              with operational excellence.
            </p>

            <a
            href="/hr/architecture" 
            className={`${theme.buttons.base} ${theme.buttons.primary} px-8 py-4 text-lg shadow-lg`}>
              Explore Clusters
            </a>
          </FadeItem>

          {/* RIGHT IMAGE BLOCK */}
          <FadeItem className="relative w-full min-h-100 lg:min-h-full">
            {/* Removed aspect-ratio and replaced with h-full. 
                Because the parent FadeItem is stretched by the grid, 
                h-full here forces the image container to match the left text height exactly.
            */}
            <div className="relative h-full w-full overflow-hidden rounded-brand shadow-2xl border border-border-light">
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