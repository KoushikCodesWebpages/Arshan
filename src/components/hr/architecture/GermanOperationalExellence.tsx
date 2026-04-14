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
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="w-full mx-auto px-28">
        
        {/* ✅ 50 / 50 GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* LEFT: FEATURE GRID */}
          <div className="h-full">
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full auto-rows-fr">
              
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

                    <h4 className={`text-lg font-bold mb-3 ${theme.text.brand}`}>
                      {item.title}
                    </h4>

                    <p className={`text-[13px] leading-relaxed ${theme.text.muted}`}>
                      {item.desc}
                    </p>
                  </div>

                </FadeItem>
              ))}

            </FadeInStagger>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex flex-col justify-center h-full">
            <FadeInStagger className="space-y-6">
              
              <FadeItem>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Domestic Precision
                </span>

                <h2 className={`text-5xl font-bold tracking-tight mt-4 leading-[1.1] ${theme.text.brand}`}>
                  German Operational <br />
                  <span className="text-slate-400">Excellence.</span>
                </h2>
              </FadeItem>

              <FadeItem>
                <p className={`text-base leading-relaxed ${theme.text.muted}`}>
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
                    <CheckCircle2 className={`w-5 h-5 ${theme.text.brand} opacity-70`} />

                    <span className={`text-[13px] font-bold ${theme.text.brand}`}>
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