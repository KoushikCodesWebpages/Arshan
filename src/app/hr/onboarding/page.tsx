"use client";

import React, { useState } from "react";
import HROnboardingHeader from "@/components/hr/onboarding/HROnboardingHeader";
import HRPlanSummary from "@/components/hr/onboarding/HRPlanSummary";
import CompanyInfoForm from "@/components/hr/onboarding/CompanyInfoForm";
import PrimaryContactForm from "@/components/marketing/onboarding/PrimaryContactForm"; 
import ServiceRequirementsForm from "@/components/hr/onboarding/ServiceRequirementsForm";
import OnboardingFooter from "@/components/marketing/onboarding/OnboardingFooter";

// Import the specific HR Plan type
import type { HRPlan } from "@/components/hr/onboarding/HRPlanSelectionModal";

export default function HROnboardingPage() {
  // 1. Initialize with the default HR 'Mid-Senior' tier
  const [selectedPlan, setSelectedPlan] = useState<HRPlan>({
    name: "Mid-Senior Full-time",
    price: "1000",
    desc: "Institutional level recruitment for established firms",
    features: [
      "Performance Management", 
      "Recruitment Strategy", 
      "Employee Relations", 
      "Quarterly HR Audits"
    ],
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24 px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Institutional Header */}
        <HROnboardingHeader />
        
        {/* 2. HR Service Plan Context */}
        <HRPlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        {/* 3. The HR Form Stack */}
        <div className="space-y-4">
          {/* Company-specific institutional data */}
          <CompanyInfoForm />
          
          {/* Shared component: reused from marketing */}
          <PrimaryContactForm />
          
          {/* Specific HR requirements (Slider & Textarea) */}
          <ServiceRequirementsForm />
          
          {/* 4. Security & Final Initialization */}
          <OnboardingFooter />
        </div>
      </div>
    </main>
  );
}