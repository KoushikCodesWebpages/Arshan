"use client";

import React, { useState, useEffect } from "react";
import HROnboardingHeader from "@/components/hr/onboarding/HROnboardingHeader";
import HRPlanSummary from "@/components/hr/onboarding/HRPlanSummary";
import CompanyInfoForm from "@/components/hr/onboarding/CompanyInfoForm";
import PrimaryContactForm from "@/components/hr/onboarding/PrimaryContactForm"; 
import ServiceRequirementsForm from "@/components/hr/onboarding/ServiceRequirementsForm";
import OnboardingFooter from "@/components/hr/onboarding/OnboardingFooter";

// Import the HRPlan type
import { type HRPlan } from "@/components/hr/onboarding/HRPlanSelectionModal";

// Define the shape of our master data object
export interface HROnboardingData {
  company: any;
  contact: any;
  requirements: any;
}

export default function HROnboardingPage() {
  // 1. Plan State (Handles the billing/selection context)
  const [selectedPlan, setSelectedPlan] = useState<HRPlan>({
    name: "Mid-Senior Full-time",
    price: "999",
    desc: "Institutional level recruitment for established firms.",
    features: ["Performance Management", "Recruitment Strategy", "Compliance Audits"],
  });

  // 2. Form Content State (The modular data blocks)
  const [formData, setFormData] = useState<HROnboardingData>({
    company: {},
    contact: {},
    requirements: {},
  });

  // 3. EFFECT: Load initial plan from Service Page & restore draft data
  useEffect(() => {
    // Restore Plan Selection
    const savedPlan = localStorage.getItem("selectedOnboardingPlan");
    if (savedPlan) {
      try {
        const parsedPlan = JSON.parse(savedPlan);
        setSelectedPlan({
          name: parsedPlan.name,
          price: parsedPlan.price,
          desc: parsedPlan.desc || "Standard institutional tier",
          features: parsedPlan.features || [],
        });
        // We keep it in storage so HRPlanSummary can also read it if needed, 
        // or remove it if you prefer a clean start
      } catch (e) { console.error("Plan Restore Error", e); }
    }

    // Restore Form Draft (Persistence)
    const savedDraft = localStorage.getItem("arshan_hr_draft");
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
      } catch (e) { console.error("Draft Restore Error", e); }
    }
  }, []);

  // 4. HANDLER: Update specific sections and sync with LocalStorage
  const updateSection = (section: keyof HROnboardingData, data: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [section]: data };
      localStorage.setItem("arshan_hr_draft", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24 px-6 md:px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Institutional Branding & Context */}
        <HROnboardingHeader />
        
        {/* Pricing/Billing Context */}
        <HRPlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        <hr className="my-16 border-slate-200" />

        {/* Modular Form Stack */}
        <div className="space-y-4">
          <CompanyInfoForm 
            onChange={(data) => updateSection("company", data)} 
          />
          
          <PrimaryContactForm 
            onChange={(data) => updateSection("contact", data)} 
          />
          
          <ServiceRequirementsForm 
            onChange={(data) => updateSection("requirements", data)} 
          />
          
          {/* Submission Logic: Passes everything to the footer */}
          <OnboardingFooter 
            allData={{ 
              ...formData, 
              plan: selectedPlan 
            }} 
          />
        </div>
      </div>
    </main>
  );
}