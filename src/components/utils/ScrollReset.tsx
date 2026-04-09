"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // 1. Handle standard navigation & path changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 2. Global listener for "Same Page" clicks
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        const currentPath = window.location.pathname;

        // If clicking link to current page or top
        if (href === currentPath || href === "#") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          
          // Force a soft refresh of the router to re-trigger animations
          router.refresh(); 
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [pathname, router]);

  return null;
}