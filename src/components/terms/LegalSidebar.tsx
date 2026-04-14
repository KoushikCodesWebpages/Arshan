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
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-full">
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Legal Navigation
          </h3>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-medium transition-all duration-300 ${
                  active === item.id 
                    ? theme.text.brand 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}