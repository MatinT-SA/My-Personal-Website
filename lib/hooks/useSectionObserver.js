import { useEffect, useRef, useState, useMemo } from "react";

export default function useSectionObserver() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const entrepreneurRef = useRef(null);
  const contactRef = useRef(null);
  const commentRef = useRef(null);

  const allRefs = useMemo(
    () => ({
      home: homeRef,
      "about-me": aboutMeRef,
      skills: skillsRef,
      projects: projectsRef,
      entrepreneur: entrepreneurRef,
      contact: contactRef,
      comment: commentRef,
    }),
    []
  );

  const [activeSectionId, setActiveSectionId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = null;
      const scrollPosition = window.scrollY + 150;

      for (const [id, ref] of Object.entries(allRefs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = id;
            break;
          }
        }
      }
      setActiveSectionId(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [allRefs]);

  return { allRefs, activeSectionId };
}
