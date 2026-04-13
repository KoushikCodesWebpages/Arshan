"use client";

import React from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";

export type HRPlan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

const hrPlans: HRPlan[] = [
  {
    name: "Junior Full-time",
    price: "500",
    desc: "Entry-level administrative & operational support",
    features: ["General HR Admin", "Data Entry & Maintenance", "Basic Employee Support"],
    featured: false,
  },
  {
    name: "Mid-Senior Full-time",
    price: "2500",
    desc: "Professional-grade HR management & strategy",
    features: ["Performance Management", "Recruitment Strategy", "Employee Relations", "Quarterly HR Audits"],
    featured: true,
  },
  {
    name: "Senior Full-time",
    price: "2500", // Adjusted to match your screenshot
    desc: "Strategic HR leadership & executive oversight",
    features: ["Organizational Design", "Succession Planning", "Executive Coaching", "Risk & Compliance Lead"],
    featured: false,
  },
];

interface HRPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: HRPlan) => void;
  currentPlanName: string;
}

export default function HRPlanSelectionModal({ 
  isOpen, 
  onClose, 
  onSelectPlan, 
  currentPlanName 
}: HRPlanModalProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-primary/20 backdrop-blur-md animate-in fade-in duration-500">
      
      <div className={`${theme.ui.modal} w-full max-w-7xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative`}>
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-8 p-2 hover:bg-slate-100 rounded-full transition-all duration-300 hover:rotate-90 z-20"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        <div className="px-12 md:px-20 py-10 md:py-12">
          
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
            <span className={`uppercase tracking-[0.3em] text-[9px] font-bold text-[#A48626]`}>
              HR Service Tiers
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${theme.text.brand}`}>
              Change Your Plan
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                Select the HR staffing level that best fits your organizational needs and growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {hrPlans.map((plan, index) => {
              const isCurrent = currentPlanName === plan.name;

              return (
                <div 
                  key={plan.name}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  className={`
                    relative p-8 rounded-2xl flex flex-col border transition-all duration-500 group
                    animate-in fade-in zoom-in-95 slide-in-from-bottom-8 fill-mode-both
                    ${plan.featured 
                      ? "bg-[#031933] text-white border-primary/50 shadow-2xl lg:scale-105 z-10 py-10 hover:scale-[1.08]" 
                      : "bg-white text-slate-900 border-slate-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2"
                    }
                  `}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#A48626] text-[8px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20">
                      Most Popular
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-6">
                    <div className="max-w-[160px]">
                      <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{plan.name}</h4>
                      <p className={`text-[10px] leading-relaxed mt-1 ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.desc}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold">€{plan.price}</span>
                      <span className="text-[10px] opacity-60 ml-0.5">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat, i) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 40}ms` }}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${plan.featured ? "text-blue-400" : "text-primary opacity-60"}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => onSelectPlan(plan)}
                    disabled={isCurrent}
                    className={`
                      w-full py-3 rounded-sm font-bold text-xs transition-all duration-300 active:scale-95
                      ${isCurrent 
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                        : plan.featured 
                          ? "bg-white text-primary hover:bg-[#FCD34D]" 
                          : "border border-primary/20 text-primary hover:bg-slate-50"
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

        {/* Footer */}
        <div className="bg-slate-50/50 border-t border-slate-100 px-12 py-5 flex justify-between items-center text-[9px] text-slate-400 font-bold tracking-widest uppercase animate-in slide-in-from-bottom-full duration-1000 delay-700 fill-mode-both">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Changes effective next billing cycle
          </div>
          <div className="flex gap-8">
            <span className="hover:text-primary cursor-pointer transition-colors">Support</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}