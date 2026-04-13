"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";

export default function OnboardingFooter() {
  const handleFinalSubmit = (e: React.FormEvent) => {
    // If this is inside a global <form>, this is optional.
    // If you are using a state manager (Zustand/Context), 
    // trigger the final aggregate API call here.
    console.log("Submitting all brand details...");
  };

  return (
    <footer className="pt-12 mt-12 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Security Badge */}
        <div className="flex items-center gap-2.5 group">
          <div className="bg-slate-100 p-1.5 rounded-full group-hover:bg-primary/5 transition-colors">
            <ShieldCheck className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
          </div>
          <p className="text-[11px] font-medium text-slate-400 tracking-tight">
            All data is encrypted and managed by{" "}
            <span className="text-slate-500 font-semibold">Atrium Financial Systems.</span>
          </p>
        </div>

        {/* Final CTA Button */}
        <button
          type="submit"
          onClick={handleFinalSubmit}
          className="bg-[#031933] text-white px-14 py-4 font-bold rounded-lg shadow-[0_10px_25px_-5px_rgba(3,25,51,0.3)] hover:bg-[#052345] transition-all active:scale-[0.98] text-sm tracking-wide"
        >
          Submit Brand Details
        </button>

      </div>
    </footer>
  );
}