"use client";

import React, { useState } from "react";
import { Calendar, Mail, ChevronDown, ArrowRight, Loader2 } from "lucide-react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { sendArshanInquiry } from "@/services/emailService";
import { OnboardingStatusModal } from "@/components/OnboardingStatusModal";

export default function ContactStrategySection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interest: "Finance & Tax Advisory",
    scope: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    // Constructing the Institutional Table for the Strategic Inquiry
    const strategicRows = `
      <tr>
        <td colspan="2" style="padding: 10px 0 15px 0; border-bottom: 1px solid #e2e8f0;">
          <h4 style="margin: 0; color: #0d2649; text-transform: uppercase; font-size: 13px; letter-spacing: 0.5px;">
            Contact Us
          </h4>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top: 25px;">
          <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Contact Details</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
          <strong style="font-size: 16px; color: #1E293B;">${formData.fullName}</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-size: 14px; color: #64748B;">
          ${formData.email}
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top: 25px;">
          <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Inquiry Focus</span>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0d2649; font-size: 14px; color: #1E293B; margin-top: 10px;">
          <strong style="color: #0d2649;">Domain:</strong> ${formData.interest}
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top: 25px;">
          <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Project Scope</span>
          <div style="margin-top: 10px; background: #f8fafc; padding: 15px; border-radius: 2px; color: #64748B; font-style: italic; font-size: 14px; line-height: 1.6;">
            "${formData.scope || "No specific details provided."}"
          </div>
        </td>
      </tr>
    `;

    const result = await sendArshanInquiry({
      html_content: strategicRows,
      fullName: formData.fullName,
      subject: `[INQUIRY] ${formData.fullName} - ${formData.interest}`,
      selected_plan: "Contacting Support",
      inquiry_id: `INQ-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
    }, "Strategy");

    if (result.success) {
      setStatus("success");
      setFormData({ fullName: "", email: "", interest: "Finance & Tax Advisory", scope: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="bg-background overflow-hidden">
      {/* Container: px-6 (Mobile) -> md:px-28 (Desktop) */}
      <div className="pb-24 md:pb-40 w-full mx-auto px-6 md:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* LEFT SIDEBAR (Service Highlight Cards) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            <FadeInStagger className="space-y-6">
              <FadeItem>
                <div className="bg-[#1A365D] rounded-xl p-8 md:p-10 text-white relative overflow-hidden group min-h-75 md:min-h-50 flex flex-col justify-center">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full border border-white/10" />
                  <div className="relative z-10">
                    <Calendar className="w-5 h-5 text-tertiary mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Book a Strategy Session</h3>
                    <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-sm">
                      Direct access to a partner's calendar for a 30-minute high-level assessment.
                    </p>
                    <button className="flex items-center gap-2 bg-tertiary text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 w-full sm:w-fit justify-center">
                      Reserve Time <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </FadeItem>

              <FadeItem>
                <div className="bg-white/50 border border-slate-100 rounded-xl p-8 md:p-10 flex flex-col sm:flex-row items-start gap-5">
                  <div className="p-4 bg-white rounded-lg shadow-sm shrink-0">
                    <Mail className={`w-6 h-6 ${theme.text.brand}`} />
                  </div>
                  <div>
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      Priority Support
                    </span>
                    <p className="text-[11px] md:text-xs text-slate-500 mb-1">General Inquiries</p>
                    <p className={`text-base md:text-sm font-bold ${theme.text.brand}`}>Inquiries@arshan.de</p>
                  </div>
                </div>
              </FadeItem>
            </FadeInStagger>
          </div>

          {/* FORM SECTION */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeInStagger>
              <FadeItem>
                <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-slate-100 h-full">
                  <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="John Doe"
                          className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-[13px] md:text-[14px] outline-none focus:ring-2 focus:ring-slate-200 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500">Work Email</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@company.com"
                          className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-[13px] md:text-[14px] outline-none focus:ring-2 focus:ring-slate-200 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500">Strategic Interest</label>
                      <div className="relative">
                        <select 
                          value={formData.interest}
                          onChange={(e) => setFormData({...formData, interest: e.target.value})}
                          className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-[13px] md:text-[14px] appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                        >
                          <option>Finance & Tax Advisory</option>
                          <option>Human Capital Architecture</option>
                          <option>Operational Excellence</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500">Project Scope</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.scope}
                        onChange={(e) => setFormData({...formData, scope: e.target.value})}
                        placeholder="Briefly describe your business goals..."
                        className="w-full bg-[#F1F5F9] border-none rounded-lg p-4 text-[13px] md:text-[14px] outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-lg bg-[#001F3F] text-white font-bold text-sm tracking-wider hover:bg-black transition-all active:scale-[0.99] disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
              </FadeItem>
            </FadeInStagger>
          </div>
        </div>
      </div>

      <OnboardingStatusModal 
        isOpen={status === "success" || status === "error"}
        status={status}
        onClose={() => setStatus("idle")}
        context="Inquiry"
      />
    </section>
  );
}