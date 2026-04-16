"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { theme } from "@/lib/theme";
import HRPlanSelectionModal, { HRPlan } from "./HRPlanSelectionModal";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface HRPlanSummaryProps {
  selectedPlan: HRPlan;
  setSelectedPlan: (plan: HRPlan) => void;
}

export default function HRPlanSummary({ selectedPlan, setSelectedPlan }: HRPlanSummaryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="mb-20">
        
        {/* 🔥 MAIN STAGGER */}
        <FadeInStagger className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          
          {/* LEFT: Branding Context */}
          <FadeItem className="lg:w-1/3">
            <h3 className={`text-xl font-bold ${theme.text.brand} mb-2`}>
              Selected Service Plan
            </h3>

            <p className={`text-sm leading-relaxed ${theme.text.muted}`}>
              Review your chosen institutional tier <br className="hidden xl:block" />
              before finalizing the recruitment cycle.
            </p>
          </FadeItem>

          {/* RIGHT: Interactive Plan Card */}
          <FadeItem className="lg:w-2/3 w-full h-full">
            
            <div
              onClick={() => setIsModalOpen(true)}
              className="
                h-full
                bg-[#0d2649] rounded-xl p-8 md:p-10 text-white
                flex flex-col md:flex-row justify-between items-center
                shadow-2xl relative group overflow-hidden cursor-pointer
                transition-all duration-500
                hover:shadow-[0_20px_40px_-10px_rgba(3,25,51,0.4)]
                hover:-translate-y-1
                transform-gpu will-change-transform
              "
            >
              
              {/* Background Glow Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              
              {/* LEFT: Plan Metadata */}
              <div className="relative z-10 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                  Current Selection
                </span>

                <h4
                  key={selectedPlan.name}
                  className="text-2xl md:text-3xl font-bold mt-1 tracking-tight"
                >
                  {selectedPlan.name.toUpperCase()}
                </h4>

                <p className="text-xs md:text-sm text-slate-400 mt-1 italic font-medium">
                  {selectedPlan.desc || "Standard Institutional Tier"}
                </p>
              </div>
              
              {/* RIGHT: Financials & Action */}
              <div className="relative z-10 mt-6 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end">
                
                <div className="text-3xl md:text-4xl font-bold tracking-tight">
                  €{selectedPlan.price}
                  <span className="text-sm opacity-40 font-normal ml-1">/mo</span>
                </div>
                
                <div className="mt-3 text-[10px] uppercase font-bold tracking-widest text-[#a48626] group-hover:text-white transition-all flex items-center gap-2">
                  Modify Plan 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Interaction Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-colors duration-500" />
            </div>

          </FadeItem>

        </FadeInStagger>

      </section>

      {/* HR SPECIFIC MODAL */}
      <HRPlanSelectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        currentPlanName={selectedPlan.name}
        onSelectPlan={(plan) => {
          setSelectedPlan(plan);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}