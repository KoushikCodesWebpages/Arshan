"use client";

import React from "react";
import FormSection from "./FormSection";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const goals = [
  "Brand Awareness",
  "Lead Generation",
  "Thought Leadership",
  "Community Growth",
];

interface VoiceGoalsProps {
  values: {
    brandVoice?: string;
    primaryGoal?: string;
  };
  onChange: (data: any) => void;
}

export default function VoiceGoalsForm({ values, onChange }: VoiceGoalsProps) {
  
  // Current goal defaults to "Thought Leadership" if nothing is selected yet
  const selectedGoal = values?.primaryGoal || "Thought Leadership";

  // Updates the parent state for the textarea
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({
      ...values,
      brandVoice: e.target.value,
    });
  };

  // Updates the parent state for the goal buttons
  const handleGoalSelect = (goal: string) => {
    onChange({
      ...values,
      primaryGoal: goal,
    });
  };

  return (
    <div className="w-full">
      <FadeInStagger>
        <FormSection
          title="Voice & Goals"
          description="Tell us the 'Why' and 'How' behind your social communications."
        >
          <div className="space-y-8">
            
            {/* Brand Voice Textarea */}
            <FadeItem>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 transition-colors group-focus-within:text-primary">
                  Brand Voice Description
                </label>
                <textarea
                  name="brandVoice"
                  value={values?.brandVoice || ""}
                  onChange={handleTextChange}
                  className="w-full h-40 bg-slate-100 border border-slate-100 rounded-sm p-4 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all resize-none"
                  placeholder="Describe your tone: Professional, authoritative, minimalist, yet accessible..."
                />
              </div>
            </FadeItem>

            {/* Goals Selection Grid */}
            <FadeItem>
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
                        onClick={() => handleGoalSelect(goal)}
                        className={`flex items-center gap-3 p-3 rounded-sm border transition-all text-sm font-medium text-left ${
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
            </FadeItem>

            {/* Arshan UX Status */}
            <FadeItem>
              <div className="flex justify-end pt-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/30">
                  Aligning strategic objectives...
                </span>
              </div>
            </FadeItem>
          </div>
        </FormSection>
      </FadeInStagger>
    </div>
  );
}