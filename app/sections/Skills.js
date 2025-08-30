"use client";

import { useRef, useEffect, useCallback } from "react";
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

  // register item DOM nodes (called by SkillsList)
  const registerItem = useCallback((index, el) => {
    itemRefs.current[index] = el;
    // ensure initial style
    if (el) {
      el.style.opacity = "0";
      el.style.transition = "opacity 120ms linear";
    }
  }, []);

  // compute center positions of items relative to container
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

  // update opacities and cursor position (runs in RAF)
  const tick = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const { x: cx, y: cy } = lastPos.current;

    // position and style the custom cursor
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cx}px`;
      cursorRef.current.style.top = `${cy}px`;
      // keep visible
      cursorRef.current.style.opacity = isInside.current ? "1" : "0";
    }

    // compute distances and set opacity
    const radius = HIGHLIGHT_RADIUS;
    const base = 0; // base opacity outside the spotlight; set 0 for invisible otherwise 0.03
    const max = 1;

    positions.current.forEach((pos, idx) => {
      const el = itemRefs.current[idx];
      if (!el || !pos) return;
      const dx = pos.x - cx;
      const dy = pos.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // linear falloff
      let t = Math.max(0, (radius - dist) / radius);
      t = Math.pow(t, FALL_OFF);
      const opacity = base + (max - base) * t;
      el.style.opacity = String(opacity);
    });

    rafRef.current = null;
  }, []);

  // on mouse move, schedule RAF
  const handleMouseMove = useCallback(
    (e) => {
      const cont = containerRef.current;
      if (!cont) return;
      const rect = cont.getBoundingClientRect();
      // cursor position relative to container
      lastPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [tick]
  );

  // on enter / leave
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = true;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "none"; // hide native cursor
    if (cursorRef.current) cursorRef.current.style.opacity = "1";
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    isInside.current = false;
    // hide cursor, reset items
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "auto";
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    // reset all item opacities back to base (0)
    itemRefs.current.forEach((el) => {
      if (el) el.style.opacity = "0";
    });
  }, [isTouchDevice]);

  useEffect(() => {
    // initial compute and on resize
    computePositions();
    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);

    // if touch device, show items by default and skip cursor logic
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
        <div className="flex justify-center">
          <SkillsCircle />
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
