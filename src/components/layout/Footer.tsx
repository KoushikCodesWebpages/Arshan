"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import brand from "../../../public/brand.svg";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "CONTACT",
      links: [
        { name: "inquiries@arshan.de", path: "mailto:inquiries@arshan.de" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-white border-gray-200 mt-auto font-sans">
      <div className="w-full mx-auto px-6 md:px-28 pt-12 md:pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10 md:mb-16">
        
          {/* Logo and Description - Center on mobile, Left on desktop */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src={brand} 
                alt="Arshan - Your Growth Partner" 
                width={160} 
                height={60}
                priority
                className="h-10 w-auto object-contain transition-opacity hover:opacity-80" 
              />
            </Link>
            <p className={`${theme.text.muted} text-[15px] md:text-md leading-relaxed max-w-xs font-medium`}>
              We offer startups and SMBs build scalable, compliant, and efficient systems — so you can focus on growth while we handle the backend.
            </p>
          </div>

          {/* Contact Section - Center on mobile, Right on desktop */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            {/* Added items-center on mobile for the inner column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-50"> 
              {footerSections.map((section) => (
                <div key={section.title}>
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
                      /* Center icons on mobile */
                      <div className="flex items-center justify-center md:justify-start space-x-5 pt-4">
                        <a 
                          href="https://instagram.com/arshan_consulting" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:opacity-60 transition-opacity duration-300"
                          aria-label="Instagram"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a 
                          href="https://de.linkedin.com/company/arshanconsulting" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:opacity-60 transition-opacity duration-300"
                          aria-label="LinkedIn"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Center on mobile */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-text-muted uppercase font-semibold order-2 md:order-1">
            © {currentYear} ARSHAN UG. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 order-1 md:order-2">
            {[
              { label: "TERMS AND CONDITIONS", id: "terms" },
              { label: "PRIVACY POLICY", id: "privacy" },
              { label: "IMPRESSUM", id: "impressum" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={`/terms#${item.id}`} 
                className="text-[10px] md:text-[11px] tracking-[0.15em] text-text-muted hover:text-primary uppercase transition-colors duration-300 font-semibold"
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