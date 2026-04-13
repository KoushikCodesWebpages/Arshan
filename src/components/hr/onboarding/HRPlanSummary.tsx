"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { theme } from "@/lib/theme";
import HRPlanSelectionModal, { HRPlan } from "./HRPlanSelectionModal";

interface HRPlanSummaryProps {
  selectedPlan: HRPlan;
  setSelectedPlan: (plan: HRPlan) => void;
}

export default function HRPlanSummary({ selectedPlan, setSelectedPlan }: HRPlanSummaryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          
          {/* Left Column: Institutional Branding */}
          <div className="lg:w-1/3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <h3 className={`text-xl font-bold ${theme.text.brand} mb-2`}>
              Selected Service
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Review your chosen service details before <br className="hidden xl:block" />
              completing the institutional profile.
            </p>
          </div>

          {/* Right Column: Interactive HR Card */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="lg:w-2/3 w-full bg-[#031933] rounded-xl p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center shadow-2xl relative group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(3,25,51,0.5)] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300/60 font-bold">
                Current Selection
              </span>
              {/* Key forces re-animation on plan change */}
              <h4 key={selectedPlan.name} className="text-2xl md:text-3xl font-bold mt-1 tracking-tight animate-in fade-in slide-in-from-left-4 duration-500">
                {selectedPlan.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1 opacity-80">
                {selectedPlan.desc}
              </p>
            </div>
            
            <div className="relative z-10 mt-6 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end">
              <div className="text-3xl font-bold tracking-tight">
                {selectedPlan.price} Euros
                <span className="text-sm opacity-50 font-normal ml-2">/ Placement</span>
              </div>
              
              <div className="mt-3 text-[10px] uppercase font-bold tracking-[0.2em] text-blue-200 group-hover:text-white transition-all flex items-center gap-2">
                Change Plan 
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>

            {/* Premium Inner Border */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* Logic-Enabled HR Modal */}
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