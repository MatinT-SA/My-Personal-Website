"use client";

import React, { useState, useRef, useEffect } from "react";

const TimelineElement = ({ date, title, company, points, iconBg, index }) => {
  // ... (Intersection Observer state and logic remain the same)
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
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
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

  // 3. Logic for Alternating Sides
  const isOdd = index % 2 !== 0;

  // --- REVISED: Date positioning logic ---
  // The element is positioned absolutely within the parent timeline container (w-full).
  // On desktop, the date is positioned right up against the center line (right-1/2 or left-1/2).
  const dateAlignmentClasses = isOdd
    ? "md:left-1/2 md:text-left md:pl-6" // Card is on the right (order-3), Date is on the left
    : "md:right-1/2 md:text-right md:pr-6"; // Card is on the left (order-1), Date is on the right

  // CSS Classes for Card
  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-8 border-opacity-70 border-purple-primary transition duration-700 ease-out";

  // Animation classes
  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-12";

  // Determine the flex order for alternating layout (Dot is always order-2)
  const cardOrder = isOdd ? "md:order-3" : "md:order-1";
  const spacerOrder = isOdd ? "md:order-1" : "md:order-3";

  return (
    <div
      ref={ref}
      className={`relative flex justify-between items-center w-full mb-12 group ${visibilityClasses}`}
      style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
    >
      {/* 1. Spacer (Empty element to push the card to the opposite side) */}
      <div className={`hidden md:block w-[48%] ${spacerOrder}`} />

      {/* 2. Timeline Icon/Dot (Always in the middle, order-2) */}
      <div
        className={`hidden md:flex md:order-2 w-8 h-8 rounded-full shadow-xl z-10 items-center justify-center ${iconBg} ring-8 ring-white`}
      >
        {/* Placeholder Icon (Briefcase) */}
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M7 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a1 1 0 10-2 0v1H9V4a1 1 0 00-1-1H7zM5 7a1 1 0 011-1h1v1h2V6h2v1h1V6h1a1 1 0 011 1v2H5V7z" />
        </svg>
      </div>

      {/* 3. The main content card */}
      <div
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses} ${iconBg}`}
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

      {/* 4. Corrected: Separately positioned date element */}
      <div
        // w-1/2 ensures it takes up exactly half the width
        // absolute positioning pinned to either left-1/2 or right-1/2
        // padding (pl-6 or pr-6) creates the visual gap from the center line
        className={`md:block absolute w-1/2 top-3 hidden text-gray-600 font-medium whitespace-nowrap ${dateAlignmentClasses}`}
      >
        <p className="text-sm text-gray-700">{date}</p>
      </div>
    </div>
  );
};

export default TimelineElement;
