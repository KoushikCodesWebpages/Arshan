"use client";
import { useState } from "react";

const goals = ["Brand Awareness", "Lead Generation", "Thought Leadership", "Community Growth"];

export default function GoalSelector() {
  const [selected, setSelected] = useState("Thought Leadership");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {goals.map((goal) => (
        <button
          key={goal}
          onClick={() => setSelected(goal)}
          className={`flex items-center gap-3 p-4 rounded-lg border transition-all text-sm font-medium ${
            selected === goal ? "border-primary bg-primary/5 text-primary" : "border-slate-100 bg-slate-50/30 text-slate-600"
          }`}
        >
          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected === goal ? "border-primary" : "border-slate-300"}`}>
            {selected === goal && <div className="w-2 h-2 rounded-full bg-primary" />}
          </div>
          {goal}
        </button>
      ))}
    </div>
  );
}