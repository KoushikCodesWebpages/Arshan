"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import for mobile toggle
import brand from "../../../public/brand.svg";
import { theme } from "@/lib/theme";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Finance", path: "/finance/" },
    { name: "Marketing", path: "/marketing/" },
    { name: "HR", path: "/hr/" },
    { name: "About Us", path: "/about-us/" }
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md shadow-sm shadow-slate-200/50 transition-all duration-300">
      <div className="w-full px-6 md:px-16 mx-auto h-16 md:h-15 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src={brand} 
            alt="Arshan - Your Growth Partner" 
            width={140}
            height={40}
            priority
            className="h-9 md:h-10 w-auto object-contain transition-opacity hover:opacity-80" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative py-7 text-[14px] font-bold tracking-wide transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-slate-500 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-5 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact-us" 
            className="hidden sm:block bg-primary text-white text-[12px] font-bold px-6 md:px-8 py-3 rounded-sm hover:bg-slate-800 transition-all uppercase tracking-widest shadow-md shadow-primary/10"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-[16px] font-bold tracking-wide transition-colors ${
                pathname === link.path ? "text-primary" : "text-slate-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact-us" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-white text-[14px] font-bold py-4 rounded-sm text-center uppercase tracking-widest"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}