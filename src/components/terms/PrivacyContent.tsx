"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

const privacySections = [
  {
    title: "Information Collection",
    content: "We collect data when you use our services or contact us. This includes technical data like your IP address and personal data like your name and contact information provided during registration.",
  },
  {
    title: "Usage of Data",
    content: "Your data is used solely for providing our services, processing payments, and communicating essential service updates. We do not sell your personal data to third parties.",
  },
  {
    title: "Security Measures",
    content: "We implement state-of-the-art technical and organizational security measures to protect your data against unauthorized access, loss, or manipulation.",
  },
];

export default function PrivacyContent() {
  return (
    <div className="space-y-12">
      {/* Header with Gold Accent */}
      <FadeItem className="flex items-center gap-6">
        <div className="w-1.5 h-10 bg-tertiary rounded-full" />
        <h2 className={`text-4xl font-bold tracking-tight ${theme.text.brand}`}>
          Privacy Policy
        </h2>
      </FadeItem>

      {/* Lead Statement */}
      <FadeItem>
        <p className={`text-base font-light leading-relaxed ${theme.text.muted} max-w-4xl`}>
          Arshan Business Services GmbH takes the protection of your personal data very seriously. 
          We treat your personal data confidentially and in accordance with the statutory 
          data protection regulations (GDPR).
        </p>
      </FadeItem>

      {/* Technical Clauses Card */}
      <FadeItem>
        <div className="bg-white border border-slate-100 rounded-xl p-10 shadow-sm space-y-10 max-w-4xl">
          {privacySections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className={`text-sm font-bold uppercase tracking-widest ${theme.text.brand}`}>
                {section.title}
              </h3>
              <p className={`text-sm font-light leading-relaxed ${theme.text.muted}`}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </FadeItem>
    </div>
  );
}