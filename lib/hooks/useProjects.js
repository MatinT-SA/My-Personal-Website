import { useState, useRef, useEffect, useCallback } from "react";

export function useProjects(projects = [], visibleProjects = 5) {
  const PROJECTS = projects;

  const [startIndex, setStartIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const containerRef = useRef(null);
  const tooltipTimerRef = useRef(null);
  const slidingTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIsSliding(true);
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, PROJECTS.length - visibleProjects)
    );
    clearTimeout(slidingTimerRef.current);
    slidingTimerRef.current = setTimeout(() => {
      setIsSliding(false);
    }, 500);
  }, [PROJECTS.length, visibleProjects]);

  const handlePrev = useCallback(() => {
    setIsSliding(true);
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    clearTimeout(slidingTimerRef.current);
    slidingTimerRef.current = setTimeout(() => {
      setIsSliding(false);
    }, 500);
  }, []);

  const handleAccordionToggle = useCallback((projectId) => {
    setActiveProjectId((prev) => (prev === projectId ? null : projectId));
  }, []);

  const registerContainer = useCallback((el) => {
    containerRef.current = el;
  }, []);

  return {
    PROJECTS,
    startIndex,
    setStartIndex,
    activeProjectId,
    setActiveProjectId,
    containerWidth,
    isSliding,
    containerRef,
    registerContainer,
    handleNext,
    handlePrev,
    handleAccordionToggle,
    tooltipTimerRef,
    slidingTimerRef,
    visibleProjects,
  };
}
