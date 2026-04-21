"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

const terms = [
  { n: "1", t: "Scope of Application", c: "These general terms and conditions apply to all business relations between Arshan Business Services GmbH and its customers." },
  { n: "2", t: "Service Description", c: "Arshan provides business consulting and digital infrastructure services as described in respective contracts." },
  { n: "3", t: "Payment Terms", c: "Unless otherwise agreed, invoices are due for payment without deduction within 14 days of the invoice date." },
  { n: "4", t: "Liability", c: "We are liable for damages resulting from injury to life, body, or health according to statutory provisions." },
];

export default function TermsContent() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header with Gold Accent */}
      <FadeItem className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="w-1 md:w-1.5 h-8 md:h-10 bg-tertiary rounded-full shrink-0" />
        <h2 className={`text-2xl md:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
          Terms and Conditions
        </h2>
      </FadeItem>

      {/* Terms Grid/List */}
      <div className="space-y-8 md:space-y-10">
        {terms.map((item) => (
          <FadeItem key={item.n} className="space-y-3 md:space-y-4 max-w-4xl">
            <h3 className={`text-lg md:text-xl font-bold tracking-tight ${theme.text.brand}`}>
              <span className="text-tertiary mr-2">{item.n}.</span>
              {item.t}
            </h3>
            <p className={`text-[14px] md:text-base font-light leading-relaxed ${theme.text.muted}`}>
              {item.c}
            </p>
          </FadeItem>
        ))}
      </div>
    </div>
  );
}