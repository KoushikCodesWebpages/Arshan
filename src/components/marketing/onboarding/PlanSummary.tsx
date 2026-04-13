"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { theme } from "@/lib/theme";
import PlanSelectionModal, { Plan } from "./PlanSelectionModal";

interface PlanSummaryProps {
  selectedPlan: Plan;
  setSelectedPlan: (plan: Plan) => void;
}

export default function PlanSummary({ selectedPlan, setSelectedPlan }: PlanSummaryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          
          {/* Left Column: Label with staggered entrance */}
          <div className="lg:w-1/3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <h3 className={`text-xl font-bold ${theme.text.brand} mb-2`}>
              Selected Service Plan
            </h3>
            <p className={`text-sm leading-relaxed ${theme.text.muted}`}>
              Review your chosen plan details before <br className="hidden xl:block" />
              completing the brand onboarding.
            </p>
          </div>

          {/* Right Column: Dynamic Plan Card */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="lg:w-2/3 w-full bg-[#0d2649] rounded-xl p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center shadow-2xl relative group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(13,38,73,0.4)] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 delay-200 fill-mode-both"
          >
            
            {/* Background Depth Effect - subtle shift on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300/60 font-bold">
                Current Selection
              </span>
              <h4 key={selectedPlan.name} className="text-2xl md:text-3xl font-bold mt-1 tracking-tight animate-in fade-in slide-in-from-left-4 duration-500">
                {selectedPlan.name} Plan
              </h4>
              <p className="text-xs md:text-sm text-slate-300 mt-1 opacity-80">
                {selectedPlan.desc}
              </p>
            </div>
            
            <div className="relative z-10 mt-6 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">
                €{selectedPlan.price}<span className="text-sm opacity-50 font-normal ml-1">/mo</span>
              </div>
              
              <div className="group/btn mt-3 text-[10px] uppercase font-bold tracking-widest text-blue-200 group-hover:text-white transition-all flex items-center gap-2">
                Change Plan 
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Subtle border shine on hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* Logic-Enabled Modal */}
      <PlanSelectionModal 
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