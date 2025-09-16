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
          className="fixed top-1/3 left-0 z-[10000]"
        >
          <Link
            href="https://github.com/your-username/your-repository"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-[#171515] text-[#a8c6de] py-4 px-6 rounded-r-lg shadow-lg border-2 border-l-0 border-[#171515]"
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
