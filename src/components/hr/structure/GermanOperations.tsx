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
    desc: "Automated Lexware-based payroll systems ensure zero-error tolerance in calculating social security, church tax, and pension contributions. Real-time fiscal reporting for maximum transparency.",
  },
  {
    number: "03",
    title: "Fiscal Admin",
    desc: "We act as your local administrative proxy insulating your core business from business friction.",
  },
];

function ModuleCard({ module }: { module: (typeof modules)[0] }) {
  return (
    <div className="bg-white border border-border-light p-8 rounded-brand shadow-sm relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
      
      {/* Accent Bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.brand.primary}`} />
      
      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-tertiary">
        Service Module {module.number}
      </span>

      <h4 className={`text-xl font-bold mt-2 mb-4 tracking-tight ${theme.text.brand}`}>
        {module.title}
      </h4>

      <p className={`text-[13px] leading-relaxed ${theme.text.muted}`}>
        {module.desc}
      </p>
    </div>
  );
}

export default function GermanyOperations() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="w-full mx-auto px-28">
        
        {/* MAIN GRID */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-6">
            <FadeItem>
              <h2 className={`text-4xl font-bold tracking-tight ${theme.text.brand} mb-6`}>
                Germany Operations
              </h2>
              <p className={`text-lg leading-relaxed ${theme.text.muted} max-w-xl`}>
                High-compliance, bespoke labor management for the DACH region. 
                Our German infrastructure is built on regulatory excellence and 
                precise fiscal oversight, designed to mitigate the inherent 
                complexities of the German labor market.
              </p>
            </FadeItem>

            {/* Compliance Box */}
            <FadeItem className="bg-[#f1f5f9]/60 border border-border-light rounded-brand p-10">
              <h3 className={`text-xl font-bold ${theme.text.brand} mb-4`}>
                The Compliance Standard
              </h3>
              <p className={`text-[13px] leading-relaxed ${theme.text.muted} mb-8 max-w-md`}>
                Operating in Germany requires strict adherence to GoBD standards. 
                Arshan provides a defensive shield for international firms, ensuring 
                that every employment contract, social security filing, and tax 
                reporting action is executed with mathematical precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-brand border border-border-light flex items-center gap-2 shadow-sm">
                  <Landmark className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Lexware Integrated
                  </span>
                </div>

                <div className="bg-white px-4 py-2 rounded-brand border border-border-light flex items-center gap-2 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Audit-Ready
                  </span>
                </div>
              </div>
            </FadeItem>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex flex-col h-full gap-6">
            
            {/* TOP ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.slice(0, 2).map((module, idx) => (
                <FadeItem key={idx} className="h-full">
                  <ModuleCard module={module} />
                </FadeItem>
              ))}
            </div>

            {/* BOTTOM CARD (STRETCHES) */}
            <FadeItem className="flex-1">
              <ModuleCard module={modules[2]} />
            </FadeItem>

          </div>

        </FadeInStagger>
      </div>
    </section>
  );
}