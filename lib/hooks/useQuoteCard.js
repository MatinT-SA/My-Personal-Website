"use client";

import { useState, useCallback } from "react";

export function useQuoteCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = useCallback((id) => {
    setHoveredCard(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  const isHovered = useCallback((id) => hoveredCard === id, [hoveredCard]);

  return {
    hoveredCard,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
  };
}
