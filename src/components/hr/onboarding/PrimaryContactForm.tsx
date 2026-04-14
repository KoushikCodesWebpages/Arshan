"use client";

import React, { useState } from "react";
import { theme } from "@/lib/theme";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function PrimaryContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Saving Primary Contact data...");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSave}>
      
      {/* 🔥 STAGGER WRAPPER */}
      <FadeInStagger>
        
        <FormSection 
          title="Primary Contact Information" 
          description="The main point of contact for all brand-related communications and strategy approvals."
        >
          
          <div className="space-y-6">
            
            {/* INPUT 1 */}
            <FadeItem>
              <InputField 
                label="Full Name of Contact Person" 
                placeholder="e.g. Jane Doe" 
                required 
              />
            </FadeItem>

            {/* INPUT 2 */}
            <FadeItem>
              <InputField 
                label="Professional Email Address" 
                placeholder="jane.doe@company.com" 
                type="email"
                required 
              />
            </FadeItem>

            {/* INPUT 3 */}
            <FadeItem>
              <InputField 
                label="Role/Job Title" 
                placeholder="e.g. Marketing Director" 
                required 
              />
            </FadeItem>

            {/* BUTTON */}
            <FadeItem>
              <div className="flex justify-end pt-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="
                    text-[10px] font-bold uppercase tracking-widest 
                    text-primary/40 hover:text-primary 
                    transition-colors 
                    disabled:opacity-30
                  "
                >
                  {loading ? "Saving..." : "Save Contact Info"}
                </button>
              </div>
            </FadeItem>

          </div>

        </FormSection>

      </FadeInStagger>

    </form>
  );
}