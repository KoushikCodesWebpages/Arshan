"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { Database, Users, FileCheck, Eye } from "lucide-react";

const processes = [
  {
    phase: "Phase 01",
    title: "Open Data Integration",
    description: "Securely gather and structure your financial records for shared visibility.",
    icon: Database,
  },
  {
    phase: "Phase 02",
    title: "Collaborative Categorization",
    description: "Systematically organize all transactions, fostering mutual understanding of financial flow.",
    icon: Users,
  },
  {
    phase: "Phase 03",
    title: "Shared Precision Review",
    description: "Engage in joint internal checks, guaranteeing accuracy and consistent integrity with full disclosure.",
    icon: FileCheck,
  },
  {
    phase: "Phase 04",
    title: "Accessible Reporting & Statements",
    description: "Deliver clear, comprehensive statements, ensuring all stakeholders have insight into fiscal health.",
    icon: Eye,
  },
];

export default function FinanceProcessSteps() {
  return (
    /* py-16 (Mobile) -> md:py-24 (PC) */
    <section className="py-16 md:py-16 bg-background">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-12 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className={`text-3xl md:text-5xl font-bold ${theme.text.brand} mb-4`}>
            Our Transparent Process
          </h2>
          {/* The Gold Underline */}
          <div className="w-16 h-1 bg-tertiary" />
        </div>

        {/* Process Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((item, index) => (
            <FadeItem key={index}>
              {/* md:min-h-105 preserves your desktop height; min-h-0 for mobile */}
              <div className={`${theme.cards.base} p-8 md:p-10 h-full min-h-0 md:min-h-105 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
                
                {/* Icon */}
                <div className="mb-8 md:mb-10">
                  <item.icon className={`w-10 h-10 ${theme.text.brand}`} strokeWidth={1.5} />
                </div>

                {/* Phase Label */}
                <span className={`block uppercase tracking-[0.2em] text-sm md:text-md font-bold ${theme.brand.accent} mb-4 md:mb-6`}>
                  {item.phase}
                </span>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold ${theme.text.brand} leading-tight mb-4 md:mb-6`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`text-sm md:text-md font-medium leading-relaxed text-secondary`}>
                  {item.description}
                </p>
                
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}