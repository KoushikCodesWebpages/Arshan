"use client";

import React, { useState } from "react";

import FormSection from "./FormSection";
import InputField from "./InputField";

export default function BrandIdentityForm() {
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // API CALL LOGIC HERE
    // const formData = new FormData(e.currentTarget as HTMLFormElement);
    // await fetch('/api/brand-identity', { method: 'POST', body: formData });
    
    console.log("Saving Brand Identity data...");
    setTimeout(() => setLoading(false), 1000); // Simulate network
  };

  return (
    <form onSubmit={handleSave}>
      <FormSection 
        title="Brand Identity" 
        description="The foundational elements that define how the world recognizes you."
      >
        <div className="space-y-6">
          <InputField 
            label="Official Brand Name" 
            placeholder="e.g. Atrium Financial" 
            required
          />
          
          <InputField 
            label="Website URL" 
            placeholder="https://atrium.com" 
          />

          {/* Optional: Individual save button if you want to save per section */}
          <div className="flex justify-end pt-2">
            <button 
              type="submit"
              disabled={loading}
              className={`text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors disabled:opacity-30`}
            >
              {loading ? "Saving..." : "Save Identity Details"}
            </button>
          </div>
        </div>
      </FormSection>
    </form>
  );
}