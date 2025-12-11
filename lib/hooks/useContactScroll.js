"use client";

import { useCallback } from "react";

export function useContactScroll() {
  const handleScrollToComment = useCallback(() => {
    const commentSection = document.getElementById("comment");
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { handleScrollToComment };
}
