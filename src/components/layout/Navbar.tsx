"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/lib/theme";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Finance", path: "/finance" },
    { name: "Marketing", path: "/marketing" },
    { name: "HR", path: "/hr" },
    { name: "About Us", path: "/about-us" }
  ];

  return (
    /* SHADOW UPDATE: 
       Added 'shadow-sm' for a subtle lift.
       Added 'shadow-slate-200/50' to keep the shadow clean and professional.
    */
    <nav className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md shadow-sm shadow-slate-200/50 transition-all duration-300">
      <div className="w-full px-8 md:px-16 mx-auto h-15 flex items-center justify-between gap-12">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tighter uppercase">
          Arshan
        </Link>

        {/* Links Container */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative py-7 text-[13px] font-bold tracking-wide transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-slate-500 hover:text-primary"
                }`}
              >
                {link.name}
                
                {/* Underline logic - matching your previous image reference */}
                {isActive && (
                  <span className="absolute bottom-5 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <Link 
          href="/get-started" 
          className="bg-primary text-white text-[11px] font-bold px-8 py-3 rounded-sm hover:bg-slate-800 transition-all uppercase tracking-[0.1em] shadow-md shadow-primary/10"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}