import { useState, useRef, useEffect, useCallback } from "react";

export function useProjects(projects = [], initialVisibleProjects = 5) {
  const PROJECTS = projects;

  const [mounted, setMounted] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(
    initialVisibleProjects
  );

  const containerRef = useRef(null);
  const tooltipTimerRef = useRef(null);
  const slidingTimerRef = useRef(null);

  // Calculate visibleProjects based on screen size
  const calculateVisibleProjects = useCallback(() => {
    if (typeof window === "undefined") return initialVisibleProjects;
    const width = window.innerWidth;
    if (width < 640) return 1; // mobile: 1 column
    if (width < 1024) return 2; // tablet: 2 columns
    if (width < 1280) return 3; // small desktop: 3 columns
    if (width < 1536) return 4; // large desktop: 4 columns
    return 5; // extra large: 5 columns
  }, [initialVisibleProjects]);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
      setVisibleProjects(calculateVisibleProjects());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleProjects]);

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
    visibleProjects: mounted ? visibleProjects : initialVisibleProjects,
    mounted,
  };
}
