"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { CheckCircle2 } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import boardroom from '../../../../public/financeworkflow1.svg';

export default function StrategicOnboarding() {
  const deliverables = [
    "Stakeholder Interviews",
    "Competitor Landscape Audit",
    "Value Proposition Mapping",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Content (Framer Motion Staggered) */}
          <FadeInStagger className="flex-1 space-y-8">
            
            {/* Index & Header */}
            <FadeItem className="space-y-4">
              <div className="relative">
                <span className="text-[120px] font-bold text-slate-200 leading-none">
                  01
                </span>
                <hr className="absolute top-1/2 left-[180px] right-0 border-slate-100/50" />
              </div>

              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                Strategic Onboarding
              </h2>
            </FadeItem>

            {/* Phase Subtitle & Description */}
            <FadeItem className="space-y-6">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#A48626]">
                Discovery Phase
              </span>
              
              <p className={`text-lg leading-relaxed max-w-xl opacity-70 ${theme.text.muted}`}>
                Our journey begins with deep integration. We map your brand's DNA,
                identifying key stakeholder voices and institutional knowledge that
                defines your unique market position. No stone is left unturned in
                our quest for authenticity.
              </p>
            </FadeItem>

            {/* Staggered Deliverables List */}
            <FadeInStagger className="space-y-4 pt-4">
              {deliverables.map((item, index) => (
                <FadeItem key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`text-lg font-medium ${theme.text.main}`}>
                    {item}
                  </span>
                </FadeItem>
              ))}
            </FadeInStagger>

          </FadeInStagger>

          {/* Right Image Block */}
          <FadeItem className="flex-1 w-full lg:w-auto h-full">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto group overflow-hidden rounded-sm shadow-2xl">
              <Image
                src={boardroom}
                alt="Stakeholder Strategy Meeting in Illuminated Glass Boardroom"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              {/* Cinematic Vignette Overlay matching image aesthetic */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.6))] pointer-events-none" />
            </div>
          </FadeItem>

        </div>
      </div>
    </section>
  );
}