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
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 🔥 Scroll detection logic
  React.useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update when section is clearly in view
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", 
        // 👆 triggers when section is near middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <aside className="w-full lg:w-64 lg:sticky lg:top-32 h-fit self-start">
      <div className="py-4 lg:py-0">
        <h3 className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
          Legal Navigation
        </h3>

        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative text-left text-[13px] lg:text-sm font-bold transition-all duration-300 whitespace-nowrap
                  px-4 py-2 lg:py-3 lg:rounded-lg
                  ${
                    isActive
                      ? `${theme.text.brand} bg-slate-100`
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-1 bg-tertiary rounded-full" />
                )}

                <span className="lg:pl-3">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}