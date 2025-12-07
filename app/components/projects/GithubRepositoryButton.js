"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function GithubRepositoryButton({ activeSectionId }) {
  const isVisible = activeSectionId === "projects";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="fixed top-1/3 left-0 z-10000"
        >
          <Link
            href="https://github.com/MatinT-SA?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-[#171515] text-blue-light py-4 px-6 rounded-r-lg shadow-lg border-2 border-l-0 border-[#171515] hover:px-8 transition-all duration-300 hover:rounded-r-sm hover:shadow-[#0366d6] hover:text-[#0366d6]"
          >
            <FaGithub size={24} />
            <span className="font-semibold text-sm [writing-mode:vertical-lr] [text-orientation:upright]">
              Github
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
