"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

export const fadeInUp: Variants = { 
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 } 
};

export const fadeInRight: Variants = { 
  hidden: { opacity: 0, x: 100 }, 
  visible: { opacity: 1, x: 0 } 
};

export const fadeInLeft: Variants = { 
  hidden: { opacity: 0, x: -100 }, 
  visible: { opacity: 1, x: 0 } 
};

export const scaleUp: Variants = { 
  hidden: { opacity: 0, scale: 0.8 }, 
  visible: { opacity: 1, scale: 1 } 
};
export const slideFromLeftBounce: Variants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: [ -150, 20, 0 ], 
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const slideFromRightBounce: Variants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: [ 150, -20, 0 ],
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideFromTopBounce: Variants = {
  hidden: { opacity: 0, y: -150 }, 
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: custom * 0.2, 
    },
  }),
};

export const deckShuffle: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
export const slideFromRightToLeft: Variants = {
  hidden: { opacity: 0, x: 200 }, 
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0, 
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: custom * 0.2,
    },
  }),
};

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  delay?: number;
  once?: boolean;
  margin?: string;
  [key: string]: string | number | boolean | Variants | Transition | ReactNode | undefined | object;
}

const AnimatedSection = ({ 
  children, 
  variants = fadeInUp, 
  transition = { duration: 0.8 },
  className = "",
  delay = 0,
  once = true,
  margin = "-100px",
  ...props 
}: AnimatedSectionProps) => {
  
  const mergedTransition = { 
    ...transition, 
    delay 
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      transition={mergedTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};



export default AnimatedSection;