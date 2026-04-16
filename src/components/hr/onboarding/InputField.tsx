"use client";

import React from "react";

interface Props {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  icon?: React.ReactNode;
}

export default function InputField({ 
  label, 
  placeholder, 
  type = "text", 
  required, 
  value, 
  onChange,
  name,
  icon
}: Props) {
  return (
    <div className="w-full group">
      {/* LABEL */}
      <label className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-3 transition-colors duration-500 group-focus-within:text-[#0d2649]">
        {icon && <span className="opacity-70 group-focus-within:opacity-100 transition-opacity">{icon}</span>}
        {label} {required && <span className="text-[#a48626] ml-0.5">*</span>}
      </label>
      
      <div className="relative">
        <input 
          name={name}
          type={type} 
          value={value}
          onChange={onChange}
          placeholder={placeholder} 
          required={required}
          className={`
            w-full py-3.5 px-4
            /* Changed from bg-slate-200 to a lighter slate for better text contrast */
            bg-slate-100/80 
            border border-slate-100/50 
            rounded-sm
            /* Typed text color */
            text-[13px] text-slate-700 font-medium
            /* Placeholder specific color */
            placeholder:text-slate-400
            outline-none
            transition-all duration-500
            
            /* Hover State */
            hover:bg-slate-100 
            hover:border-slate-300
            
            /* Focus State */
            focus:bg-white 
            focus:border-slate-300/50
            focus:text-[#0d2649]
            focus:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)]
          `}
        />

        {/* CINEMATIC BORDER */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#0d2649] transition-all duration-700 ease-in-out group-focus-within:w-full" />
      </div>
    </div>
  );
}