"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";

import SkillsList from "@/app/components/skills/SkillsList";
import SkillsGlowCursor from "@/app/components/skills/SkillsGlowCursor";
import { useTranslations } from "next-intl";
import { getSkillsData } from "@/app/src/constants/skillsData";

const SkillsCircle = dynamic(
  () => import("@/app/components/skills/SkillsCircle"),
  { ssr: false }
);

const HIGHLIGHT_RADIUS = 260;
const FALL_OFF = 1.0;

export default function Skills() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const itemRefs = useRef([]);
  const positions = useRef([]);
  const rafRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const isInside = useRef(false);

  const t = useTranslations("skills");
  const {
    skillsLeft,
    skillsRight,
    circleData,
    skillCategoryMap,
    skillKeysLeft,
    skillKeysRight,
  } = getSkillsData(t);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

    const { x: cx, y: cy } = runGlowLogic ? lastPos.current : { x: 0, y: 0 };

    const radius = HIGHLIGHT_RADIUS;
    const base = 0;
    const max = 1;

    const allSkills = [...skillsLeft, ...skillsRight];
    const allSkillKeys = [...skillKeysLeft, ...skillKeysRight];

    positions.current.forEach((pos, idx) => {
      const el = itemRefs.current[idx];
      if (!el || !pos) return;

      const skillKey = allSkillKeys[idx];
      const skillCategory = skillCategoryMap[skillKey];
      const isSelected = selectedCategory === skillCategory;

      let glowOpacity = 0;

      if (runGlowLogic) {
        const dx = pos.x - cx;
        const dy = pos.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let t = Math.max(0, (radius - dist) / radius);
        t = Math.pow(t, FALL_OFF);
        glowOpacity = base + (max - base) * t;
      }

      let finalOpacity;
      if (isTouchDevice) {
        if (showAll || isSelected) {
          finalOpacity = max;
        } else {
          return;
        }
      } else if (showAll) {
        finalOpacity = max;
      } else if (isSelected) {
        finalOpacity = max;
      } else {
        finalOpacity = glowOpacity;
      }

      el.style.opacity = String(finalOpacity);
    });

    rafRef.current = null;
  }, [
    selectedCategory,
    showAll,
    isTouchDevice,
    skillsLeft,
    skillsRight,
    skillKeysLeft,
    skillKeysRight,
    skillCategoryMap,
  ]);

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
    if (selectedCategory || showAll) tick();
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
  }, [isTouchDevice, selectedCategory, showAll]);

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
      className="relative scroll-mt-24 mx-12 my-16 rounded-[150px_10px] lg:rounded-[300px_15px] bg-[color:var(--color-blue-light-transparent)] p-6"
    >
      <h2 className="mb-12 text-center text-3xl font-extrabold text-purple-primary">
        {t("title")}
      </h2>

      <div
        className="
          flex flex-row items-center justify-around gap-8 
          max-lg:flex-col max-lg:items-center max-lg:gap-4
        "
      >
        <SkillsList
          skills={skillsLeft}
          baseIndex={0}
          registerItem={registerItem}
          className="flex-1 max-lg:order-2 max-lg:w-full"
        />

        <div className="hidden xl:flex xl:justify-center relative max-xl:order-first">
          <SkillsCircle data={circleData} onSliceClick={handleSliceClick} />
          <div
            onClick={handleShowAllClick}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer font-bold text-center text-sky-900 transition-opacity duration-300"
          >
            {showAll ? t("hide_all") : t("show_all")}
          </div>
        </div>

        <SkillsList
          skills={skillsRight}
          baseIndex={skillsLeft.length}
          registerItem={registerItem}
          className="flex-1 max-lg:order-3 max-lg:w-full"
        />
      </div>

      {!isTouchDevice && <SkillsGlowCursor cursorRef={cursorRef} />}
    </section>
  );
}
