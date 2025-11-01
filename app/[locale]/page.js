"use client";

import { useRef, useState, useEffect, use } from "react";
import AboutMe from "./sections/AboutMe";
import Comment from "./sections/Comment";
import Contact from "./sections/Contact";
import Entrepreneur from "./sections/Entrepreneur";
import Footer from "./sections/Footer";
import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import GithubRepositoryButton from "../components/projects/GithubRepositoryButton";
import ProjectsPageButton from "../components/projects/ProjectsPageButton";
import ProjectsPopup from "../components/projects/ProjectsPopup";
import Loader from "../components/Loader";
import { AnimatePresence } from "framer-motion";
import GoToTopButton from "../components/GoToTopButton";
import { setRequestLocale } from "next-intl/server";

export default function Home({ params }) {
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { locale } = use(params);
  setRequestLocale(locale);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    const timeoutId = setTimeout(handleLoad, 5000);
    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const entrepreneurRef = useRef(null);
  const contactRef = useRef(null);
  const commentRef = useRef(null);

  const allRefs = {
    home: homeRef,
    "about-me": aboutMeRef,
    skills: skillsRef,
    projects: projectsRef,
    entrepreneur: entrepreneurRef,
    contact: contactRef,
    comment: commentRef,
  };

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [allRefs]);

  return (
    <main>
      <HomeSection ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Entrepreneur ref={entrepreneurRef} />
      <Contact ref={contactRef} />
      <Comment ref={commentRef} />
      <Footer />
      <GithubRepositoryButton activeSectionId={activeSectionId} />
      <ProjectsPageButton
        activeSectionId={activeSectionId}
        onButtonClick={() => setIsPopupOpen(true)}
      />

      <GoToTopButton aboutMeRef={aboutMeRef} />

      <AnimatePresence>
        {loading && <Loader />}
        {isPopupOpen && <ProjectsPopup onClose={() => setIsPopupOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
