"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

import GoToTopButton from "../components/GoToTopButton";
import GithubRepositoryButton from "../components/projects/GithubRepositoryButton";
import ProjectsPageButton from "../components/projects/ProjectsPageButton";
import ProjectsPopup from "../components/projects/ProjectsPopup";
import AboutMeClient from "../components/about-me/AboutMeClient";

import Comment from "./sections/Comment";
import Contact from "./sections/Contact";
import Entrepreneur from "./sections/Entrepreneur";
import Footer from "./sections/Footer";
import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function HomeClient({ aboutMeServerContent, githubData }) {
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

  return (
    <main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              marginBottom: "1.5rem",
              marginLeft: "1.5rem",
              color: "text-purple-primary",
              borderRadius: "10px",
              padding: ".5rem 1rem",
              fontSize: "1rem",
              maxWidth: "400px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            },
          },
          error: {
            style: {
              marginBottom: "1.5rem",
              marginLeft: "1.5rem",
              borderRadius: "10px",
              color: "red",
              padding: ".75rem 1.25rem",
              fontSize: "1.2rem",
              maxWidth: "400px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            },
          },
        }}
      />

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
