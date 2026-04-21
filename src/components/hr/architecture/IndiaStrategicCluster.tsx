"use client";

import React from "react";
import { Network, ShieldCheck } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function IndiaStrategicCluster() {
  return (
    /* py-16 (Mobile) -> md:py-24 (PC) */
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT CONTENT: BRANDING & STEWARDSHIP */}
          <FadeItem 
            className="flex flex-col justify-between h-full bg-white border border-border-light rounded-3xl md:rounded-4xl p-8 md:p-14 shadow-sm"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Strategic Integration
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${theme.text.brand}`}>
                  India Strategic <br /> Cluster
                </h2>
                <p className={`text-[13px] md:text-[14px] leading-relaxed ${theme.text.muted} max-w-sm`}>
                  Our Indian operations leverage a sophisticated dual-entity model, 
                  ensuring global expansion is met with legal fortitude.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                {/* Foundation Block */}
                <div className="flex gap-4 md:gap-5">
                  <div className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${theme.brand.primary} text-white shadow-lg shadow-blue-900/10`}>
                    <Network className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${theme.text.brand}`}>The Etisalar Foundation</h4>
                    <p className={`text-[12px] leading-relaxed ${theme.text.muted}`}>
                      Etisalar serves as the EOR, managing the 
                      intricate complexities of Indian payroll and financial distribution.
                    </p>
                  </div>
                </div>

                {/* Stewardship Block */}
                <div className="flex gap-4 md:gap-5">
                  <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-tertiary text-white shadow-lg shadow-yellow-600/10">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${theme.text.brand}`}>The Arshan Stewardship</h4>
                    <p className={`text-[12px] leading-relaxed ${theme.text.muted}`}>
                      Arshan provides the management layer, ensuring 
                      cultural alignment and rigorous compliance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeItem>

          {/* RIGHT CONTENT: TECHNICAL ARCHITECTURE */}
          <FadeItem 
            className="flex flex-col h-full bg-white border border-border-light rounded-3xl md:rounded-4xl p-8 md:p-14 shadow-sm relative overflow-hidden"
          >
            <div className="flex-1">
              <h3 className={`text-xl md:text-2xl font-bold mb-6 tracking-tight ${theme.text.brand}`}>
                Collaborative Architecture
              </h3>
              
              <p className={`text-[13px] md:text-[14px] leading-relaxed mb-10 ${theme.text.muted}`}>
                Navigate the complexities of labor law through our specialized partnership. 
                We provide a managed synergy.
              </p>

              {/* Technical Split List: Stacks on small screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-100 pt-8 mb-10">
                {/* Etisalar List */}
                <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                  <h5 className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest ${theme.text.brand}`}>Etisalar Core</h5>
                  <ul className={`text-[12px] space-y-2 ${theme.text.muted}`}>
                    <li>• Payroll Mgmt</li>
                    <li>• Statutory Compliance</li>
                    <li>• Tax & Withholdings</li>
                    <li>• Benefits Admin</li>
                  </ul>
                </div>

                {/* Arshan List */}
                <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                  <h5 className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest ${theme.text.brand}`}>Arshan Leadership</h5>
                  <ul className={`text-[12px] space-y-2 ${theme.text.muted}`}>
                    <li>• Performance Mgmt</li>
                    <li>• Cultural Bridges</li>
                    <li>• Operational Training</li>
                    <li>• HR Resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Summary Box */}
            <div className="relative bg-[#F1F5F9]/50 rounded-xl p-5 md:p-6 overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${theme.brand.primary}`} />
              <p className={`text-[11px] md:text-[12px] leading-relaxed ${theme.text.muted}`}>
                Utilize Indian talent without a local entity. You retain strategic direction, 
                while we handle the operational machinery.
              </p>
            </div>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}