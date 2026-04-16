"use client";

import React from "react";
import { CheckCircle2, XCircle, RefreshCcw, X, AlertTriangle, ShieldCheck } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

type ProtocolContext = "HR" | "Marketing" | "Inquiry" | "General";
type Status = "success" | "error" | "limit_reached" | "loading" | "idle";

interface ModalProps {
  isOpen: boolean;
  status: Status;
  context: ProtocolContext;
  onClose: () => void;
  onRetry?: () => void; // Made optional with '?'
  submissionCount?: number;
}

export const OnboardingStatusModal = ({ 
  isOpen,
  status, 
  context,
  onClose, 
  onRetry, // Now optional
  submissionCount = 0 
}: ModalProps) => {
  if (!isOpen || status === "idle" || status === "loading") return null;

  const isSuccess = status === "success";
  const isLimit = status === "limit_reached";

  const contextConfig = {
    HR: { subtext: "HR Infrastructure Deployment", successLabel: "Onboarding Applied" },
    Marketing: { subtext: "Marketing Strategy Deployment", successLabel: "Onboarding Applied" },
    Inquiry: { subtext: "Contact Established", successLabel: "Message Sent" },
    General: { subtext: "System Protocol", successLabel: "Action Confirmed" }
  };

  const currentContext = contextConfig[context] || contextConfig.General;

  const statusConfig = {
    success: {
      label: currentContext.successLabel,
      subtext: currentContext.subtext,
      icon: <CheckCircle2 className="w-12 h-12 text-emerald-500" />,
      bg: "bg-emerald-50",
      description: `Data sent successful. ${submissionCount > 0 ? `${submissionCount} of 5 daily attempts utilized.` : "Wait for conatct from Arshan."}`,
      actionLabel: "Return to Interface"
    },
    error: {
      label: "Protocol Failure",
      subtext: "Transmission Error",
      icon: <XCircle className="w-12 h-12 text-rose-500" />,
      bg: "bg-rose-50",
      description: "A handshake error occurred. Your data is cached locally. Please re-initiate the synchronization.",
      actionLabel: "Re-attempt Protocol"
    },
    limit_reached: {
      label: "Rate Limit Active",
      subtext: "Protocol Locked",
      icon: <AlertTriangle className="w-12 h-12 text-amber-500" />,
      bg: "bg-amber-50",
      description: "Maximum daily transmission limit reached. For protocol bypass, contact Inquiries@arshan.de.",
      actionLabel: "Acknowledge"
    }
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.error;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
      
      <FadeInStagger className="relative bg-white w-full max-w-md p-10 md:p-12 rounded-sm shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-slate-100">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <FadeItem>
            <div className={`flex items-center justify-center w-24 h-24 rounded-full mb-8 mx-auto ${config.bg} relative`}>
              {config.icon}
              <div className="absolute inset-0 rounded-full border border-current opacity-10 animate-ping" />
            </div>

            <div className="mb-8">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#a48626] block mb-2">
                {config.subtext}
              </span>
              <h2 className="text-2xl font-bold text-[#0d2649] tracking-tight">
                {config.label}
              </h2>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium px-2">
              {config.description}
            </p>

            <div className="flex flex-col gap-4 w-full">
              {/* Only show the Refresh/Retry button if onRetry is actually provided and it's an error state */}
              {!isSuccess && !isLimit && onRetry ? (
                <>
                  <button 
                    onClick={onRetry} 
                    className="w-full bg-[#0d2649] text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm flex items-center justify-center gap-3 hover:bg-[#16335a] transition-all"
                  >
                    <RefreshCcw className="w-3 h-3" /> {config.actionLabel}
                  </button>
                  <button onClick={onClose} className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600">
                    Cancel Handshake
                  </button>
                </>
              ) : (
                <button 
                  onClick={onClose} 
                  className="w-full bg-[#0d2649] text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm hover:bg-[#16335a] transition-all shadow-lg shadow-blue-900/10"
                >
                  {config.actionLabel}
                </button>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center gap-2">
               <ShieldCheck className="w-3 h-3 text-slate-300" />
               <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold">
                 Institutional Verify: {new Date().toLocaleTimeString()}
               </span>
            </div>
          </FadeItem>
        </div>
      </FadeInStagger>
    </div>
  );
};