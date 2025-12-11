"use client";

import { motion } from "framer-motion";

export default function QuoteText({ quote, isHovered }) {
  return (
    <motion.div
      className="p-5 box-border text-white text-center leading-loose text-lg z-10 pointer-events-none"
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{
        opacity: isHovered ? 1 : 0,
        visibility: isHovered ? "visible" : "hidden",
      }}
      transition={{
        duration: 0.2,
        delay: isHovered ? 0.5 : 0,
      }}
    >
      {quote.quote}
    </motion.div>
  );
}
