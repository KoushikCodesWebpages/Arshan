"use client";

import React from "react";
import { Calendar, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function ContactStrategySection() {
  return (
    <section >
      <div className="pb-40 w-full mx-auto px-28">
        {/* Main Grid: items-stretch keeps both columns height-aligned if needed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: 40% (approx 5/12 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeInStagger className="space-y-6">
              
              {/* Dark Strategy Card */}
              <FadeItem>
                <div className="bg-[#1A365D] rounded-xl p-8 text-white relative overflow-hidden group min-h-80 flex flex-col justify-center">
                  {/* Subtle Background Pattern Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full border border-white/10" />
                  <div className="absolute bottom-8 right-12 w-8 h-8 bg-white/5 rounded-full" />
                  
                  <div className="relative z-10">
                    <Calendar className="w-10 h-10 text-tertiary mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Book a Strategy Session</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-70">
                      Direct access to a partner's calendar for a 30-minute high-level assessment.
                    </p>
                    <button className="flex items-center gap-2 bg-tertiary text-white px-7 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 w-fit">
                      Reserve Time <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </FadeItem>

              {/* Priority Support Card */}
              <FadeItem>
                <div className="bg-white/50 border border-slate-100 rounded-xl p-8 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Mail className={`w-5 h-5 ${theme.text.brand}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      Priority Support
                    </span>
                    <p className="text-xs text-slate-500 mb-1">General Inquiries</p>
                    <p className={`text-sm font-bold ${theme.text.brand}`}>Inquiries@arshan.de</p>
                  </div>
                </div>
              </FadeItem>

            </FadeInStagger>
          </div>

          {/* RIGHT SIDEBAR: 60% (approx 7/12 columns) */}
          <div className="lg:col-span-7">
            <FadeInStagger>
              <FadeItem>
                <div className="bg-white rounded-xl p-10 shadow-sm border border-slate-100 h-full">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Work Email</label>
                        <input 
                          type="email" 
                          placeholder="john@company.com"
                          className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Strategic Interest</label>
                      <div className="relative">
                        <select className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-slate-200 transition-all outline-none">
                          <option>Finance & Tax Advisory</option>
                          <option>Human Capital Architecture</option>
                          <option>Operational Excellence</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Project Scope</label>
                      <textarea 
                        rows={4}
                        placeholder="Briefly describe your business goals..."
                        className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-200 transition-all outline-none resize-none"
                      />
                    </div>

                    <button className="w-full py-5 rounded-lg bg-[#001F3F] text-white font-bold text-sm tracking-wider hover:bg-black transition-all active:scale-[0.99] shadow-lg shadow-blue-900/10">
                      Submit Inquiry
                    </button>

                    <p className="text-center text-[10px] text-slate-400 font-medium pt-2">
                      By submitting, you agree to our privacy policy and terms of engagement.
                    </p>
                  </form>
                </div>
              </FadeItem>
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}