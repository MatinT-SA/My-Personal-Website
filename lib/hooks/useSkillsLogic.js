"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const HIGHLIGHT_RADIUS = 260;
const FALL_OFF = 1.0;

export function useSkillsLogic(
  skillsLeft,
  skillsRight,
  skillKeysLeft,
  skillKeysRight,
  skillCategoryMap
) {
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
  const [showAll, setShowAll] = useState(false);

  const handleSliceClick = useCallback((categoryName) => {
    setSelectedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
    setShowAll(false);
  }, []);

  const handleShowAllClick = useCallback(() => {
    setShowAll((prev) => !prev);
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
        if (showAll || isSelected) finalOpacity = max;
        else return;
      } else if (showAll) finalOpacity = max;
      else if (isSelected) finalOpacity = max;
      else finalOpacity = glowOpacity;

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
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
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

  return {
    containerRef,
    cursorRef,
    registerItem,
    selectedCategory,
    showAll,
    handleSliceClick,
    handleShowAllClick,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isTouchDevice,
  };
}
