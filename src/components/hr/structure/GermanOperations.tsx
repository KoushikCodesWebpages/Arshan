"use client";

import React from "react";
import { Landmark, ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const modules = [
  {
    number: "01",
    title: "Talent Procurement",
    desc: "Advanced headhunting within German legal frameworks. We manage the delicate balance of candidate expectations and regulatory requirements to ensure long-term cultural and professional fit.",
  },
  {
    number: "02",
    title: "Lexware Payroll",
    desc: "Automated Lexware-based payroll systems ensure zero-error tolerance in calculating social security, church tax, and pension contributions.",
  },
  {
    number: "03",
    title: "Fiscal Admin",
    desc: "We act as your local administrative proxy insulating your core business from legal friction and regulatory overhead.",
  },
];

function ModuleCard({ module }: { module: (typeof modules)[0] }) {
  return (
    <div className="bg-white border border-border-light p-8 rounded-brand shadow-sm relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
      
      {/* Accent Bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.brand.primary}`} />
      
      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-tertiary">
        Service Module {module.number}
      </span>

      <h4 className={`text-xl md:text-2xl font-bold mt-2 mb-4 tracking-tight ${theme.text.brand}`}>
        {module.title}
      </h4>

      <p className={`text-[14px] md:text-[15px] leading-relaxed ${theme.text.muted}`}>
        {module.desc}
      </p>
    </div>
  );
}

export default function GermanyOperations() {
  return (
    /* py-16 (Mobile) -> md:py-20 (PC) */
    <section className="py-16 md:py-20 bg-[#F8FAFC] overflow-hidden">
      {/* MOBILE FIX: px-6 for mobile, md:px-28 for your original desktop design */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* LEFT SIDE - Occupies 6 columns */}
          <div className="lg:col-span-6 space-y-8">
            <FadeItem>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme.text.brand} mb-6 leading-[1.1]`}>
                Germany Operations
              </h2>
              <p className={`text-lg md:text-xl leading-relaxed ${theme.text.muted} max-w-lg`}>
                High-compliance, bespoke labor management for the DACH
                region. Our German infrastructure is built on regulatory
                excellence and precise fiscal oversight.
              </p>
            </FadeItem>

            {/* Compliance Box */}
            <FadeItem className="bg-[#f1f5f9]/60 border border-border-light rounded-brand p-8 md:p-10">
              <h3 className={`text-xl md:text-2xl font-bold ${theme.text.brand} mb-4`}>
                The Compliance Standard
              </h3>
              <p className={`text-[14px] md:text-[15px] leading-relaxed ${theme.text.muted} mb-8`}>
                Operating in Germany requires strict adherence to GoBD standards. 
                Arshan provides a defensive shield for international firms, ensuring 
                precision in every employment action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white px-5 py-2.5 rounded-brand border border-border-light flex items-center gap-3 shadow-sm">
                  <Landmark className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[13px] md:text-[15px] font-bold tracking-wider text-primary">
                    Lexware Integrated
                  </span>
                </div>

                <div className="bg-white px-5 py-2.5 rounded-brand border border-border-light flex items-center gap-3 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[13px] md:text-[15px] font-bold tracking-wider text-primary">
                    Audit-Ready
                  </span>
                </div>
              </div>
            </FadeItem>
          </div>

          {/* RIGHT SIDE - Occupies 6 columns */}
          <div className="lg:col-span-6 flex flex-col h-full gap-6">
            
            {/* TOP ROW - Balanced distribution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.slice(0, 2).map((module, idx) => (
                <FadeItem key={idx}>
                  <ModuleCard module={module} />
                </FadeItem>
              ))}
            </div>

            {/* BOTTOM CARD */}
            <FadeItem className="grow">
              <div className="h-full">
                <ModuleCard module={modules[2]} />
              </div>
            </FadeItem>

          </div>

        </FadeInStagger>
      </div>
    </section>
  );
}