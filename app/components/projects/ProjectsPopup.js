import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectsPopup({ onClose }) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed inset-0 flex items-center justify-center z-99999 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-purple-primary p-8 rounded-xl shadow-2xl text-center max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-2xl font-bold mb-4">{t("title")}</h2>
        <p className="text-gray-300 mb-6">{t("all_projects_text")}</p>
        <Link
          href="https://matint-sa.github.io/ThreeJS-portfolio/#/projects"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="w-full bg-blue-light text-purple-primary cursor-pointer font-semibold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out tracking-normal hover:bg-purple-primary hover:text-blue-light hover:border-blue-light hover:tracking-wide"
            onClick={onClose}
          >
            {t("view_project")}
          </button>
        </Link>
        <button
          className="mt-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
          onClick={onClose}
        >
          {t("close_button")}
        </button>
      </div>
    </motion.div>
  );
}
