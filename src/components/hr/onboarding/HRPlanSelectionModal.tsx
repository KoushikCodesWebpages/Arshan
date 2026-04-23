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
      features: ["Ideal for high-volume execution, data processing, and foundational technical tasks.", "Data Entry & Maintenance", "Basic Employee Support"],
      featured: false,
    },
    {
      name: "Mid-Senior Full-time",
      price: "999",
      subtitle: "Professional-grade HR management & strategy",
      desc: "Professional-grade HR management & strategy",
      features: ["Performance Management", "Recruitment Strategy", "Employee Relations", "Quarterly HR Audits"],
      featured: true,
    },
    {
      name: "Senior Full-time",
      price: "2199",
      subtitle: "Strategic HR leadership & executive oversight",
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
      <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500">
        
        {/* Main Modal Container 
            Added: max-h-[95vh] and overflow-y-auto for mobile reachability
        */}
        <div className={`bg-white rounded-brand w-full max-w-7xl max-h-[95vh] overflow-y-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative`}>
          
          {/* Animated Close Button - Slightly smaller on mobile */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-neutral rounded-full transition-all duration-300 hover:rotate-90 z-20 animate-in fade-in zoom-in delay-500"
          >
            <X className="w-5 h-5 text-secondary" />
          </button>

          <div className="px-6 py-10 md:px-10 md:py-12">
            
            {/* Header Animation */}
            <div className="text-center mb-8 md:mb-10 animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold text-tertiary">
                HR Service Tiers
              </span>
              <h2 className={`text-2xl md:text-4xl font-bold mt-1 ${theme.text.brand}`}>
                Change your Plan
              </h2>
              <p className={`text-xs md:text-sm mt-2 max-w-xl mx-auto ${theme.text.muted}`}>
                  Select the HR staffing level that best fits your organizational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
              {hrPlans.map((plan, index) => {
                const isCurrent = currentPlanName === plan.name;

                return (
                  <div 
                    key={plan.name}
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                    className={`
                      relative p-8 md:p-10 rounded-lg flex flex-col border transition-all duration-700 group
                      animate-in fade-in zoom-in-95 slide-in-from-bottom-8 fill-mode-both
                      ${plan.featured 
                        ? `${theme.brand.primary} text-white border-transparent shadow-2xl lg:scale-[1.04] z-10 lg:hover:scale-[1.07]` 
                        : "bg-white text-foreground border-border-light hover:border-tertiary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] md:hover:-translate-y-2"
                      }
                    `}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(164,134,38,0.1),transparent_70%)]" />

                    {plan.featured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-2xl shadow-lg z-20 whitespace-nowrap">
                        Most Selected
                      </div>
                    )}

                    {/* HEADER SECTION */}
                    <div className="flex flex-col gap-4 md:gap-5 mb-8 relative z-10">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-tertiary transition-colors duration-300">
                          {plan.name}
                        </h4>
                        <p className={`text-[12px] md:text-[13px] leading-relaxed mt-1 italic font-medium ${plan.featured ? "text-white/70" : "text-secondary"}`}>
                          {plan.subtitle}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl md:text-3xl font-bold">€{plan.price}</span>
                        <span className="text-[10px] md:text-[11px] font-bold opacity-60 tracking-wider uppercase">/ month</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1 relative z-10">
                      {plan.features.map((feat, i) => (
                        <li 
                          key={feat} 
                          className="flex items-start gap-3 text-[13px] md:text-[14px] leading-snug opacity-90 lg:group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 40}ms` }}
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-tertiary" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => onSelectPlan(plan)}
                      disabled={isCurrent}
                      className={`
                        relative z-10 w-full py-3 md:py-3 rounded-2xl font-bold text-[11px] md:text-[12px] uppercase tracking-widest transition-all duration-300 active:scale-95
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

          {/* Footer Bar */}
          <div className="bg-neutral border-t border-border-light px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] md:text-[11px] text-secondary font-bold tracking-widest uppercase animate-in slide-in-from-bottom-full duration-1000 delay-700 fill-mode-both">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 md:w-4.5 md:h-4.5 text-tertiary" />
              Changes effective next billing cycle
            </div>
          </div>
        </div>
      </div>
    );
  }