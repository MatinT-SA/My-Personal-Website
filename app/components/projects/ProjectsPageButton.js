"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

export default function ProjectsPageButton({ activeSectionId, onButtonClick }) {
  const isButtonVisible = !["home", "about-me"].includes(activeSectionId);

  return (
    <motion.button
      initial={{ x: 100, opacity: 0 }}
      animate={{
        x: isButtonVisible ? 0 : 100,
        opacity: isButtonVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      onClick={onButtonClick}
      className="fixed bottom-16 right-5 z-50 p-3 rounded-full bg-slate-800 text-white shadow-xl cursor-pointer"
    >
      <FaLaptopCode className="text-2xl" />
    </motion.button>
  );
}
