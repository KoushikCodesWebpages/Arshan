"use client";

import React from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";

export type HRPlan = {
  name: string;
  price: string;
  subtitle?: string; 
  desc: string;
  features: string[];
  featured?: boolean;
};

const hrPlans: HRPlan[] = [
  {
    name: "Junior Full-time",
    price: "500",
    subtitle: "Entry Level Support",
    desc: "Entry-level administrative & operational support",
    features: ["General HR Admin", "Data Entry & Maintenance", "Basic Employee Support"],
    featured: false,
  },
  {
    name: "Mid-Senior Full-time",
    price: "999",
    subtitle: "Institutional Level",
    desc: "Professional-grade HR management & strategy",
    features: ["Performance Management", "Recruitment Strategy", "Employee Relations", "Quarterly HR Audits"],
    featured: true,
  },
  {
    name: "Senior Full-time",
    price: "2199",
    subtitle: "Executive Oversight",
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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500">
      
      {/* Main Modal Container with Smooth Entry Animation */}
      <div className={`bg-white rounded-brand w-full max-w-6xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative`}>
        
        {/* Animated Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 hover:bg-neutral rounded-full transition-all duration-300 hover:rotate-90 z-20 animate-in fade-in zoom-in delay-500"
        >
          <X className="w-5 h-5 text-secondary" />
        </button>

        <div className="px-10 py-12">
          
          {/* Header Animation */}
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
            <span className="uppercase tracking-[0.3em] text-[9px] font-bold text-tertiary">
              HR Service Tiers
            </span>
            <h2 className={`text-3xl font-bold mt-1 ${theme.text.brand}`}>
              Update Selection
            </h2>
            <p className={`text-xs mt-2 max-w-xl mx-auto ${theme.text.muted}`}>
                Select the HR staffing level that best fits your organizational needs and growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {hrPlans.map((plan, index) => {
              const isCurrent = currentPlanName === plan.name;

              return (
                <div 
                  key={plan.name}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  className={`
                    relative p-8 rounded-brand flex flex-col border transition-all duration-700 group
                    animate-in fade-in zoom-in-95 slide-in-from-bottom-8 fill-mode-both
                    ${plan.featured 
                      ? `${theme.brand.primary} text-white border-transparent shadow-2xl lg:scale-[1.03] z-10 hover:scale-[1.06]` 
                      : "bg-white text-foreground border-border-light hover:border-tertiary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
                    }
                  `}
                >
                  {/* Subtle Internal Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(164,134,38,0.08),transparent_70%)]" />

                  {plan.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-white text-[8px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-brand shadow-lg z-20">
                      Most Selected
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="max-w-40">
                      <h4 className="text-base font-bold tracking-tight group-hover:text-tertiary transition-colors duration-300">
                        {plan.name.toUpperCase()}
                      </h4>
                      <p className={`text-[10px] leading-relaxed mt-1 italic font-medium ${plan.featured ? "text-white/60" : "text-secondary"}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold">€{plan.price}</span>
                      <span className="text-[10px] opacity-60 ml-0.5">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 relative z-10">
                    {plan.features.map((feat, i) => (
                      <li 
                        key={feat} 
                        className="flex items-center gap-2 text-[12px] opacity-90 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${plan.featured ? "text-tertiary" : "text-tertiary opacity-60"}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => onSelectPlan(plan)}
                    disabled={isCurrent}
                    className={`
                      relative z-10 w-full py-4 rounded-brand font-bold text-[10px] uppercase tracking-widest transition-all duration-300 active:scale-95
                      ${isCurrent 
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-border-light" 
                        : plan.featured 
                          ? "bg-white text-primary hover:bg-tertiary hover:text-white shadow-xl" 
                          : `${theme.buttons.primary} hover:bg-tertiary hover:text-white`
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

        {/* Footer Bar with Slide-up Animation */}
        <div className="bg-neutral border-t border-border-light px-10 py-4 flex justify-between items-center text-[9px] text-secondary font-bold tracking-widest uppercase animate-in slide-in-from-bottom-full duration-1000 delay-700 fill-mode-both">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
            Changes effective next billing cycle
          </div>
          <div className="flex gap-8 relative z-10">
            <span className="hover:text-tertiary cursor-pointer transition-colors">Support Desk</span>
            <span className="hover:text-tertiary cursor-pointer transition-colors">Institutional Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}