"use client";

import React from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";

export type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "250",
    desc: "Essential Brand presence",
    features: ["8 High-Impact Posts", "Platform-Native Captions", "Monthly Performance Report"],
    featured: false,
  },
  {
    name: "Growth",
    price: "450",
    desc: "Comprehensive management",
    features: ["15 Posts Per Month", "Active Stories & Engagement", "Bi-Weekly Strategy Review", "Full Profile makeover & Trend Research"],
    featured: true,
  },
  {
    name: "Premium",
    price: "800",
    desc: "Full-scale digital authority",
    features: ["Daily Posting (30+ posts)", "Premium Custom Content", "Full Platform Management", "Priority Support Desk"],
    featured: false,
  },
];

interface PlanSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: Plan) => void;
  currentPlanName: string;
}

export default function PlanSelectionModal({ 
  isOpen, 
  onClose, 
  onSelectPlan, 
  currentPlanName 
}: PlanSelectionModalProps) {
  
  if (!isOpen) return null;

  return (
    /* 1. OVERLAY: items-start + py-10 ensures the modal doesn't get cut off at the top. overflow-y-auto enables the scroll. */
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-10 bg-primary/20 backdrop-blur-md overflow-y-auto animate-in fade-in duration-500">
      
      {/* 2. MODAL: Removed overflow-hidden so the internal grid doesn't get clipped. */}
      <div className={`${theme.ui.modal} w-full max-w-7xl my-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative flex flex-col bg-white`}>
        
        {/* Close Button - Stays sticky/fixed relative to the modal top */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 md:top-6 md:right-8 p-3 bg-slate-100/80 backdrop-blur-sm md:bg-transparent hover:bg-slate-100 rounded-full transition-all duration-300 z-50"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="px-6 md:px-20 py-12 md:py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold ${theme.brand.accent}`}>
              Service Management
            </span>
            <h2 className={`text-3xl md:text-5xl font-bold mt-2 ${theme.text.brand} tracking-tight`}>
              Change Your Plan
            </h2>
            <p className={`mt-3 text-sm md:text-lg leading-relaxed text-secondary max-w-2xl mx-auto`}>
              Select the plan that best fits your current brand requirements and future ambitions.
            </p>
          </div>

          {/* Plan Grid: Vertical on mobile, Horizontal on LG */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {plans.map((plan, index) => {
              const isCurrent = currentPlanName === plan.name;

              return (
                <div 
                  key={plan.name}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                  className={`
                    relative p-8 rounded-2xl flex flex-col border transition-all duration-500 group
                    animate-in fade-in zoom-in-95 slide-in-from-bottom-8 fill-mode-both
                    ${plan.featured 
                      ? "bg-[#031933] text-white border-primary/50 shadow-2xl py-12 lg:scale-105 z-10" 
                      : "bg-white text-slate-900 border-slate-100 shadow-sm"
                    }
                  `}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-[9px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg z-20 whitespace-nowrap text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-col gap-4 mb-8 relative z-10">
                    <div>
                      <h4 className="text-xl uppercase font-bold tracking-tight">
                        {plan.name}
                      </h4>
                      <p className={`text-[13px] mt-1 ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-[12px] opacity-60 font-medium tracking-wider uppercase">/ month</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1 relative z-10">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[14px]">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-blue-400" : "text-primary "}`} />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => onSelectPlan(plan)}
                    disabled={isCurrent}
                    className={`
                      relative z-10 w-full py-4 rounded-sm font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95
                      ${isCurrent 
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                        : plan.featured 
                          ? "bg-white text-primary hover:bg-tertiary shadow-xl" 
                          : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
                      }
                    `}
                  >
                    {isCurrent ? "Current Plan" : "Select Plan"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-slate-50/80 backdrop-blur-sm border-t border-slate-100 px-6 md:px-12 py-5 flex justify-center items-center text-[10px] md:text-[11px] text-slate-400 font-bold tracking-widest uppercase shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Changes effective next billing cycle
          </div>
        </div>
      </div>
    </div>
  );
}