"use client";
import { theme } from "@/lib/theme";

interface Props {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export default function InputField({ label, placeholder, type = "text", required }: Props) {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-2">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className={`w-full ${theme.ui.input} py-4 bg-slate-200 border-slate-200`}
      />
    </div>
  );
}