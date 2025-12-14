"use client";

import { forwardRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Script from "next/script";
import { getProjectsData } from "@/app/src/constants/projectsData";
import { useTranslations } from "next-intl";
import { useProjects } from "@/lib/hooks/useProjects";
import ProjectControls from "@/app/components/projects/ProjectControls";
import ProjectList from "@/app/components/projects/ProjectList";
import ProjectAccordion from "@/app/components/projects/ProjectAccordion";
import WistiaVideo from "@/app/components/projects/WistiaVideo";

const Projects = forwardRef(function Projects(props, ref) {
  const t = useTranslations("projects");

  const PROJECTS = useMemo(() => getProjectsData(t), [t]);

  const {
    PROJECTS: _projects,
    startIndex,
    containerWidth,
    isSliding,
    containerRef,
    handleNext,
    handlePrev,
    handleAccordionToggle,
    activeProjectId,
    visibleProjects,
    tooltipTimerRef,
  } = useProjects(PROJECTS, 5);

  const [tooltip, setTooltip] = useState({
    content: null,
    visible: false,
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (event, description) => {
    if (isSliding) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const TOOLTIP_HEIGHT = 120;
    const TOOLTIP_GAP = 15;
    const TOOLTIP_DELAY = 100;

    clearTimeout(tooltipTimerRef.current);
    tooltipTimerRef.current = setTimeout(() => {
      setTooltip({
        content: description,
        visible: true,
        x: rect.left - rect.width / 12,
        y: rect.top - TOOLTIP_HEIGHT - TOOLTIP_GAP,
      });
    }, TOOLTIP_DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimerRef.current);
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId);

  return (
    <section
      id="projects"
      ref={ref}
      className="padding-top-5 px-4 text-blue-light py-20 scroll-mt-10"
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
          {t("title")}
        </motion.h2>

        <div
          id="accordion"
          className="panel relative flex justify-center px-2 sm:px-8 md:px-12 lg:px-20"
        >
          <ProjectControls
            startIndex={startIndex}
            projectsLength={PROJECTS.length}
            visibleProjects={visibleProjects}
            onPrev={handlePrev}
            onNext={handleNext}
          />

          <motion.div
            className="w-full max-w-6xl bg-white shadow-custom-blue rounded-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center relative">
              <div className="w-full overflow-hidden" ref={containerRef}>
                <ProjectList
                  projects={PROJECTS}
                  startIndex={startIndex}
                  containerWidth={containerWidth}
                  visibleProjects={visibleProjects}
                  onMouseEnterItem={handleMouseEnter}
                  onMouseLeaveItem={handleMouseLeave}
                  onToggle={handleAccordionToggle}
                  activeProjectId={activeProjectId}
                />
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

          <ProjectAccordion activeProject={activeProject} />
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
            className="bg-white text-purple-secondary text-xs p-2 sm:p-3 md:p-4 rounded-lg sm:xl md:rounded-full shadow-lg z-9999 pointer-events-none w-[300px] sm:w-[360px] md:w-[400px] text-center"
          >
            {tooltip.content}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Projects;
