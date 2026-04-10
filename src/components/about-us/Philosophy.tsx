"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { Compass, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const philosophies = [
  {
    title: "Precision",
    description: "Technical excellence is the baseline of our service. We apply architectural rigor to financial planning, ensuring every decimal point supports a larger strategic vision.",
    icon: Compass,
    highlights: ["Data-Driven Insights", "Zero-Margin Error Rates", "Advanced Fiscal Modeling"],
    featured: false,
  },
  {
    title: "Integrity",
    description: "Ethical business practices aren't just a requirement; they are our identity. We provide honest, transparent counsel that prioritizes long-term stability over short-term gains.",
    icon: ShieldCheck,
    highlights: ["Radical Transparency", "Fiduciary Responsibility", "Ethical Governance"],
    featured: true, 
  },
  {
    title: "Client Centricity",
    description: "We deliver bespoke solutions tailored to the unique DNA of each organization. We don't believe in templates; we believe in understanding your specific legacy.",
    icon: MapPin,
    highlights: ["Tailored HR Frameworks", "Custom Growth Roadmaps", "Dedicated Partner Support"],
    featured: false,
  },
];

export default function Philosophy() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-28">
        
        {/* Header Section */}
        <FadeInStagger className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
          <FadeItem>
            <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
              Our Philosophy
            </h2>
          </FadeItem>
          <FadeItem>
            <p className={`text-base md:text-lg ${theme.text.muted} font-medium`}>
              The foundational principles that guide every strategy we develop and every partnership we build.
            </p>
          </FadeItem>
        </FadeInStagger>

        {/* Unified Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {philosophies.map((item, idx) => (
            <FadeInStagger key={idx} className="flex">
              <FadeItem className="w-full flex">
                <div className={`
                  relative flex flex-col w-full p-10 rounded-2xl border transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group
                  hover:-translate-y-3
                  ${item.featured 
                    ? "bg-primary text-white border-transparent shadow-2xl z-10" 
                    : "bg-white border-border-light shadow-sm hover:shadow-xl text-foreground"}
                `}>
                  
                  {/* Icon Wrapper */}
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mb-8
                    ${item.featured ? "bg-white/10 text-white" : "bg-primary/5 text-primary"}
                  `}>
                    <item.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-6 ${item.featured ? "text-white" : theme.text.brand}`}>
                    {item.title}
                  </h3>
                  
                  {/* Fixed min-height for description ensures visual balance */}
                  <p className={`mb-8 text-base leading-relaxed font-medium min-h-30 ${item.featured ? "text-slate-300" : "text-slate-500"}`}>
                    {item.description}
                  </p>

                  {/* Highlights List */}
                  <div className="mt-auto">
                    <ul className="space-y-4">
                      {item.highlights.map((point, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold tracking-tight">
                          <CheckCircle2 className={`w-4 h-4 ${item.featured ? "text-tertiary" : "text-primary"}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!item.featured && (
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/5 rounded-2xl transition-colors pointer-events-none" />
                  )}
                </div>
              </FadeItem>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}