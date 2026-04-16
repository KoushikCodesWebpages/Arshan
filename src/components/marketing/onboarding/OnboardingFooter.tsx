"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { sendArshanInquiry } from "@/services/emailService";
import { OnboardingStatusModal } from "@/components/OnboardingStatusModal";

export default function OnboardingFooter({ allData }: { allData: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "limit_reached">("idle");
  const [count, setCount] = useState(0);

  // Persistence for the 5-email security limit
  useEffect(() => {
    const savedCount = localStorage.getItem("arshan_submission_limit");
    if (savedCount) setCount(parseInt(savedCount, 10));
  }, []);

  const handleFinalSubmit = async () => {
    if (count >= 5) return setStatus("limit_reached");
    if (status === "submitting") return;
    
    setStatus("submitting");

    // Comprehensive HTML Payload for the Strategy Team
    const formattedRows = `
      <tr><td colspan="2" style="padding-top:20px; font-size:11px; font-weight:800; color:#a48626; letter-spacing:1px; text-transform:uppercase;">Primary Contact</td></tr>
      <tr>
        <td style="padding:10px 0; font-size:14px; color:#1E293B; border-bottom:1px solid #f1f5f9; font-weight:600;">${allData.contact?.fullName || "N/A"}</td>
        <td style="padding:10px 0; font-size:13px; color:#64748B; border-bottom:1px solid #f1f5f9; text-align:right;">${allData.contact?.email || "N/A"} | ${allData.contact?.jobTitle || "N/A"}</td>
      </tr>

      <tr><td colspan="2" style="padding-top:25px; font-size:11px; font-weight:800; color:#a48626; letter-spacing:1px; text-transform:uppercase;">Social Connectivity</td></tr>
      <tr>
        <td colspan="2" style="padding:12px; background:#f8fafc; border-radius:2px; font-size:13px; color:#1E293B; line-height:1.6; border:1px solid #e2e8f0;">
          <b>LinkedIn:</b> ${allData.socials?.linkedin || "Not Provided"}<br/>
          <b>Instagram:</b> ${allData.socials?.instagram || "Not Provided"}<br/>
          <b>X (Twitter):</b> ${allData.socials?.twitter || "Not Provided"}
        </td>
      </tr>

      <tr><td colspan="2" style="padding-top:25px; font-size:11px; font-weight:800; color:#a48626; letter-spacing:1px; text-transform:uppercase;">Service Infrastructure</td></tr>
      <tr>
        <td style="padding:10px 0; font-size:14px; color:#1E293B; border-bottom:1px solid #f1f5f9;">${allData.plan?.name || "Standard"} Arshan Plan</td>
        <td style="padding:10px 0; font-size:14px; color:#0d2649; border-bottom:1px solid #f1f5f9; text-align:right; font-weight:bold;">${allData.plan?.price || "—"}€/mo</td>
      </tr>

      <tr><td colspan="2" style="padding-top:25px; font-size:11px; font-weight:800; color:#a48626; letter-spacing:1px; text-transform:uppercase;">Brand Identity</td></tr>
      <tr>
        <td style="padding:10px 0; font-size:14px; color:#1E293B; border-bottom:1px solid #f1f5f9;">${allData.brand?.brandName || "N/A"}</td>
        <td style="padding:10px 0; font-size:13px; color:#64748B; border-bottom:1px solid #f1f5f9; text-align:right;">${allData.brand?.websiteUrl || "No URL Provided"}</td>
      </tr>

      <tr><td colspan="2" style="padding-top:25px; font-size:11px; font-weight:800; color:#a48626; letter-spacing:1px; text-transform:uppercase;">Strategic Goals</td></tr>
      <tr>
        <td colspan="2" style="padding:12px 0; font-size:13px; color:#1E293B;">
          <div style="margin-bottom:8px;"><b>Objective:</b> ${allData.goals?.primaryGoal || "Not Specified"}</div>
          <div style="color:#64748B; font-style:italic; background:#f8fafc; padding:12px; border-left:3px solid #0d2649;">"${allData.goals?.brandVoice || "No brand voice defined."}"</div>
        </td>
      </tr>
    `;

    const result = await sendArshanInquiry({ 
      html_content: formattedRows,
      selected_plan: allData.plan?.name || "Standard", 
      fullName: allData.contact?.fullName || "New Partner", 
      subject: `[STRATEGY] ${allData.brand?.brandName || "New Inquiry"} - ${allData.plan?.name || "Onboarding"}`
    }, "Marketing");

    if (result.success) {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem("arshan_submission_limit", newCount.toString());
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
          
          {/* Encryption & Brand Notice */}
          <FadeItem>
            <div className="flex items-center gap-2.5 group">
              <div className="bg-slate-100 p-1.5 rounded-full group-hover:bg-primary/5 transition-colors">
                <ShieldCheck className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-tight leading-relaxed">
                All data is encrypted and managed by{" "}
                <span className="text-slate-500 font-semibold underline underline-offset-4 decoration-slate-200">
                  Arshan Business Infrastructure.
                </span>
              </p>
            </div>
          </FadeItem>

          {/* Action Trigger */}
          <FadeItem className="w-full md:w-auto">
            <button
              type="button"
              disabled={status === "submitting" || count >= 5}
              onClick={handleFinalSubmit}
              className={`
                w-full md:w-auto px-14 py-4 rounded-sm flex items-center justify-center gap-3
                text-[11px] font-bold tracking-[0.2em] uppercase transition-all active:scale-[0.98]
                ${count >= 5 
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                  : "bg-[#0d2649] text-white hover:bg-[#16335a] disabled:opacity-50"}
              `}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Synchronizing...
                </>
              ) : count >= 5 ? (
                "Limit Reached"
              ) : (
                "Finalize Onboarding"
              )}
            </button>
          </FadeItem>
        </FadeInStagger>
      </footer>

      {/* External Modular Status Component */}
      <OnboardingStatusModal 
        status={status === "submitting" ? "idle" : status} 
        onClose={() => setStatus("idle")} 
        onRetry={handleFinalSubmit}
        submissionCount={count}
      />
    </>
  );
}