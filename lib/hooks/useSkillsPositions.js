import { useCallback, useRef } from "react";

export function useSkillsPositions(itemRefs, isTouchDevice) {
  const positions = useRef([]);

  const computePositions = useCallback(() => {
    const cont = document.getElementById("skills");
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

  return {
    positions,
    computePositions,
  };
}
