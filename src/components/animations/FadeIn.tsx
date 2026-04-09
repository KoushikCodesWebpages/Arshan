"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeProps {
  children: React.ReactNode;
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
    filter: "blur(4px)" // Added a slight blur for a more premium "emergence" feel
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a smooth deceleration
    },
  },
};

export function FadeInStagger({ children }: FadeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // margin: "-10% 0px" triggers the animation when the element is 10% inside the viewport
      // once: true ensures it stays visible after scrolling past
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({ children }: FadeProps) {
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
}