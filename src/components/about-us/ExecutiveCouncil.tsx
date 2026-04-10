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
    name: "Elena Weber",
    role: "Chief Operations Officer",
    bio: "Leading digital transformation and cross-border logistics across our European and Asian hubs.",
    image: "/exec-2.jpg",
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

        {/* Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {executives.map((member, idx) => (
            <FadeInStagger key={idx}>
              <FadeItem className="space-y-6 group">
                {/* Grayscale Image Wrapper */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle Top-down Vignette to maintain Arshan 'Lens' look */}
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold ${theme.text.brand}`}>
                    {member.name}
                  </h3>
                  <p className="uppercase tracking-widest text-[10px] font-bold text-secondary">
                    {member.role}
                  </p>
                  <p className={`text-sm leading-relaxed pt-2 ${theme.text.muted} font-medium`}>
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