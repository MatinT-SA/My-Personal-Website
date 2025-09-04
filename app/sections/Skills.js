// app/sections/Skills.js
"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import SkillsList from "../components/skills/SkillsList";
import SkillsGlowCursor from "../components/skills/SkillsGlowCursor";

const SkillsCircle = dynamic(
  () => import("../components/skills/SkillsCircle"),
  {
    ssr: false,
  }
);

// tweak these to change glow size / strength:
const HIGHLIGHT_RADIUS = 260; // px radius of the spotlight where items become visible
const FALL_OFF = 1.0; // linear falloff multiplier (1 = linear)

const skillsLeft = [
  "آشنا به زبان برنامه نویسی CSharp",
  "آشنا به Tailwind, Bootstrap, SASS",
  "آشنا به Redux",
  "تسلط کافی به SQL Server و MySQL",
  "سابقه کار با وردپرس",
  "تسلط کافی به Git و GitHub",
  "آشنا با مفاهیم SEO",
  "RESTful API",
];

const skillsRight = [
  "تسلط کافی به زبان برنامه نویسی JavaScript",
  "مسلط به HTML و CSS",
  "مسلط به کتابخانه ReactJS",
  "برنامه نویسی MERN Stack",
  "آشنا به Next.js",
  "آشنا با ThreeJS",
  "آشنا با کتابخانه jQuery",
  "طراحی سایت واکنش گرا",
];

// Data for the SkillsCircle component
const circleData = [
  { name: "Frontend", value: 7, color: "#3b82f6" },
  { name: "Backend", value: 3, color: "#22c55e" },
  { name: "Databases", value: 1, color: "#facc15" },
  { name: "Other", value: 4, color: "#a855f7" },
];

// Map each skill string to its category
const skillCategoryMap = {
  "آشنا به زبان برنامه نویسی CSharp": "Backend",
  "آشنا به Tailwind, Bootstrap, SASS": "Other",
  "آشنا به Redux": "Other",
  "تسلط کافی به SQL Server و MySQL": "Databases",
  "سابقه کار با وردپرس": "Other",
  "تسلط کافی به Git و GitHub": "Other",
  "آشنا با مفاهیم SEO": "Other",
  "RESTful API": "Backend",
  "تسلط کافی به زبان برنامه نویسی JavaScript": "Frontend",
  "مسلط به HTML و CSS": "Frontend",
  "مسلط به کتابخانه ReactJS": "Frontend",
  "برنامه نویسی MERN Stack": "Backend",
  "آشنا به Next.js": "Frontend",
  "آشنا با ThreeJS": "Frontend",
  "آشنا با کتابخانه jQuery": "Frontend",
  "طراحی سایت واکنش گرا": "Frontend",
};

export default function Skills() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const itemRefs = useRef([]); // DOM nodes
  const positions = useRef([]); // centers relative to container
  const rafRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const isInside = useRef(false);
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false); // New state for "show all"

  const handleSliceClick = useCallback((categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
    setShowAll(false); // Disable "show all" when a specific category is selected
  }, []);

  const handleShowAllClick = useCallback(() => {
    setShowAll((prevShowAll) => !prevShowAll);
    setSelectedCategory(null); // Deselect any category when "show all" is toggled
  }, []);

  const registerItem = useCallback((index, el) => {
    itemRefs.current[index] = el;
    if (el) {
      el.style.opacity = "0";
      el.style.transition = "opacity 120ms linear";
    }
  }, []);

  const computePositions = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const contRect = cont.getBoundingClientRect();
    positions.current = itemRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - contRect.left,
        y: r.top + r.height / 2 - contRect.top,
      };
    });
  }, []);

  const tick = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const { x: cx, y: cy } = lastPos.current;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${cx}px`;
      cursorRef.current.style.top = `${cy}px`;
      cursorRef.current.style.opacity = isInside.current ? "1" : "0";
    }

    const radius = HIGHLIGHT_RADIUS;
    const base = 0;
    const max = 1;

    const allSkills = [...skillsLeft, ...skillsRight];

    positions.current.forEach((pos, idx) => {
      const el = itemRefs.current[idx];
      if (!el || !pos) return;

      const skillString = allSkills[idx];
      const skillCategory = skillCategoryMap[skillString];

      const isSelected = selectedCategory === skillCategory;

      const dx = pos.x - cx;
      const dy = pos.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let t = Math.max(0, (radius - dist) / radius);
      t = Math.pow(t, FALL_OFF);
      const glowOpacity = base + (max - base) * t;

      // New logic: Check if showAll is true first, otherwise check selectedCategory, then use glow
      let finalOpacity;
      if (showAll) {
        finalOpacity = max;
      } else if (isSelected) {
        finalOpacity = max;
      } else {
        finalOpacity = glowOpacity;
      }

      el.style.opacity = String(finalOpacity);
    });

    rafRef.current = null;
  }, [selectedCategory, showAll, skillCategoryMap]);

  const handleMouseMove = useCallback(
    (e) => {
      const cont = containerRef.current;
      if (!cont) return;
      const rect = cont.getBoundingClientRect();
      lastPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [tick]
  );

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = true;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "none";
    if (cursorRef.current) cursorRef.current.style.opacity = "1";
    if (selectedCategory || showAll) {
      tick();
    }
  }, [isTouchDevice, selectedCategory, showAll, tick]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = false;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "auto";
    if (cursorRef.current) cursorRef.current.style.opacity = "0";

    if (!selectedCategory && !showAll) {
      itemRefs.current.forEach((el) => {
        if (el) el.style.opacity = "0";
      });
    }
  }, [isTouchDevice, selectedCategory, showAll]);

  useEffect(() => {
    computePositions();
    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);

    if (isTouchDevice) {
      itemRefs.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [computePositions, isTouchDevice]);

  // Use a dedicated useEffect to run the tick function when state changes
  useEffect(() => {
    tick();
  }, [selectedCategory, showAll, tick]);

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative scroll-mt-20 mx-12 my-16 rounded-[300px_15px] bg-[color:var(--color-blue-light-transparent)] p-6"
    >
      <h2 className="mb-12 text-center text-3xl font-extrabold text-sky-900">
        مهارت ها
      </h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* Left */}
        <SkillsList
          skills={skillsLeft}
          baseIndex={0}
          registerItem={registerItem}
        />

        {/* Center */}
        <div className="flex justify-center relative">
          <SkillsCircle data={circleData} onSliceClick={handleSliceClick} />
          {/* Corrected button: The inline opacity style was removed */}
          <div
            onClick={handleShowAllClick}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer font-bold text-center text-sky-900 transition-opacity duration-300"
          >
            {showAll ? "پنهان همه" : "نمایش همه"}
          </div>
        </div>

        {/* Right */}
        <SkillsList
          skills={skillsRight}
          baseIndex={skillsLeft.length}
          registerItem={registerItem}
        />
      </div>

      {/* Custom cursor (glow) - absolutely positioned inside container */}
      <SkillsGlowCursor containerRef={containerRef} />
    </section>
  );
}
