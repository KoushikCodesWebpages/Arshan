"use client";

import React, { useState } from "react";
import { theme } from "@/lib/theme";
import FormSection from "./FormSection";

const goals = [
  "Brand Awareness",
  "Lead Generation",
  "Thought Leadership",
  "Community Growth",
];

export default function VoiceGoalsForm() {
  const [selectedGoal, setSelectedGoal] = useState("Thought Leadership");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Extracting data for the specific Voice & Goals API
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const voiceDescription = formData.get("brandVoice");
    
    const payload = {
      brandVoice: voiceDescription,
      primaryGoal: selectedGoal,
    };

    console.log("Saving Voice & Goals to dedicated API:", payload);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      // You could trigger a success toast here
    }, 1000);
  };

  return (
    <form onSubmit={handleSave}>
      <FormSection
        title="Voice & Goals"
        description="Tell us the 'Why' and 'How' behind your social communications."
      >
        <div className="space-y-8">
          
          {/* Brand Voice Textarea */}
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 transition-colors group-focus-within:text-primary">
              Brand Voice Description
            </label>
            <textarea
              name="brandVoice"
              className="w-full h-40 bg-slate-200 border border-slate-100 rounded-sm p-4 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all resize-none"
              placeholder="Describe your tone: Professional, authoritative, minimalist, yet accessible..."
            />
          </div>

          {/* Goals Selection Grid */}
          <div className="space-y-3">
             <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Primary Strategic Goal
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goals.map((goal) => {
                const isActive = selectedGoal === goal;
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setSelectedGoal(goal)}
                    className={`flex items-center gap-3 p-5 rounded-xl border transition-all text-sm font-medium text-left ${
                      isActive
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-slate-50 bg-slate-50/30 text-slate-500 hover:border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isActive ? "border-primary bg-white" : "border-slate-300 bg-white"
                      }`}
                    >
                      {isActive && (
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-in zoom-in-50 duration-300" />
                      )}
                    </div>
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Individual Save Action */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors disabled:opacity-30 flex items-center gap-2`}
            >
              {loading ? (
                <>
                  <span className="w-3 h-3 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                  Updating...
                </>
              ) : (
                "Save Voice & Goals"
              )}
            </button>
          </div>
        </div>
      </FormSection>
    </form>
  );
}