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
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="fixed top-1/3 left-0 z-[10000]"
        >
          <Link
            href="https://github.com/your-username/your-repository"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#171515] text-[#a8c6de] p-4 pr-6 rounded-r-lg shadow-lg border-2 border-l-0 border-[#171515]"
          >
            <FaGithub size={24} />
            <span className="font-semibold whitespace-nowrap">
              Github Repository
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
