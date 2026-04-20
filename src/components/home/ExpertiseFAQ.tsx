"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "How does we handle HGB compliance?",
    answer:
      "Our finance team includes specialists in new venture building all German Commercial Code standards from day one, providing a rock-solid foundation for future audits.",
  },
  {
    question: "Is offshore talent integration difficult to manage?",
    answer:
      "Not with our system. We handle the full lifecycle of offshore talent acquisition in India, from vetting and onboarding to payroll and cultural integration, ensuring they operate as a seamless extension of your local team.",
  },
  {
    question: "What marketing services do you provide?",
    answer:
      "We offer end-to-end digital marketing, including search engine optimization (SEO), social media strategy, and premium content production. Our goal is to create a consistent brand voice across all digital touchpoints.",
  },
  {
    question: "Do you support newly established businesses?",
    answer:
      "Absolutely. We specialize in launching modern business infrastructures. Our team excels at setting up fresh cloud-based systems, allowing for fully digital operations and real-time financial transparency for ambitious new SMBs.",
  },
];

export default function ExpertiseFAQ() {
  return (
    /* py-16 (Mobile) -> md:py-20 (PC) */
    <section className="py-16 md:py-20 overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">

        {/* Header: w-full (Mobile) -> md:w-[60%] (PC) */}
        <FadeInStagger className="text-center w-full md:w-[60%] mx-auto mb-12 md:mb-16 space-y-4">
          <FadeItem>
            {/* text-3xl (Mobile) -> md:text-4xl (PC) */}
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.text.brand}`}>
              Expertise & Frequently Asked Questions
            </h2>
          </FadeItem>

          <FadeItem>
            <p className={`text-base md:text-lg ${theme.text.muted}`}>
              Providing clarity on how Arshan helps small businesses navigate the
              complexities of global operations.
            </p>
          </FadeItem>
        </FadeInStagger>

        {/* FAQ GRID: 1 column on mobile -> 2 columns on md (768px+) */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
          {faqs.map((faq, index) => (
            <FadeItem key={index}>
              <div className="group border-b border-gray-100 pb-6 md:border-none md:pb-0">
                <h3 className={`text-lg md:text-xl font-semibold mb-3 ${theme.text.main} transition-colors group-hover:text-primary`}>
                  {faq.question}
                </h3>

                <p className={`leading-relaxed text-sm md:text-lg font-medium text-secondary`}>
                  {faq.answer}
                </p>
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
        
      </div>
    </section>
  );
}