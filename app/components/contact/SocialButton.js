"use client";

import { motion } from "framer-motion";

export default function SocialButton({ icon: SocialIcon, name, href, isEven }) {
  const hoverColors = {
    Instagram: "rgb(255, 0, 191)",
    Twitter: "rgb(86, 154, 243)",
    Github: "rgb(255, 123, 0)",
    LinkedIn: "rgb(0, 0, 204)",
    WhatsApp: "rgb(37, 211, 102)",
    Telegram: "#0088cc",
    Facebook: "#316ff6",
  };

  const currentHoverColor = hoverColors[name] || "transparent";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className="relative flex items-center w-[60px] h-[60px] mx-[30px] rounded-full bg-yellow-primary shadow-lg cursor-pointer transition-all duration-300 ease-out group overflow-hidden"
      initial={{ opacity: 0, y: isEven ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.1 }}
      whileHover={{ width: "200px" }}
      aria-label={name}
      style={{
        direction: "ltr",
        "--brand-color": currentHoverColor,
      }}
    >
      <div className="flex justify-center items-center h-[60px] w-[60px] bg-yellow-primary rounded-full transition-all duration-300 ease-out shrink-0">
        {SocialIcon && (
          <SocialIcon
            className={`text-4xl text-shadow-dark-primary transition-colors duration-300 group-hover:text-[var(--brand-color)]`}
          />
        )}
      </div>

      <span
        className="text-2xl flex justify-center items-center font-medium ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap"
        style={{
          color: currentHoverColor,
        }}
      >
        {name}
      </span>
    </motion.a>
  );
}
