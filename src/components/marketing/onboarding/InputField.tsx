"use client";
import React from "react";
import { theme } from "@/lib/theme";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  icon?: React.ReactNode; // Added Icon Prop
}

export default function InputField({ 
  name, 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = "text", 
  required,
  icon
}: Props) {
  return (
    <div className="mb-6 last:mb-0">
      {/* Label with optional Icon */}
      <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
        {icon && <span className="text-[#0d2649]">{icon}</span>}
        {label} {required && <span className="text-danger">*</span>}
      </label>
      
      <input 
        name={name}
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        className={`w-full ${theme.ui.input} py-4 px-5 bg-slate-100 border-none focus:bg-white transition-all outline-none rounded-sm`}
      />
    </div>
  );
}