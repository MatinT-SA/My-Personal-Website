"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import ProjectsPopup from "./ProjectsPopup";
import { useState } from "react";

export default function ProjectsPageButton({ activeSectionId }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isVisible = activeSectionId === "projects";

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-1/3 right-0 z-10000"
          >
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex flex-col items-center cursor-pointer justify-center gap-2 bg-slate-800 text-blue-light py-2 px-1 xs:px-2 sm:px-3 md:px-6 rounded-l-lg shadow-lg border-2 border-r-0 border-slate-800 hover:px-8 transition-all duration-300 hover:rounded-l-sm hover:shadow-amber-500 hover:text-amber-500"
            >
              <FaLaptopCode size={24} />
              <span className="font-semibold text-sm [writing-mode:vertical-lr] [text-orientation:upright]">
                Projects
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isPopupOpen && <ProjectsPopup onClose={() => setIsPopupOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
