"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react"; // 👈 Ensure all hooks are imported
import GoToTopButton from "../components/GoToTopButton";
import GithubRepositoryButton from "../components/projects/GithubRepositoryButton";
import ProjectsPageButton from "../components/projects/ProjectsPageButton";
import ProjectsPopup from "../components/projects/ProjectsPopup";
import Comment from "./sections/Comment";
import Contact from "./sections/Contact";
import Entrepreneur from "./sections/Entrepreneur";
import Footer from "./sections/Footer";
import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import AboutMeClient from "../components/about-me/AboutMeClient";

// We now accept the server-rendered content (aboutMeServerContent) and server data (githubData) as props
export default function HomeClient({ aboutMeServerContent, githubData }) {
  // 👇👇👇 THESE LINES WERE MISSING/OMITTED IN THE PREVIOUS SNIPPET 👇👇👇
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
  // 👆👆👆 END OF MISSING/OMITTED CODE 👆👆👆

  return (
    <main>
      <HomeSection ref={homeRef} />

      <AboutMeClient ref={aboutMeRef} githubData={githubData}>
        {aboutMeServerContent}
      </AboutMeClient>

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
        {isPopupOpen && <ProjectsPopup onClose={() => setIsPopupOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
