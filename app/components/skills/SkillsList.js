"use client";

import { useEffect, useRef, useCallback } from "react";

export default function SkillsList({
  skills = [],
  baseIndex = 0,
  registerItem,
  className = "",
}) {
  const observerRef = useRef(null);
  const itemRefs = useRef([]);

  const setupObserver = useCallback(() => {
    if (typeof window === "undefined") return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observerRef.current.observe(el);
    });
  }, []);

  useEffect(() => {
    setupObserver();
    window.addEventListener("resize", setupObserver);
    return () => {
      window.removeEventListener("resize", setupObserver);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [setupObserver]);

  const handleRef = (el, index) => {
    if (!el) return;

    itemRefs.current[index] = el;

    registerItem(baseIndex + index, el);
  };

  return (
    <ul className={`space-y-4 text-center ${className}`}>
      {skills.map((skill, i) => (
        <li
          key={baseIndex + i}
          ref={(el) => handleRef(el, i)}
          className={`
            flex items-center justify-center py-2 text-md font-medium text-dark-primary
            lg:will-change-[opacity,transform]
            xl:opacity-0 
            xl:transition-opacity xl:duration-100 xl:ease-linear
            max-xl:opacity-0 
            max-xl:-translate-y-8
            max-xl:transition-all
            max-xl:duration-700 
            max-xl:ease-out
            [&.is-visible]:max-xl:opacity-100 
            [&.is-visible]:max-xl:translate-y-0
          `}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
