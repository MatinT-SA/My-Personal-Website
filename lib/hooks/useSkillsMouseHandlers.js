import { useCallback } from "react";

export function useSkillsMouseHandlers(
  containerRef,
  itemRefs,
  isTouchDevice,
  selectedCategory,
  showAll,
  tick,
  glowUtils
) {
  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return;
      const cont = containerRef.current;
      if (!cont) return;
      const rect = cont.getBoundingClientRect();
      glowUtils.updateLastPos(e.clientX - rect.left, e.clientY - rect.top);
      glowUtils.scheduleRaf();
    },
    [isTouchDevice, glowUtils]
  );

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "none";
    if (selectedCategory || showAll) tick();
  }, [isTouchDevice, selectedCategory, showAll, tick]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    const cont = containerRef.current;
    if (cont) cont.style.cursor = "auto";

    if (!selectedCategory && !showAll) {
      itemRefs.current.forEach((el) => {
        if (el) el.style.opacity = "0";
      });
    }
  }, [isTouchDevice, selectedCategory, showAll]);

  return {
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
