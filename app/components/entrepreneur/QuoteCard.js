"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import QuoteButton from "./QuoteButton";
import QuoteText from "./QuoteText";

export default function QuoteCard({
  quote,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  t,
}) {
  return (
    <div className="w-[265px] flex flex-col items-center">
      <motion.div
        className="w-full h-[400px] relative bg-black flex justify-center items-center rounded-2xl mx-auto"
        style={{
          boxShadow: quote.shadow,
        }}
        initial={{ opacity: 0, y: "25%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.4,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Background gradient overlay */}
        <div
          className="w-1/2 h-full absolute left-0 top-0 pointer-events-none rounded-2xl"
          style={{
            background: quote.bg,
            opacity: 0.3,
          }}
        />

        {/* Image container */}
        <div className="w-full h-full flex justify-center items-center rounded-2xl overflow-hidden absolute">
          <Image
            src={quote.image}
            alt={quote.alt}
            width={265}
            height={400}
            quality={75}
            priority={false}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Interactive button & text overlays */}
        <QuoteButton
          quote={quote}
          isHovered={isHovered}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          t={t}
        />

        <QuoteText quote={quote} isHovered={isHovered} />
      </motion.div>

      {/* Author name */}
      <h3 className="author-name mt-4">{quote.author}</h3>
    </div>
  );
}
