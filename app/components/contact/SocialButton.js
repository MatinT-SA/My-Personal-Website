"use client";

import { motion } from "framer-motion";

export default function SocialButton({ icon: Icon, name, href, isEven }) {
  // Define hover background and text colors for each social media
  const hoverColors = {
    Instagram: "rgb(255, 0, 191)",
    Twitter: "rgb(86, 154, 243)",
    Github: "rgb(255, 123, 0)",
    LinkedIn: "rgb(0, 0, 204)",
    WhatsApp: "rgb(37, 211, 102)",
    Telegram: "#0088cc",
    Facebook: "#316ff6",
  };

  const currentHoverColor = hoverColors[name] || "transparent"; // Default to transparent if not found

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className="relative inline-block w-[60px] h-[60px] mx-[30px] rounded-full bg-yellow-primary shadow-lg cursor-pointer transition-all duration-300 ease-out group overflow-hidden" // Added overflow-hidden
      initial={{ opacity: 0, y: isEven ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      whileHover={{ width: "200px" }} // Expands to 200px on hover
      aria-label={name}
      style={{ direction: "ltr" }}
    >
      {/* Icon Container: Changes background and icon color on hover */}
      <div
        className="inline-block h-[60px] w-[60px] bg-yellow-primary rounded-full text-center transition-all duration-300 ease-out"
        style={{
          lineHeight: "60px",
        }}
      >
        <Icon
          className={`text-5xl text-shadow-dark-primary transition-colors duration-300 group-hover:text-${currentHoverColor}`}
        />
      </div>

      {/* Text Span: Appears on hover with brand color */}
      <span
        className="text-xl font-medium ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:ml-5"
        style={{
          lineHeight: "60px",
          color: currentHoverColor, // Text color is brand color
        }}
      >
        {name}
      </span>
    </motion.a>
  );
}
