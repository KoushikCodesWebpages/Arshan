"use client";

import React, { useState } from "react";
import { theme } from "@/lib/theme";
import FormSection from "./FormSection";
import InputField from "./InputField";

export default function PrimaryContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // API CALL: /api/contact-info
    console.log("Saving Primary Contact data...");
    
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSave}>
      <FormSection 
        title="Primary Contact Information" 
        description="The main point of contact for all brand-related communications and strategy approvals."
      >
        <div className="space-y-6">
          <InputField 
            label="Full Name of Contact Person" 
            placeholder="e.g. Jane Doe" 
            required 
          />
          
          <InputField 
            label="Professional Email Address" 
            placeholder="jane.doe@company.com" 
            type="email"
            required 
          />

          <InputField 
            label="Role/Job Title" 
            placeholder="e.g. Marketing Director" 
            required 
          />

          {/* Individual Save Action */}
          <div className="flex justify-end pt-2">
            <button 
              type="submit"
              disabled={loading}
              className={`text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors disabled:opacity-30`}
            >
              {loading ? "Saving..." : "Save Contact Info"}
            </button>
          </div>
        </div>
      </FormSection>
    </form>
  );
}