"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const executives = [
  {
    name: "Arjhun Mohanarangam",
    role: "Founder & CEO",
    bio: "Economic structuralist with 30 years of corporate governance experience in Germany and beyond.",
    image: "/exec-1.jpg", // Replace with actual paths
  },
  {
    name: "Marc Hoffmann",
    role: "Head of Marketing & HR",
    bio: "Expert in cultural engineering and brand psychology for the modern workforce.",
    image: "/exec-3.jpg",
  },
];

export default function ExecutiveCouncil() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-28">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <FadeInStagger className="space-y-4">
            <FadeItem>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                The Executive Council
              </h2>
            </FadeItem>
            <FadeItem>
              <p className={`text-lg max-w-xl ${theme.text.muted} font-medium`}>
                A synergy of veteran expertise and digital-first innovation guiding Arshan's strategic direction.
              </p>
            </FadeItem>
          </FadeInStagger>

          {/* Slider Navigation */}
          <FadeItem className="flex items-center gap-4">
            <button className="p-4 rounded-lg border border-border-light hover:bg-neutral transition-all active:scale-90 group">
              <ChevronLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="p-4 rounded-lg border border-border-light hover:bg-neutral transition-all active:scale-90 group">
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeItem>
        </div>

        {/* Executive Cards Grid - Max-w-5xl centers and slims the overall layout */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
  {executives.map((member, idx) => (
    <FadeInStagger key={idx}>
      <FadeItem className="space-y-6 group">
        
        {/* Scaled Down Image Wrapper 
            - Changed aspect-square to aspect-[4/5] for a more 'Executive Portrait' look
            - Added max-w-sm to prevent the image from being too huge on desktop
        */}
        <div className="relative aspect-4/5 max-w-sm mx-auto rounded-xl overflow-hidden bg-slate-200 shadow-lg">
          <Image
            src={member.image}
            alt={member.name}
            fill
            /* OPTIMIZATION: 
               1. 'sizes' tells the browser exactly how big the image will be.
               2. 'quality={85}' balances file size and clarity.
            */
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 350px"
            quality={85}
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Member Info - Text centered to match the scaled-down image */}
        <div className="space-y-2 text-center max-w-sm mx-auto">
          <h3 className={`text-2xl font-bold tracking-tight ${theme.text.brand}`}>
            {member.name}
          </h3>
          <div className="flex justify-center">
            <p className="uppercase tracking-[0.2em] text-[10px] font-black text-tertiary bg-tertiary/5 px-3 py-1 rounded-full">
              {member.role}
            </p>
          </div>
          <p className={`text-[15px] leading-relaxed pt-3 ${theme.text.muted} font-medium opacity-90`}>
            {member.bio}
          </p>
        </div>
      </FadeItem>
    </FadeInStagger>
  ))}
</div>
      </div>
    </section>
  );
}