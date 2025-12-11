"use client";

import { motion } from "framer-motion";

export default function ScrollCTA({ cta, onScroll }) {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <motion.p
        className="text-center text-lg md:text-xl font-bold mx-auto max-w-[83%] text-purple-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.3 }}
      >
        {cta}
      </motion.p>

      <motion.div
        onClick={onScroll}
        className="text-4xl text-purple-primary drop-shadow-lg cursor-pointer select-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        &#x2193;
      </motion.div>
    </div>
  );
}
