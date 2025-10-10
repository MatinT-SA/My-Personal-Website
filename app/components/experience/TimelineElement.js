"use client";

import React, { useState, useRef, useEffect } from "react";

/**
 * Custom Timeline Element component.
 * Features: Responsive layout, animated visibility on scroll, and alternating sides.
 */
const TimelineElement = ({ date, title, company, points, iconBg, index }) => {
  // 1. Setup Intersection Observer state
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // 2. Observer logic for scroll visibility (simulating Framer Motion's 'whileInView')
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // Ensure observer is disconnected on component unmount
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 3. Logic for Alternating Sides (on medium screens and up)
  // Index 0, 2, 4... will be on one side, Index 1, 3, 5... on the other.
  const isOdd = index % 2 !== 0;

  // CSS Classes for Animation and Alternating
  const cardBaseClasses =
    "w-full shadow-xl rounded-lg p-6 bg-white border-b-4 border-r-4 border-l-4 border-opacity-70 transition duration-700 ease-out";

  // Animation classes (simulating the smooth scroll effect)
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
      // Staggering the reveal using transition delay
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
        // w-[48%] on desktop, full width on mobile. Alternates order on desktop.
        className={`w-full md:w-[48%] ${cardOrder} ${cardBaseClasses} ${iconBg}`}
      >
        <div dir="rtl">
          <p className="text-gray-500 text-sm mb-1">{date}</p>
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
    </div>
  );
};

export default TimelineElement;
