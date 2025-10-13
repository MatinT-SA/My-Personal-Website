"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion"; // 🚨 1. Import motion

const TimelineElement = ({
  date,
  title,
  company,
  points,
  iconBg, // Hex color
  index,
  iconUrl,
}) => {
  // Define animation variants for the slide-up/fade-in effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1, // Stagger delay based on index
      },
    },
  };

  const isOdd = index % 2 !== 0;

  const dateAlignmentClasses = isOdd
    ? "md:left-1/2 md:text-left md:pl-12"
    : "md:right-1/2 md:text-right md:pr-12";

  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 border-opacity-70 transition duration-700 ease-out";

  const cardOrder = isOdd ? "md:order-3 mr-2" : "md:order-1 ml-2";
  const spacerOrder = isOdd ? "md:order-1" : "md:order-3";

  // Hex color for the border
  const cardBorderColor = iconBg;

  return (
    // 🚨 2. Replace the outer <div> with <motion.div>
    <motion.div
      // 🚨 3. Framer Motion properties for animation
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Triggers animation when element enters view
      viewport={{ once: true, amount: 0.1 }} // Animates only once
      // Pass the Hex colors via style prop (using CSS Variables)
      style={{
        "--icon-bg-color": iconBg,
        "--card-border-color": cardBorderColor,
      }}
      className={`relative flex justify-between items-center w-full mb-12 group`}
    >
      {/* 1. Spacer */}
      <div className={`hidden md:block w-[49%] ${spacerOrder}`} />

      {/* 2. Timeline Icon/Dot: Uses icon-dot-background class */}
      <div
        className={`hidden md:flex md:order-2 w-16 h-16 rounded-full shadow-xl z-10 items-center justify-center icon-dot-background ring-4 ring-white overflow-hidden`}
      >
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${company} Logo`}
            className="w-full h-full object-contain p-3"
          />
        ) : (
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a1 1 0 10-2 0v1H9V4a1 1 0 00-1-1H7zM5 7a1 1 0 011-1h1v1h2V6h2v1h1V6h1a1 1 0 011 1v2H5V7z" />
          </svg>
        )}
      </div>

      {/* 3. The main content card: Applies the border color using the new CSS variable */}
      <div
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses} card-border-style`}
      >
        <div dir="rtl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-purple-primary font-medium mb-4">{company}</p>

          {/* List of points (Responsibilities) */}
          <ul className="my-3 list-disc pr-5 space-y-2 text-sm text-slate-600">
            {points.map((point, idx) => (
              <li key={idx} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4. Separately positioned date element */}
      <div
        className={`hidden md:block absolute w-1/2 top-1/2 -translate-y-1/2 text-gray-600 font-medium whitespace-nowrap ${dateAlignmentClasses}`}
      >
        <p className="text-md text-gray-700">{date}</p>
      </div>
    </motion.div>
  );
};

export default TimelineElement;
