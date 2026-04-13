"use client";
import { theme } from "@/lib/theme";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mb-16">
      <div className="lg:w-1/3">
        <h3 className={`text-xl font-bold ${theme.text.brand} mb-2`}>{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className="lg:w-2/3 w-full bg-white rounded-xl p-8 shadow-sm border border-slate-100">
        {children}
      </div>
    </div>
  );
}