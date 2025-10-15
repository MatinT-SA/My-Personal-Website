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

const HIGHLIGHT_RADIUS = 260;
const FALL_OFF = 1.0;

// =========================================================
// 🎯 FINAL FIX: DATA DEFINITIONS MUST BE HERE
// =========================================================

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

const circleData = [
  { name: "Frontend", value: 7, color: "#3b82f6" },
  { name: "Backend", value: 3, color: "#22c55e" },
  { name: "Databases", value: 1, color: "#facc15" },
  { name: "Other", value: 4, color: "#a855f7" },
];

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

// =========================================================
// END OF DATA DEFINITIONS
// =========================================================

export default function Skills() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const itemRefs = useRef([]);
  const positions = useRef([]);
  const rafRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const isInside = useRef(false);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false); // --- Handlers ---

  const handleSliceClick = useCallback((categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
    setShowAll(false);
  }, []);

  const handleShowAllClick = useCallback(() => {
    setShowAll((prevShowAll) => !prevShowAll);
    setSelectedCategory(null);
  }, []);

  const registerItem = useCallback((index, el) => {
    itemRefs.current[index] = el;
  }, []);

  const computePositions = useCallback(() => {
    const cont = containerRef.current;
    if (!cont || isTouchDevice) return;

    const contRect = cont.getBoundingClientRect();
    positions.current = itemRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - contRect.left,
        y: r.top + r.height / 2 - contRect.top,
      };
    });
  }, [isTouchDevice]);

  const tick = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;

    const runGlowLogic = !isTouchDevice && !selectedCategory && !showAll;

    // Get mouse position only if we are doing the glow effect
    const { x: cx, y: cy } = runGlowLogic ? lastPos.current : { x: 0, y: 0 };

    const radius = HIGHLIGHT_RADIUS;
    const base = 0;
    const max = 1;
    const allSkills = [...skillsLeft, ...skillsRight];

    positions.current.forEach((pos, idx) => {
      const el = itemRefs.current[idx];
      if (!el || !pos) return;

      const skillCategory = skillCategoryMap[allSkills[idx]];
      const isSelected = selectedCategory === skillCategory;

      let glowOpacity = 0; // Default to invisible (for desktop if cursor is far)

      if (runGlowLogic) {
        // Desktop-only Mouse Glow Calculation
        const dx = pos.x - cx;
        const dy = pos.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let t = Math.max(0, (radius - dist) / radius);
        t = Math.pow(t, FALL_OFF);
        glowOpacity = base + (max - base) * t;
      }

      // --- Final Opacity Logic ---
      let finalOpacity;
      if (isTouchDevice) {
        // Mobile: If showAll or selected, force opacity 1. Otherwise, let CSS win.
        if (showAll || isSelected) {
          finalOpacity = max;
        } else {
          return; // Let CSS (opacity-100) control standard visibility
        }
      } else if (showAll) {
        finalOpacity = max; // Desktop: show all if clicked
      } else if (isSelected) {
        finalOpacity = max; // Desktop: highlight selected category
      } else {
        finalOpacity = glowOpacity; // Desktop: use mouse glow
      }

      el.style.opacity = String(finalOpacity);
    });

    rafRef.current = null;
  }, [selectedCategory, showAll, isTouchDevice]);

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return;
      const cont = containerRef.current;
      if (!cont) return;
      const rect = cont.getBoundingClientRect();
      lastPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [tick, isTouchDevice]
  );

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = true;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "none";
    if (selectedCategory || showAll) {
      tick();
    }
  }, [isTouchDevice, selectedCategory, showAll, tick]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = false;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "auto";

    if (!selectedCategory && !showAll) {
      itemRefs.current.forEach((el) => {
        if (el) el.style.opacity = "0";
      });
    }
  }, [isTouchDevice, selectedCategory, showAll]); // --- Effects ---

  useEffect(() => {
    computePositions();
    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [computePositions, isTouchDevice]);

  useEffect(() => {
    tick();
  }, [selectedCategory, showAll, tick]);

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onMouseEnter={isTouchDevice ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      className="relative scroll-mt-24 mx-12 my-16 rounded-[300px_15px] bg-[color:var(--color-blue-light-transparent)] p-6"
    >
           {" "}
      <h2 className="mb-12 text-center text-3xl font-extrabold text-purple-primary">
                مهارت ها      {" "}
      </h2>
            {/* Layout: FLEXBOX for guaranteed single-row desktop layout */}   
       {" "}
      <div
        className="
            flex flex-row items-center justify-around gap-8 
            max-lg:flex-col max-lg:items-center max-lg:gap-12 
        "
      >
               {" "}
        <SkillsList
          skills={skillsLeft}
          baseIndex={0}
          registerItem={registerItem}
          className="flex-1 max-lg:order-2 max-lg:w-full"
        />
               {" "}
        <div className="flex justify-center relative max-lg:order-first">
                   {" "}
          <SkillsCircle data={circleData} onSliceClick={handleSliceClick} />   
               {" "}
          <div
            onClick={handleShowAllClick}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer font-bold text-center text-sky-900 transition-opacity duration-300"
          >
                        {showAll ? "پنهان همه" : "نمایش همه"}         {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <SkillsList
          skills={skillsRight}
          baseIndex={skillsLeft.length}
          registerItem={registerItem}
          className="flex-1 max-lg:order-3 max-lg:w-full"
        />
             {" "}
      </div>
            {!isTouchDevice && <SkillsGlowCursor cursorRef={cursorRef} />}   {" "}
    </section>
  );
}
