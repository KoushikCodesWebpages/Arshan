"use client";

import React, { useState } from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface ContactData {
  fullName: string;
  email: string;
  jobTitle: string;
}

interface PrimaryContactFormProps {
  onChange: (data: ContactData) => void;
}

export default function PrimaryContactForm({ onChange }: PrimaryContactFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<ContactData>({
    fullName: "",
    email: "",
    jobTitle: "",
  });

  const handleInputChange = (field: keyof ContactData, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
            
            {/* FULL NAME */}
            <FadeItem>
              <InputField 
                label="Full Name of Contact Person" 
                placeholder="e.g. Jane Doe" 
                value={formData.fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
                  handleInputChange("fullName", e.target.value)
                }
                required 
              />
            </FadeItem>

            {/* EMAIL */}
            <FadeItem>
              <InputField 
                label="Professional Email Address" 
                placeholder="jane.doe@company.com" 
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
                  handleInputChange("email", e.target.value)
                }
                required 
              />
            </FadeItem>

            {/* ROLE */}
            <FadeItem>
              <InputField 
                label="Role/Job Title" 
                placeholder="e.g. Marketing Director" 
                value={formData.jobTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
                  handleInputChange("jobTitle", e.target.value)
                }
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