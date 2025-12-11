"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./experience.module.css";

const TimelineElement = ({
  date,
  title,
  company,
  points,
  iconBg,
  index,
  iconUrl,
  locale,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: index * 0.1 },
    },
  };

  const isOdd = index % 2 !== 0; // keep original logic for Persian zigzag

  // Card & spacer layout classes
  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 border-opacity-70 transition duration-700 ease-out";
  const cardOrder = isOdd ? "md:order-3 mr-2" : "md:order-1 ml-2";
  const spacerOrder = isOdd ? "md:order-1" : "md:order-3";
  const cardBorderColor = iconBg;

  // Date alignment
  const dateAlignmentClasses =
    locale === "fa"
      ? isOdd
        ? "md:left-1/2 md:text-left md:pl-12"
        : "md:right-1/2 md:text-right md:pr-12"
      : isOdd
      ? "md:right-1/2 md:text-right md:pr-12"
      : "md:left-1/2 md:text-left md:pl-12";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{
        "--icon-bg-color": iconBg,
        "--card-border-color": cardBorderColor,
      }}
      className="relative flex justify-between items-center w-full mb-12 group"
    >
      {/* Spacer */}
      <div className={`hidden md:block w-[49%] ${spacerOrder}`} />

      {/* Timeline dot/icon */}
      <div
        className={`hidden md:flex md:order-2 w-16 h-16 rounded-full shadow-xl z-10 items-center justify-center ${styles.iconDotBackground} ring-4 ring-white overflow-hidden`}
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

      {/* Main card */}
      <div
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses} ${styles.cardBorderStyle}`}
      >
        {/* Force text direction based on locale */}
        <div dir={locale === "fa" ? "rtl" : "ltr"}>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-purple-primary font-medium mb-4">{company}</p>

          <ul className="my-3 list-disc pr-5 space-y-2 text-sm text-slate-600">
            {points.map((point, idx) => (
              <li key={idx} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Date */}
      <div
        className={`hidden md:block absolute w-1/2 top-1/2 -translate-y-1/2 text-gray-600 font-medium whitespace-nowrap ${dateAlignmentClasses}`}
      >
        <p className="text-md text-gray-700">{date}</p>
      </div>
    </motion.div>
  );
};

export default TimelineElement;
