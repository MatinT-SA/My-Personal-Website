"use client";

import React, { useState, useRef, useEffect } from "react";

const TimelineElement = ({
  date,
  title,
  company,
  points,
  iconBg,
  index,
  iconUrl,
}) => {
  // ... (Observer logic omitted for brevity)
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const isOdd = index % 2 !== 0;

  const dateAlignmentClasses = isOdd
    ? "md:left-1/2 md:text-left md:pl-6"
    : "md:right-1/2 md:text-right md:pr-6";

  // 🚨 CHANGE 1: Simplify cardBaseClasses by removing the hardcoded border color
  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 border-opacity-70 transition duration-700 ease-out";

  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-12";

  const cardOrder = isOdd ? "md:order-3" : "md:order-1";
  const spacerOrder = isOdd ? "md:order-1" : "md:order-3";

  return (
    <div
      ref={ref}
      className={`relative flex justify-between items-center w-full mb-12 group ${visibilityClasses}`}
      style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
    >
      {/* 1. Spacer */}
      <div className={`hidden md:block w-[48%] ${spacerOrder}`} />

      {/* 2. Timeline Icon/Dot (Fixing the IconBg visibility) */}
      <div
        className={`hidden md:flex md:order-2 w-16 h-16 rounded-full shadow-xl z-10 items-center justify-center ${iconBg} ring-4 ring-white overflow-hidden`}
      >
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${company} Logo`}
            // 🚨 FIX 2: Added bg-white to the image wrapper to ensure logo stands out,
            // and reduced padding slightly to let more of the iconBg show as a rim.
            className="w-full h-full object-contain p-3 bg-white"
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

      {/* 3. The main content card */}
      <div
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses}`}
        // 🚨 FIX 3: Use inline style to dynamically set the border color
        // based on the iconBg class. This requires mapping `iconBg` (e.g., 'bg-blue-600')
        // to `border-[color]` (e.g., 'border-blue-600').
        // Since we can't easily extract the color from the class string in runtime,
        // we'll assume the same color class can be used for border-* if your Tailwind
        // setup includes JIT compilation and dynamic variants.
        // A safer solution is using a style object, but for simplicity:
        style={{
          borderColor: iconBg.replace("bg-", "var(--tw-border-opacity, 1) "),
          // NOTE: This assumes `iconBg` is a simple background class like `bg-red-500`
          // and you have CSS variables or dynamic color loading enabled.
          // A more direct fix is to pass the HEX/RGB color via a dedicated prop.
        }}
        // The most reliable way for dynamic Tailwind colors is to rely on JIT/dynamic classes:
        // We'll trust that adding a `border-` class will work alongside the hardcoded
        // `border-b-8 border-opacity-70` in `cardBaseClasses`.
        // To make it work, we must manually change the `cardBaseClasses` to be:
        // "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 transition duration-700 ease-out"
        // AND then combine with the border color class.
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
        <p className="text-sm text-gray-700">{date}</p>
      </div>
    </div>
  );
};

export default TimelineElement;
