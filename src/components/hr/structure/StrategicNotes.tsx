"use client";

import React from "react";
import { Info } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

export default function StrategicNotes() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-28">
        
        <FadeItem >
          <div className="relative overflow-hidden rounded-brand border border-border-light bg-[#F1F5F9]/50 p-6 md:p-8 flex items-start gap-4">
            
            {/* Left Accent Border (Institutional Gold) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary" />

            {/* Icon */}
            <div className="mt-0.5">
              <Info className={`w-5 h-5 ${theme.text.brand}`} />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h4 className={`text-xl font-bold tracking-tight ${theme.text.brand}`}>
                Strategic Framework Notes
              </h4>
              
              <p className={`text-[15px] leading-relaxed max-w-4xl ${theme.text.muted}`}>
                Includes salary, management, and procurement. Managed collectively by Arshan & Etisalar. 
                Etisalar handles localized payroll administration. A minimum 3-month commitment is 
                required for all cluster engagements to ensure operational stability and ROI.
              </p>
            </div>

          </div>
        </FadeItem>

      </div>
    </section>
  );
}