"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPopup({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed inset-0 flex items-center justify-center z-[99999] bg-black/50"
      onClick={onClose} // Close popup on overlay click
    >
      <div
        className="bg-gray-800 p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-white text-2xl font-bold mb-4">
          Ready to see my projects?
        </h2>
        <p className="text-gray-300 mb-6">
          Click below to navigate to my projects page.
        </p>
        <Link href="/projects" passHref>
          <button
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Go to Projects
          </button>
        </Link>
        <button
          className="mt-4 text-gray-400 hover:text-gray-200 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}
