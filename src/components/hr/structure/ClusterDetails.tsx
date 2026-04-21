"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { UserSearch, Settings, Scale, Handshake } from "lucide-react";

const features = [
  {
    title: "Talent Acquisition",
    description: "Etisalar utilizes its extensive local network for multi-stage vetting, focusing on technical proficiency and cultural alignment with Western corporate standards. We provide final architectural review to ensure talent fits the long-term organizational design.",
    icon: <UserSearch className="w-5 h-5 text-slate-700" />,
  },
  {
    title: "Daily Management",
    description: "We maintain direct operational oversight, ensuring workflow integration and performance tracking. We provide the digital infrastructure and KPIs, while Etisalar manages on-ground facility logistics and employee engagement programs.",
    icon: <Settings className="w-5 h-5 text-slate-700" />,
  },
  {
    title: "Legal & Compliance",
    description: "Etisalar acts as the Employer of Record (EoR), handling localized statutory benefits and payroll taxes. Arshan manages the master service agreements and ensures all intellectual property transfers remain airtight under international maritime law standards.",
    icon: <Scale className="w-5 h-5 text-slate-700" />,
  },
];

export default function ClusterDetails() {
  return (
    /* py-16 (Mobile) -> md:py-24 (Desktop) */
    <section id="clusters" className="scroll-mt-12 py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          
          {/* TOP PARTNERSHIP HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 md:gap-12 pb-12 md:pb-16 border-b border-slate-200 mb-16 md:mb-20">
            {/* max-w-full on mobile, 60% on desktop */}
            <FadeItem className="w-full lg:w-[60%]">
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme.text.brand} mb-6`}>
                India Strategic Cluster
              </h2>
              <p className={`text-lg md:text-xl leading-relaxed ${theme.text.muted}`}>
                In strategic partnership with Etisalar, we offer a specialized labor cost model designed for
                scalability. This joint venture integrates high-caliber talent with institutional-grade risk
                management, providing a sovereign solution for global resource allocation.
              </p>
            </FadeItem>

            {/* Partner Card - Width adjusts to content on mobile */}
            <FadeItem className="w-full sm:w-auto">
              <div className="bg-white border border-slate-100 shadow-sm p-6 md:p-8 rounded-sm flex items-center gap-5 sm:min-w-[320px]">
                <div className="bg-tertiary/10 p-3 rounded-sm shrink-0">
                  <Handshake className="w-6 h-6 md:w-8 md:h-8 text-tertiary" />
                </div>
                <div>
                  <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Joint Venture Partner
                  </p>
                  <p className={`text-xl md:text-2xl font-bold ${theme.text.brand}`}>
                    Etisalar
                  </p>
                </div>
              </div>
            </FadeItem>
          </div>

          {/* THREE-COLUMN GRID - Gap adjusted for vertical stacking */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {features.map((feature, idx) => (
              <FadeItem key={idx} className="flex flex-col space-y-5 md:space-y-6">
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-200/50 flex items-center justify-center rounded-sm shrink-0">
                  {feature.icon}
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold ${theme.text.brand}`}>
                  {feature.title}
                </h3>
                
                <p className={`text-base md:text-[17px] leading-relaxed ${theme.text.muted}`}>
                  {feature.description}
                </p>
              </FadeItem>
            ))}
          </div>

        </FadeInStagger>
      </div>
    </section>
  );
}