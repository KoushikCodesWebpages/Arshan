"use client";

import React from "react";
import { CheckCircle2, XCircle, RefreshCcw, X, AlertTriangle, ShieldCheck } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

type Status = "success" | "error" | "limit_reached" | "idle";

interface ModalProps {
  status: Status;
  onClose: () => void;
  onRetry: () => void;
  submissionCount: number;
}

export const OnboardingStatusModal = ({ 
  status, 
  onClose, 
  onRetry, 
  submissionCount 
}: ModalProps) => {
  if (status === "idle") return null;

  const isSuccess = status === "success";
  const isLimit = status === "limit_reached";

  // System Protocol Configuration
  const statusConfig = {
    success: {
      label: "Onboarding Applied",
      subtext: "Marketing Service",
      icon: <CheckCircle2 className="w-12 h-12 text-emerald-500" />,
      bg: "bg-emerald-50",
      description: `Your Data has been shared with Arshan Support. ${submissionCount} out of 5 Attempts Used For the Day.`,
      actionLabel: "Return to Dashboard"
    },
    error: {
      label: "Onboarding Failed",
      subtext: "Give Proper Information",
      icon: <XCircle className="w-12 h-12 text-rose-500" />,
      bg: "bg-rose-50",
      description: "The Process has encountered an error. Data is saved locally. So Kindly re-initiate the Onboarding.",
      actionLabel: "Re-attempt"
    },
    limit_reached: {
      label: "Limit Reached",
      subtext: "0 Attempts Lefts",
      icon: <AlertTriangle className="w-12 h-12 text-amber-500" />,
      bg: "bg-amber-50",
      description: "Maximum Limit Reached. Please contact Inquiries@arshan.de.",
      actionLabel: "Acknowledge"
    }
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
      {/* Cinematic Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />
      
      <FadeInStagger className="relative bg-white w-full max-w-md p-10 md:p-12 rounded-sm shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden">
        {/* Institutional Close Trigger */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <FadeItem>
            {/* Status Visual - FIXED CIRCULAR CONTAINER */}
            <div className={`flex items-center justify-center w-24 h-24 rounded-full mb-8 mx-auto ${config.bg}`}>
              {config.icon}
            </div>

            {/* Status Protocol Identity */}
            <div className="mb-8">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#a48626] block mb-2">
                {config.subtext}
              </span>
              <h2 className="text-2xl font-bold text-[#0d2649] tracking-tight">
                {config.label}
              </h2>
            </div>

            {/* Intelligence Narrative */}
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium px-2">
              {config.description}
            </p>

            {/* Action Matrix */}
            <div className="flex flex-col gap-4 w-full">
              {!isSuccess && !isLimit ? (
                <>
                  <button 
                    onClick={onRetry} 
                    className="w-full bg-[#0d2649] text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm flex items-center justify-center gap-3 hover:bg-[#16335a] transition-all"
                  >
                    <RefreshCcw className="w-3 h-3" /> {config.actionLabel}
                  </button>
                  <button 
                    onClick={onClose} 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Cancel Protocol
                  </button>
                </>
              ) : (
                <button 
                  onClick={onClose} 
                  className="w-full bg-[#0d2649] text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm hover:bg-[#16335a] transition-all"
                >
                  {config.actionLabel}
                </button>
              )}
            </div>

            {/* Validation Signature */}
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center gap-2">
               <ShieldCheck className="w-3 h-3 text-slate-300" />
               <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold">
                 System Verified: {new Date().toLocaleTimeString()}
               </span>
            </div>
          </FadeItem>
        </div>
      </FadeInStagger>
    </div>
  );
};  