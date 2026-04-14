"use client";

import React, { useState, useEffect } from "react";
import HROnboardingHeader from "@/components/hr/onboarding/HROnboardingHeader";
import HRPlanSummary from "@/components/hr/onboarding/HRPlanSummary";
import CompanyInfoForm from "@/components/hr/onboarding/CompanyInfoForm";
import PrimaryContactForm from "@/components/marketing/onboarding/PrimaryContactForm"; 
import ServiceRequirementsForm from "@/components/hr/onboarding/ServiceRequirementsForm";
import OnboardingFooter from "@/components/marketing/onboarding/OnboardingFooter";

import type { HRPlan } from "@/components/hr/onboarding/HRPlanSelectionModal";

export default function HROnboardingPage() {
  // 1. Initial state (Fallback if localStorage is empty)
  const [selectedPlan, setSelectedPlan] = useState<HRPlan>({
    name: "Mid-Senior Full-time",
    price: "999",
    desc: "Institutional level recruitment for established firms",
    features: [
      "Performance Management", 
      "Recruitment Strategy", 
      "Employee Relations", 
      "Quarterly HR Audits"
    ],
  });

  // 2. Hydration Logic: Pull the user's choice from the pricing grid on mount
  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedOnboardingPlan");
    if (savedPlan) {
      try {
        setSelectedPlan(JSON.parse(savedPlan));
      } catch (e) {
        console.error("Error hydrating plan from storage", e);
      }
    }
  }, []);

  return (
    // Replaced px-28 with px-6 and used max-w-[1120px] for the 20% scale reduction
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-280 mx-auto">
        
        {/* 1. Institutional Header */}
        <div className="mb-12">
          <HROnboardingHeader />
        </div>
        
        {/* 2. HR Service Plan Context - Now synced with localStorage */}
        <HRPlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        {/* 3. The HR Form Stack */}
        <div className="space-y-6">
          {/* Each form is wrapped in a consistent container logic 
              if they don't already have internal padding/borders.
          */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <CompanyInfoForm />
          </section>
          
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <PrimaryContactForm />
          </section>
          
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <ServiceRequirementsForm />
          </section>
          
          {/* 4. Final Action & Security Section */}
          <div className="pt-8 border-t border-border-light">
            <OnboardingFooter />
          </div>
        </div>
      </div>
    </main>
  );
}