"use client";

import React, { useState } from "react";
import FormSection from "@/components/marketing/onboarding/FormSection";

export default function ServiceRequirementsForm() {
  const [employeeCount, setEmployeeCount] = useState(5);
  const [loading, setLoading] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1000); }}>
      <FormSection 
        title="Service Requirements" 
        description="Detail the technical and strategic roles required for this placement cycle."
      >
        <div className="space-y-10">
          {/* Custom Institutional Slider */}
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 transition-colors group-focus-within:text-primary">
              Number of Employees Needed
            </label>
            <div className="flex items-center gap-8">
              <div className="flex-1 relative py-4">
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#031933] hover:accent-primary transition-all"
                />
              </div>
              <div className="bg-[#031933] text-white w-12 h-12 rounded-sm flex items-center justify-center font-bold text-sm shadow-[0_8px_16px_-4px_rgba(3,25,51,0.4)] animate-in zoom-in duration-300">
                {employeeCount}
              </div>
            </div>
          </div>

          {/* Specific Roles Description */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              Specific Roles Required
            </label>
            <textarea 
              className="w-full h-40 bg-slate-50/50 border border-slate-100 rounded-sm p-4 text-xs text-slate-600 outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all resize-none leading-relaxed"
              placeholder="Detail the technical and strategic roles required for this placement cycle..."
            />
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={loading} className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors disabled:opacity-30">
              {loading ? "Saving..." : "Save Requirements"}
            </button>
          </div>
        </div>
      </FormSection>
    </form>
  );
}