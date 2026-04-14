"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { Share2, BookOpen, ShieldCheck } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const expertise = [
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    icon: Share2,
    description:
      "Comprehensive management of your social profiles including regular posting, active engagement, and organic platform growth.",
    points: ["REGULAR DAILY POSTING", "COMMUNITY ENGAGEMENT", "ORGANIC GROWTH STRATEGY"],
  },
  {
    title: "CONTENT STRATEGY",
    icon: BookOpen,
    description:
      "Planning and scheduling relevant, high-impact content that aligns with your brand's voice and resonates with your target audience.",
    points: ["EDITORIAL CALENDARS", "VISUAL STORYTELLING", "CONTENT SCHEDULING"],
  },
  {
    title: "ACCOUNT MAINTENANCE",
    icon: ShieldCheck,
    description:
      "Ensuring a consistent and professional brand presence. We handle profile optimization, security, and aesthetic continuity across all channels.",
    points: ["PROFILE OPTIMIZATION", "BRAND CONSISTENCY", "PLATFORM SYNCING"],
  },
];

export default function MarketingCoreExpertise() {
  return (
    <section id="services" className="scroll-mt-8 py-24 bg-white overflow-hidden">
      <div className="w-full mx-auto px-24">

        {/* ✅ HEADER (separate animation) */}
        <FadeInStagger>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            
            <div className="space-y-4">
              <FadeItem>
                <h2 className={`text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                  Our Core Expertise.
                </h2>
              </FadeItem>

              <FadeItem>
                <p className={`${theme.text.muted} max-w-xl text-lg lg:text-xl`}>
                  End-to-end social media solutions designed to maintain a consistent,
                  professional brand presence across all major digital channels.
                </p>
              </FadeItem>
            </div>

            <FadeItem>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 ${theme.text.main}`}>
                Services / 01-03
              </span>
            </FadeItem>

          </div>
        </FadeInStagger>

        {/* ✅ GRID (separate stagger → FIXES GLITCH) */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border-light rounded-sm overflow-hidden">

            {expertise.map((item, index) => (
              <FadeItem key={index} className="h-full">
                
                {/* 🔥 isolate animation + hover */}
                <div
                  className={`
                    h-full p-10 space-y-8
                    transition-all duration-300
                    transform-gpu will-change-transform
                    hover:bg-neutral/50
                    ${index !== expertise.length - 1 ? 'border-b md:border-b-0 md:border-r border-border-light' : ''}
                  `}
                >
                  
                  <item.icon
                    className={`w-8 h-8 ${theme.text.brand} transition-transform duration-300 group-hover:scale-110`}
                    strokeWidth={1.5}
                  />

                  <div className="space-y-4">
                    <h3 className={`text-lg font-bold tracking-tight ${theme.text.brand}`}>
                      {item.title}
                    </h3>

                    <p className={`text-sm leading-relaxed opacity-80 ${theme.text.muted}`}>
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full shadow-[0_0_5px_rgba(164,134,38,0.4)]" />
                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

              </FadeItem>
            ))}

          </div>
        </FadeInStagger>

      </div>
    </section>
  );
}