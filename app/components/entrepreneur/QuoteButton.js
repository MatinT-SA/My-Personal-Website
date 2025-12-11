"use client";

import { motion } from "framer-motion";

export default function QuoteButton({
  quote,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  t,
}) {
  return (
    <motion.div
      className="w-[50px] h-[50px] absolute right-5 bottom-5 rounded-full cursor-pointer shadow-md"
      style={{
        background: quote.bg,
      }}
      onMouseEnter={() => onMouseEnter(quote.id)}
      onMouseLeave={onMouseLeave}
      animate={{
        width: isHovered ? "100%" : "50px",
        height: isHovered ? "100%" : "50px",
        right: isHovered ? 0 : 20,
        bottom: isHovered ? 0 : 20,
        borderRadius: isHovered ? "5%" : "50%",
        opacity: isHovered ? 0.9 : 1,
        boxShadow: isHovered ? "none" : "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.5 }}
    >
      <span
        className="flex justify-center items-center text-xs tracking-wide text-white absolute inset-0"
        style={{
          display: isHovered ? "none" : "flex",
          transitionDelay: "0.5s",
        }}
      >
        {t("read_more")}
      </span>
    </motion.div>
  );
}
