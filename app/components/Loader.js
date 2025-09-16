"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Loader() {
  const dots = Array.from({ length: 9 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999]"
    >
      <motion.div
        className="grid grid-cols-3 gap-3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {dots.map((dot) => (
          <motion.div
            key={dot}
            className="w-4 h-4 rounded-full bg-cyan-400"
            variants={dotVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
