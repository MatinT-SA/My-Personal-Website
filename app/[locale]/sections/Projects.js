"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Script from "next/script";

import WistiaVideo from "@/app/components/projects/WistiaVideo";
import { useTranslations } from "next-intl";
import { getProjectsData } from "@/app/src/constants/projectsData";

const Projects = forwardRef(function Projects(props, ref) {
  const [startIndex, setStartIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef(null);
  const visibleProjects = 5;

  const tooltipTimerRef = useRef(null);
  const slidingTimerRef = useRef(null);

  const t = useTranslations("projects");
  const PROJECTS = getProjectsData(t);

  const [tooltip, setTooltip] = useState({
    content: null,
    visible: false,
    x: 0,
    y: 0,
  });

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

  const handleNext = () => {
    setIsSliding(true);
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, PROJECTS.length - visibleProjects)
    );
    clearTimeout(slidingTimerRef.current);
    slidingTimerRef.current = setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsSliding(true);
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    clearTimeout(slidingTimerRef.current);
    slidingTimerRef.current = setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  const handleAccordionToggle = (projectId) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId);
  };

  const handleMouseEnter = (event, description) => {
    if (isSliding) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const TOOLTIP_HEIGHT = 120;
    const TOOLTIP_GAP = 15;
    const TOOLTIP_DELAY = 100;

    clearTimeout(tooltipTimerRef.current);
    tooltipTimerRef.current = setTimeout(() => {
      setTooltip({
        content: description,
        visible: true,
        x: rect.left - rect.width / 8,
        y: rect.top - TOOLTIP_HEIGHT - TOOLTIP_GAP,
      });
    }, TOOLTIP_DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimerRef.current);
    setTooltip({ ...tooltip, visible: false });
  };

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId);

  return (
    <section
      id="projects"
      ref={ref}
      className="padding-top-5 px-4 text-[#a8c6de] py-20 scroll-mt-10"
      dir="rtl"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="main-titles text-center text-3xl font-bold mb-12 text-purple-primary"
        >
          نمونه کارها
        </motion.h2>

        <div id="accordion" className="panel relative flex justify-center">
          <motion.button
            onClick={handlePrev}
            // ✅ FIX: Disabled when startIndex is 0 (the beginning of the list)
            disabled={startIndex === 0}
            className={`
    absolute left-20 top-1/2 -translate-y-1/2 z-10 p-2
    ${
      // ✅ FIX: Hidden when startIndex is 0
      startIndex === 0
        ? "opacity-0 cursor-default pointer-events-none"
        : "opacity-100 cursor-pointer"
    }
  `}
            initial={{ opacity: 1 }}
            animate={{
              // ✅ FIX: Animate opacity to 0 when startIndex is 0
              opacity: startIndex === 0 ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-light hover:text-[#dae7f1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>
          <motion.div
            className="w-6xl bg-white shadow-custom-blue rounded-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center relative">
              <div className="w-full overflow-hidden" ref={containerRef}>
                <motion.ul
                  id="Resume-items"
                  className="flex flex-nowrap w-full"
                  animate={{
                    x: `${startIndex * (containerWidth / visibleProjects)}px`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {PROJECTS.map((project) => (
                    <motion.li
                      key={project.id}
                      className="flex-grow flex-shrink-0 relative my-4 px-4 flex flex-col items-center justify-center cursor-pointer group"
                      style={{ flexBasis: `calc(100% / ${visibleProjects})` }}
                      onMouseEnter={(e) =>
                        handleMouseEnter(e, project.description)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => handleAccordionToggle(project.id)}
                        className={`
                    relative w-full z-10
                    cursor-pointer outline-none border-none overflow-hidden transition-all duration-300
                    p-[0.9rem] px-[1.8rem] text-base font-semibold rounded-sm
                    text-purple-primary bg-[rgba(168,198,222,0.4)]
                    group-hover:text-blue-light
                    ${
                      activeProjectId === project.id
                        ? "bg-purple-primary !text-blue-light"
                        : ""
                    }
                  `}
                      >
                        <span
                          className={`
                      absolute inset-0 z-[-1] bg-purple-primary
                      scale-x-0 origin-left transition-transform duration-300 ease-in-out
                      group-hover:scale-x-100 group-hover:shadow-[0_2px_6px_var(--color-purple-primary)]
                    `}
                        ></span>
                        <span className="relative z-20">{project.name}</span>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            <AnimatePresence>
              {activeProject && (
                <motion.div
                  key="accordion-panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="my-8 mx-auto max-w-2xl"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "linear" }}
                    >
                      <WistiaVideo wistiaId={activeProject.wistiaId} />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.button
            onClick={handleNext}
            // ✅ CHECK: Disabled when startIndex is at its maximum (the end of the list)
            disabled={startIndex >= PROJECTS.length - visibleProjects}
            className={`
    absolute right-20 top-1/2 -translate-y-1/2 z-10 p-2
    ${
      // ✅ CHECK: Hidden when startIndex is at its maximum
      startIndex >= PROJECTS.length - visibleProjects
        ? "opacity-0 cursor-default pointer-events-none"
        : "opacity-100 cursor-pointer"
    }
  `}
            initial={{ opacity: 1 }}
            animate={{
              // ✅ CHECK: Animate opacity to 0 when at the maximum index
              opacity: startIndex >= PROJECTS.length - visibleProjects ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-light hover:text-[#dae7f1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" />

      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: tooltip.y,
              left: tooltip.x,
              transform: "translateX(-50%)",
            }}
            className="bg-[#fff] text-[#2c1537] text-[13px] p-4 rounded-full shadow-lg z-[9999] pointer-events-none w-[400px] text-center"
          >
            {tooltip.content}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Projects;
