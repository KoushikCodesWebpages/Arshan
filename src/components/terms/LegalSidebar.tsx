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
      // Adjusted offset to account for any sticky headers or spacing
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    /* Container: 
       - Fixed width on desktop (w-64)
       - Sticky positioning (top-32) to follow the user down the page
    */
    <aside className="w-full md:w-64 md:sticky md:top-32 h-fit">
      <div className="py-4 md:py-0">
        <h3 className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
          Legal Navigation
        </h3>
        
        <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative text-left text-[13px] md:text-sm font-bold transition-all duration-300 whitespace-nowrap
                px-4 py-2 md:py-3 md:rounded-lg
                ${active === item.id 
                  ? `${theme.text.brand} bg-slate-100` 
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              {/* Desktop Active Left Indicator (Optional) */}
              {active === item.id && (
                <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-1 bg-tertiary rounded-full" />
              )}
              
              <span className="md:pl-2">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}