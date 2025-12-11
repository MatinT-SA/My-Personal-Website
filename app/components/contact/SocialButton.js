"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SocialButton({
  icon: SocialIcon,
  name,
  href,
  color,
  label,
  isEven,
}) {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth + 16);
    }
  }, []);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className="group relative flex items-center w-[60px] mx-[30px] rounded-full bg-yellow-primary shadow-lg cursor-pointer overflow-hidden transition-all ease-out"
      initial={{ opacity: 0, y: isEven ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.1 }}
      whileHover={{ width: 80 + textWidth }}
      aria-label={name}
      style={{ "--brand-color": color }}
    >
      {/* Icon */}
      <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-yellow-primary transition-colors duration-300 ease-out shrink-0">
        {SocialIcon && (
          <SocialIcon className="text-4xl text-black transition-colors duration-300 group-hover:text-(--brand-color)" />
        )}
      </div>

      {/* Text */}
      <span
        ref={textRef}
        className="ml-2 flex items-center font-medium text-2xl opacity-0 transition-all duration-300 whitespace-nowrap group-hover:opacity-100"
        style={{ color }}
      >
        {label}
      </span>
    </motion.a>
  );
}
