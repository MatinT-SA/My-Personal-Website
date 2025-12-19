"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  const isRTL = locale === "fa";
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: index * 0.1 },
    },
  };

  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 border-opacity-70 transition duration-700 ease-out";

  const cardOrder = isOdd ? "md:order-3 md:mr-2" : "md:order-1 md:ml-2";
  const spacerOrder = isOdd ? "md:order-1" : "md:order-3";

  const dateAlignmentClasses = isRTL
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
      }}
      className="relative flex justify-between items-center w-full mb-12 group"
    >
      {/* Spacer */}
      <div className={`hidden md:block w-[49%] ${spacerOrder}`} />

      {/* Timeline dot/icon */}
      <div
        className={`hidden md:flex md:order-2 w-16 h-16 rounded-full shadow-xl z-10 items-center justify-center bg-(--icon-bg-color) ring-4 ring-white overflow-hidden`}
      >
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt={`${company} Logo`}
            width={64}
            height={64}
            className="object-contain p-3"
            priority={index < 2}
          />
        ) : (
          <div className="w-4 h-4 bg-white rounded-full" />
        )}
      </div>

      {/* Main card */}
      <div
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses}`}
        style={{ borderColor: iconBg }}
      >
        <div dir={isRTL ? "rtl" : "ltr"}>
          {/* MOBILE DATE: Only visible below 768px */}
          <div className="md:hidden flex items-center mb-6">
            <span
              className="px-3 py-1 text-xs font-bold rounded-full text-purple-primary"
              style={{ backgroundColor: iconBg }}
            >
              {date}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-purple-primary font-medium mb-4">{company}</p>

          <ul
            className={`my-3 list-disc ${
              isRTL ? "pr-5" : "pl-5"
            } space-y-2 text-sm text-slate-600`}
          >
            {points.map((point, idx) => (
              <li key={idx} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Date (Hidden on mobile) */}
      <div
        className={`hidden md:block absolute w-1/2 top-1/2 -translate-y-1/2 text-gray-600 font-medium whitespace-nowrap ${dateAlignmentClasses}`}
      >
        <p className="text-md text-gray-700">{date}</p>
      </div>
    </motion.div>
  );
};

export default TimelineElement;
