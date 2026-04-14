"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import studio from '../../../../public/financeworkflow3.svg';

export default function CreativityGeneration() {
  return (
    <section className="relative w-full mx-auto flex items-center overflow-hidden py-24">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={studio}
          alt="Modern creative studio workspace"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay: Deep Navy to Transparent */}
        <div className="absolute inset-0 bg-linear-to-r from-[#031933]/90 via-[#031933]/60 to-transparent" />
      </div>

      <div className="w-full mx-auto px-28 md:px-28 relative z-10">
        <FadeInStagger className="max-w-2xl space-y-8">
          
          {/* Index & Header */}
          <FadeItem className="space-y-4">
            <div className="flex items-center gap-6">
              <span className="text-6xl font-bold text-white/20">
                03
              </span>
              <div className="h-[1px] w-24 bg-white/20" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Creativity Generation
            </h2>
          </FadeItem>

          {/* Subtitle & Description */}
          <FadeItem className="space-y-6">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#A48626]">
              Execution Phase
            </span>
            
            <p className="text-lg md:text-xl leading-relaxed text-slate-200 opacity-90 font-medium">
              Execution is where vision meets reality. We produce premium-grade 
              assets from cinematic video snippets to high-fidelity typography 
              designed to stop the scroll and demand engagement.
            </p>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}