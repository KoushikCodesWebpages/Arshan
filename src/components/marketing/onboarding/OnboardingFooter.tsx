"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Loader2, Send } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { sendArshanInquiry } from "@/services/emailService";
import { OnboardingStatusModal } from "@/components/OnboardingStatusModal";

export default function OnboardingFooter({ allData }: { allData: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "limit_reached">("idle");
  const [count, setCount] = useState(0);

  // Persistence for the marketing-specific submission limit
  useEffect(() => {
    const savedCount = localStorage.getItem("arshan_marketing_limit");
    if (savedCount) setCount(parseInt(savedCount, 10));
  }, []);

  const handleFinalSubmit = async () => {
    if (count >= 5) return setStatus("limit_reached");
    if (status === "loading") return;
    
    setStatus("loading");

    // Unified ID for the single template footer
    const currentInquiryId = `MKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const marketingRows = `
          <tr>
            <td colspan="2" style="padding: 10px 0 15px 0; border-bottom: 1px solid #e2e8f0;">
              <h4 style="margin: 0; color: #0d2649; text-transform: uppercase; font-size: 13px; letter-spacing: 0.5px;">
                Marketing Onboarding
              </h4>
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding-top: 25px;">
              <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Primary Contact</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <strong style="font-size: 16px; color: #1E293B;">${allData.contact?.fullName || "N/A"}</strong>
            </td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-size: 13px; color: #94A3B8;">
              ${allData.contact?.email || "test"} | ${allData.contact?.jobTitle || "test"}
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding-top: 25px;">
              <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Social Connectivity</span>
              <div style="margin-top: 10px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 2px;">
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #1E293B;"><strong style="color: #0d2649;">LinkedIn:</strong> ${allData.socials?.linkedin || "test"}</p>
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #1E293B;"><strong style="color: #0d2649;">Instagram:</strong> ${allData.socials?.instagram || "test"}</p>
                <p style="margin: 0; font-size: 14px; color: #1E293B;"><strong style="color: #0d2649;">X (Twitter):</strong> ${allData.socials?.twitter || "test"}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding-top: 25px;">
              <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Service Infrastructure</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #1E293B;">
              ${allData.plan?.name || "Starter"} Arshan Plan
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-size: 16px; color: #1E293B; font-weight: 800;">
              ${allData.plan?.price || "250"}€/mo
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding-top: 25px;">
              <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Brand Identity</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #1E293B; font-weight: 600;">
              ${allData.brand?.brandName || "test"}
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-size: 13px; color: #94A3B8;">
              ${allData.brand?.websiteUrl || "test"}
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding-top: 25px;">
              <span style="font-size: 11px; font-weight: 800; color: #a48626; text-transform: uppercase; letter-spacing: 1px;">Strategic Goals</span>
              <div style="margin-top: 10px; font-size: 14px; color: #0d2649;">
                <strong>Objective:</strong> ${allData.goals?.primaryGoal || "Brand Awareness"}
              </div>
              <div style="margin-top: 8px; background: #f8fafc; padding: 15px; border-left: 3px solid #0d2649; color: #64748B; font-style: italic; font-size: 14px;">
                "${allData.goals?.brandVoice || "test"}"
              </div>
            </td>
          </tr>
        `;

    // Transmit via Unified Service
    const result = await sendArshanInquiry({ 
      html_content: marketingRows,
      selected_plan: allData.plan?.name || "Marketing Strategy", 
      fullName: allData.contact?.fullName || "Marketing Lead", 
      subject: `[STRATEGY] ${allData.brand?.brandName || "New Partner"}`,
      inquiry_id: currentInquiryId
    }, "Marketing");

    if (result.success) {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem("arshan_marketing_limit", newCount.toString());
      localStorage.removeItem("arshan_marketing_draft"); 
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <footer className="pt-12 mt-12 border-t border-slate-200">
        <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Institutional Compliance Notice */}
          <FadeItem>
            <div className="flex items-center gap-2.5 group">
              <div className="bg-slate-100 p-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#a48626]" />
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-tight leading-relaxed">
                Brand assets and data managed by{" "}
                <span className="text-slate-500 font-semibold underline underline-offset-4 decoration-slate-200">
                  Arshan Business Infrastructure.
                </span>
              </p>
            </div>
          </FadeItem>

          {/* Execution Trigger */}
          <FadeItem className="w-full md:w-auto">
            <button
              type="button"
              disabled={status === "loading" || count >= 5}
              onClick={handleFinalSubmit}
              className={`
                w-full md:w-auto px-14 py-4 rounded-sm flex items-center justify-center gap-3
                text-[10px] font-bold tracking-[0.25em] uppercase transition-all active:scale-[0.98]
                ${count >= 5 
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                  : "bg-[#0d2649] text-white hover:bg-[#16335a] shadow-lg shadow-blue-900/10"}
              `}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Synchronizing...
                </>
              ) : count >= 10 ? (
                "Limit Reached"
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 opacity-50" />
                  Initiate Marketing Deployment
                </>
              )}
            </button>
          </FadeItem>
        </FadeInStagger>
      </footer>

      {/* Logic-Gated Status Modal */}
      <OnboardingStatusModal 
        isOpen={status !== "idle" && status !== "loading"} 
        status={status === "loading" ? "idle" : status} 
        context="Marketing"
        onClose={() => setStatus("idle")} 
        onRetry={handleFinalSubmit}
        submissionCount={count}
      />
    </>
  );
}