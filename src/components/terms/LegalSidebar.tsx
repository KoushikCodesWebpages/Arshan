"use client";

import React from "react";
import { theme } from "@/lib/theme";

const navItems = [
  { name: "Impressum", id: "impressum" },
  { name: "Terms and Conditions", id: "terms" },
  { name: "Privacy Policy", id: "privacy" },
];

export default function LegalSidebar() {
  const [active, setActive] = React.useState("impressum");

  const scrollToSection = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      // Adjusted offset to account for the sticky top-bar height
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    /* Sticky Top-Bar:
       - Stays pinned at the top on desktop (md:sticky)
       - Adds a blur effect for better legibility when scrolling
    */
    <div className="w-full bg-white/80 backdrop-blur-md md:sticky md:top-24 z-30 md:border-b md:border-slate-100">
      <div className="py-4 md:py-6">
        {/* Subtle label for desktop structure */}
        <h3 className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
          Legal Navigation
        </h3>
        
        {/* Navigation Layout:
            - Mobile: Scrollable pills (p-2/rounded-full)
            - Desktop: Clean horizontal links with underline accent
        */}
        <nav className="flex flex-row items-center gap-2 md:gap-10 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative text-left text-[13px] md:text-sm font-bold transition-all duration-300 whitespace-nowrap
                px-4 py-2 md:px-0 md:py-3
                ${active === item.id 
                  ? `${theme.text.brand} bg-slate-100 md:bg-transparent` 
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50 md:hover:bg-transparent"
                }
              `}
            >
              {item.name}
              
              {/* Desktop Active Underline */}
              {active === item.id && (
                <div className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-tertiary rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}