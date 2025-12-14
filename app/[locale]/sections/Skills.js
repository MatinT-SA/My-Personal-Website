"use client";

import { useRef, useEffect, useCallback, useState, useMemo } from "react";

import SkillsList from "@/app/components/skills/SkillsList";
import SkillsGlowCursor from "@/app/components/skills/SkillsGlowCursor";
import SkillsCircleControl from "@/app/components/skills/SkillsCircleControl";
import { useTranslations } from "next-intl";
import { getSkillsData } from "@/app/src/constants/skillsData";
import { useSkillsGlow } from "@/lib/hooks/useSkillsGlow";
import { useSkillsMouseHandlers } from "@/lib/hooks/useSkillsMouseHandlers";

export default function Skills() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const positions = useRef([]);

  const t = useTranslations("skills");

  const {
    skillsLeft,
    skillsRight,
    circleData,
    skillCategoryMap,
    skillKeysLeft,
    skillKeysRight,
  } = useMemo(() => getSkillsData(t), [t]);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  const glowUtils = useSkillsGlow(
    itemRefs,
    positions,
    isTouchDevice,
    selectedCategory,
    showAll,
    skillKeysLeft,
    skillKeysRight,
    skillCategoryMap
  );

  const { handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useSkillsMouseHandlers(
      containerRef,
      itemRefs,
      isTouchDevice,
      selectedCategory,
      showAll,
      glowUtils.tick,
      glowUtils
    );

  const registerItem = useCallback((index, el) => {
    itemRefs.current[index] = el;
  }, []);

  const handleSliceClick = useCallback((categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
    setShowAll(false);
  }, []);

  const handleShowAllToggle = useCallback(() => {
    setShowAll((prevShowAll) => !prevShowAll);
    setSelectedCategory(null);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => computePositions(), 50);

    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      glowUtils.cancelRaf();
    };
  }, [computePositions, glowUtils]);

  useEffect(() => {
    glowUtils.tick();
  }, [selectedCategory, showAll, glowUtils.tick]);

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onMouseEnter={isTouchDevice ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      className="relative scroll-mt-24 mx-2 my-8 sm:mx-12 sm:my-16 rounded-lg sm:rounded-[150px_10px] lg:rounded-[300px_15px] bg-blue-light-transparent px-2 py-6 sm:px-6 sm:py-9"
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

        <SkillsCircleControl
          circleData={circleData}
          onSliceClick={handleSliceClick}
          onShowAllToggle={handleShowAllToggle}
          showAll={showAll}
        />

        <SkillsList
          skills={skillsRight}
          baseIndex={skillsLeft.length}
          registerItem={registerItem}
          className="flex-1 max-lg:order-3 max-lg:w-full"
        />
      </div>

      {!isTouchDevice && <SkillsGlowCursor />}
    </section>
  );
}
