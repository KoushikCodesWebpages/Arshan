"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const AnimationContext = createContext({ trigger: 0, reset: () => {} });

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  // Reset when path actually changes
  useEffect(() => {
    setCount(prev => prev + 1);
  }, [pathname]);

  const reset = () => setCount(prev => prev + 1);

  return (
    <AnimationContext.Provider value={{ trigger: count, reset }}>
      <div key={count} className="contents">
        {children}
      </div>
    </AnimationContext.Provider>
  );
}

export const useAnimationReset = () => useContext(AnimationContext);