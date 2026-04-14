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
    <div className="space-y-10">
      <FadeItem className="flex items-center gap-6 mb-12">
        <div className="w-1.5 h-10 bg-tertiary rounded-full" />
        <h2 className={`text-4xl font-bold tracking-tight ${theme.text.brand}`}>
          Terms and Conditions
        </h2>
      </FadeItem>

      {terms.map((item) => (
        <FadeItem key={item.n} className="space-y-4 max-w-4xl">
          <h3 className={`text-xl font-bold tracking-tight ${theme.text.brand}`}>
            {item.n}. {item.t}
          </h3>
          <p className={`text-base font-light leading-relaxed ${theme.text.muted}`}>
            {item.c}
          </p>
        </FadeItem>
      ))}
    </div>
  );
}