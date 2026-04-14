"use client";

import React, { useState, useEffect } from "react";
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

  // Sync with LocalStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedOnboardingPlan");
    if (savedPlan) {
      try {
        const parsedPlan = JSON.parse(savedPlan);
        if (parsedPlan.name !== selectedPlan.name) {
          setSelectedPlan(parsedPlan);
        }
      } catch (e) {
        console.error("Failed to parse saved plan", e);
      }
    }
  }, [setSelectedPlan, selectedPlan.name]);

  const handlePlanChange = (plan: HRPlan) => {
    localStorage.setItem("selectedOnboardingPlan", JSON.stringify(plan));
    setSelectedPlan(plan);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="mb-16 max-w-280 mx-auto">
        
        {/* 🔥 STAGGER */}
        <FadeInStagger className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">
          
          {/* LEFT */}
          <FadeItem className="lg:w-1/3">
            <h3 className={`text-lg font-bold ${theme.text.brand} mb-1 uppercase tracking-tight`}>
              Selected Service
            </h3>

            <p className={`text-[13px] leading-relaxed ${theme.text.muted}`}>
              Review your chosen service details before <br className="hidden xl:block" />
              completing the institutional profile.
            </p>
          </FadeItem>

          {/* RIGHT CARD */}
          <FadeItem className="lg:w-2/3 w-full">
            
            <div
              onClick={() => setIsModalOpen(true)}
              className={`
                w-full ${theme.brand.primary} rounded-brand p-8 text-white
                flex flex-col md:flex-row justify-between items-center
                shadow-xl relative group cursor-pointer overflow-hidden
                transition-all duration-500
                hover:shadow-2xl hover:-translate-y-0.5
                transform-gpu will-change-transform
              `}
            >
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
              
              {/* LEFT CONTENT */}
              <div className="relative z-10 text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-bold">
                  Current Selection
                </span>

                <h4
                  key={selectedPlan.name}
                  className="text-xl md:text-2xl font-bold mt-1 tracking-tight"
                >
                  {selectedPlan.name.toUpperCase()}
                </h4>

                <p className="text-[11px] text-white/60 mt-1 italic font-medium">
                  {selectedPlan.desc || "Standard institutional tier"}
                </p>
              </div>
              
              {/* RIGHT CONTENT */}
              <div className="relative z-10 mt-6 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end">
                
                <div className="text-2xl font-bold tracking-tighter">
                  €{selectedPlan.price}
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest ml-2">
                    / Month
                  </span>
                </div>
                
                <div className="mt-3 text-[10px] uppercase font-bold tracking-[0.2em] text-tertiary group-hover:text-white transition-all flex items-center gap-2">
                  Change Plan 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 rounded-brand transition-colors" />
            </div>

          </FadeItem>

        </FadeInStagger>

      </section>

      <HRPlanSelectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        currentPlanName={selectedPlan.name}
        onSelectPlan={handlePlanChange}
      />
    </>
  );
}