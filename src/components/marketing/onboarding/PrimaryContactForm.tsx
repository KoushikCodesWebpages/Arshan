"use client";

import React from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface PrimaryContactProps {
  values: {
    fullName?: string;
    email?: string;
    jobTitle?: string;
  };
  onChange: (data: any) => void;
}

export default function PrimaryContactForm({ values, onChange }: PrimaryContactProps) {
  
  // Unified handler to pipe data to the parent OnboardingPage
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <FadeInStagger>
        <FormSection 
          title="Primary Contact Information" 
          description="The main point of contact for all brand-related communications and strategy approvals."
        >
          <div className="space-y-6">
            
            {/* INPUT 1: Full Name */}
            <FadeItem>
              <InputField 
                name="fullName"
                label="Full Name of Contact Person" 
                placeholder="e.g. Jane Doe" 
                value={values?.fullName || ""}
                onChange={handleInputChange}
                required 
              />
            </FadeItem>

            {/* INPUT 2: Email */}
            <FadeItem>
              <InputField 
                name="email"
                label="Professional Email Address" 
                placeholder="jane.doe@company.com" 
                type="email"
                value={values?.email || ""}
                onChange={handleInputChange}
                required 
              />
            </FadeItem>

            {/* INPUT 3: Job Title */}
            <FadeItem>
              <InputField 
                name="jobTitle"
                label="Role/Job Title" 
                placeholder="e.g. Marketing Director" 
                value={values?.jobTitle || ""}
                onChange={handleInputChange}
                required 
              />
            </FadeItem>

            {/* Subtle auto-save indicator for Arshan UX */}
            <FadeItem>
              <div className="flex justify-end pt-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/30">
                  Securing point of contact...
                </span>
              </div>
            </FadeItem>

          </div>
        </FormSection>
      </FadeInStagger>
    </div>
  );
}