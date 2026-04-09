"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Updated interface to include optional className
interface FadeProps {
  children: React.ReactNode;
  className?: string; // Added this
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    },
  },
};

// Added className prop here
export function FadeInStagger({ children, className }: FadeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      variants={containerVariants}
      className={className} // Pass it down
    >
      {children}
    </motion.div>
  );
}

// Added className prop here
export function FadeItem({ children, className }: FadeProps) {
  return (
    <motion.div 
      variants={itemVariants} 
      className={className} // Pass it down
    >
      {children}
    </motion.div>
  );
}