"use client";

import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const GoToTopButton = ({ aboutMeRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const thresholdRef = useRef(0);

  useEffect(() => {
    // 1. DEFINE the function first
    const toggleVisibility = () => {
      // 👈 Moved to the top!
      if (window.scrollY > thresholdRef.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (aboutMeRef && aboutMeRef.current) {
      const topPosition =
        aboutMeRef.current.getBoundingClientRect().top + window.scrollY;

      thresholdRef.current = topPosition - 100;

      // 2. THEN CALL the function
      toggleVisibility(); // 👈 Now this call works correctly
    }

    // 3. Register the event listener
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [aboutMeRef]); // Note: You might want to include toggleVisibility in dependencies if it were not defined inside useEffect, but it's fine here.

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed 
        right-4 
        bottom-4
        text-blue-light bg-purple-primary hover:bg-blue-light hover:text-purple-primary
        z-50 text-lg border-none outline-none 
        rounded-sm p-3 cursor-pointer 
        transition duration-200 ease-in-out
        
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Go to Top"
    >
      <FaAngleDoubleUp className="w-6 h-6 text-current" />
    </button>
  );
};

export default GoToTopButton;
