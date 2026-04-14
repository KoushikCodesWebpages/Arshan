"use client";

import React from "react";
import { Banknote, Globe2, LayoutPanelLeft } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const values = [
  {
    title: "Cost Efficiency",
    desc: "Reduce overhead by up to 60% through our optimized India Strategic Cluster and streamlined German Lexware operations. No hidden management fees or entity setup costs.",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    title: "Local Expertise",
    desc: "Native-level understanding of both Indian operational depth and German professional standards. We translate complex cultural nuances into actionable business results.",
    icon: <Globe2 className="w-5 h-5" />,
  },
  {
    title: "Seamless Integration",
    desc: "A unified management portal and single point of contact for your global workforce. Your team feels like one cohesive unit, regardless of the geographic coordinates.",
    icon: <LayoutPanelLeft className="w-5 h-5" />,
  },
];

export default function WhyArshanHR() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-28">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <FadeItem>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
              Why Arshan HR?
            </h2>
          </FadeItem>
          <FadeItem>
            <p className={`text-base font-medium opacity-60 ${theme.text.muted}`}>
              The definitive advantage for the global vanguard.
            </p>
          </FadeItem>
        </div>

        {/* Values Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((item, idx) => (
            <FadeItem key={idx} className="flex flex-col items-start space-y-6">
              
              {/* Icon Wrapper: Matches the soft blue rounded box in image */}
              <div className="w-12 h-12 rounded-xl bg-[#E0E7FF] flex items-center justify-center text-primary shadow-sm">
                {item.icon}
              </div>

              <div className="space-y-4">
                <h3 className={`text-xl font-bold tracking-tight ${theme.text.brand}`}>
                  {item.title}
                </h3>
                <p className={`text-[14px] leading-relaxed font-medium opacity-70 ${theme.text.muted}`}>
                  {item.desc}
                </p>
              </div>

            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}