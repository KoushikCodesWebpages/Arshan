"use client";

import React from "react";
import { 
  Search, 
  Calculator, 
  Scale, 
  Handshake, 
  CheckCircle2 
} from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const features = [
  {
    title: "Strategic Sourcing",
    desc: 'High-precision identification of German talent that aligns with "Mittelstand" values of quality.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Lexware Mastery",
    desc: "Lexware payroll administration ensuring flawless technical execution and tax compliance.",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    title: "Legal Safeguarding",
    desc: "Continuous monitoring of German labor law updates (Arbeitsrecht) to mitigate institutional risk.",
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: "Resolution & Mediation",
    desc: "Professional conflict resolution and domestic management within the German workplace ecosystem.",
    icon: <Handshake className="w-6 h-6" />,
  },
];

const checklist = [
  "Direct Management & Stewardship",
  "End-to-End German Payroll Ecosystem",
  "Full Employee Lifecycle Management",
];

export default function GermanOperationalExcellence() {
  return (
    /* Adjusted py-16 for mobile, py-24 for desktop */
    <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      
      {/* MOBILE FIX: px-6 for mobile, md:px-28 preserves your desktop design */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* ✅ 50 / 50 GRID 
            Updated to grid-cols-1 for mobile, lg:grid-cols-2 for desktop
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: FEATURE GRID 
              order-2 lg:order-1 ensures features appear after text on mobile for better flow
          */}
          <div className="h-full order-2 lg:order-1">
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full auto-rows-fr">
              
              {features.map((item, idx) => (
                <FadeItem key={idx} className="h-full">
                  
                  <div
                    className="
                      h-full flex flex-col
                      bg-white p-8 rounded-brand shadow-sm 
                      border-b-4 border-slate-900
                      transition-all duration-300
                      transform-gpu will-change-transform
                      hover:-translate-y-1 hover:shadow-md
                    "
                  >
                    <div className={`mb-6 ${theme.text.brand} opacity-80`}>
                      {item.icon}
                    </div>

                    <h4 className={`text-base md:text-lg font-bold mb-3 ${theme.text.brand}`}>
                      {item.title}
                    </h4>

                    <p className={`text-[14px] leading-relaxed ${theme.text.muted}`}>
                      {item.desc}
                    </p>
                  </div>

                </FadeItem>
              ))}

            </FadeInStagger>
          </div>

          {/* RIGHT: CONTENT 
              order-1 lg:order-2 brings the heading to the top on mobile
          */}
          <div className="flex flex-col justify-center h-full order-1 lg:order-2">
            <FadeInStagger className="space-y-6">
              
              <FadeItem>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Domestic Precision
                </span>

                <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mt-4 leading-[1.1] ${theme.text.brand}`}>
                  German Operational <br className="hidden md:block" />
                  <span className="text-slate-400">Excellence.</span>
                </h2>
              </FadeItem>

              <FadeItem>
                <p className={`text-[15px] md:text-base leading-relaxed ${theme.text.muted}`}>
                  In the German market, Arshan operates as your direct HR department. 
                  We remove the complexity of domestic administration, allowing your 
                  executive leadership to focus on high-level innovation.
                </p>
              </FadeItem>

              <FadeItem className="space-y-3 pt-4">
                {checklist.map((text, i) => (
                  <div 
                    key={i} 
                    className="
                      flex items-center gap-4 
                      bg-white/50 border border-slate-100 
                      p-4 rounded-xl shadow-sm 
                      transition-all duration-300
                      hover:bg-white
                    "
                  >
                    <CheckCircle2 className={`w-4 h-4 md:w-5 ${theme.text.brand} opacity-70 shrink-0`} />

                    <span className={`text-[14px] md:text-[15px] font-bold ${theme.text.brand}`}>
                      {text}
                    </span>
                  </div>
                ))}
              </FadeItem>

            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}