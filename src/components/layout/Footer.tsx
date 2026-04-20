"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import brand from "../../../public/brand.svg";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "EXPERTISE",
      links: [
        { name: "Social Management", path: "/marketing/#expertise" },
        { name: "Content Strategy", path: "/marketing/#expertise" },
        { name: "Account Maintenance", path: "/marketing/#expertise" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "Our Process", path: "/finance/process" },
        { name: "Privacy Policy", path: "/terms" },
        { name: "Careers", path: "/contact-us" }
      ],
    },
    {
      title: "CONTACT",
      links: [
        { name: "inquiries@arshan.de", path: "mailto:inquiries@arshan.de" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-gray-200 mt-auto font-sans">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28 pt-16 md:pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-24">
          
          {/* Brand Column: Centered on mobile */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center">
              <Image 
                src={brand} 
                alt="Arshan - Your Growth Partner" 
                width={160} 
                height={60}
                priority
                /* Fixed h-10; h-1 was too small to see */
                className="h-10 w-auto object-contain transition-opacity hover:opacity-80" 
              />
            </Link>
            <p className={`${theme.text.muted} text-[15px] md:text-md leading-relaxed max-w-xs font-medium`}>
              Professional social media management and content design for brands seeking digital authority and consistent growth.
            </p>
          </div>

          {/* Links Columns: 2 cols on small mobile, 3 on tablet+ */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4">
            {footerSections.map((section) => (
              <div key={section.title} className="text-left">
                <h3 className="text-[11px] md:text-[13px] font-bold tracking-[0.2em] text-primary mb-6 md:mb-8 uppercase opacity-80">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className={`${theme.text.muted} hover:text-primary transition-colors duration-300 text-sm md:text-[16px] font-medium`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  
                  {section.title === "CONTACT" && (
                    <div className="flex items-center space-x-5 pt-4">
                      <button className="text-primary hover:text-tertiary transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </button>
                      <button className="text-primary hover:text-tertiary transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Center text on mobile */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <p className="text-[10px] md:text-[12px] tracking-[0.15em] text-text-muted uppercase font-semibold">
            © {currentYear} ARSHAN CONSULTING GROUP. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {[
              { label: "TERMS", id: "terms" },
              { label: "POLICY", id: "privacy" },
              { label: "COMPLIANCE", id: "impressum" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={`/terms#${item.id}`} 
                className="text-[10px] md:text-[12px] tracking-[0.15em] text-text-muted hover:text-primary uppercase transition-colors duration-300 font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}