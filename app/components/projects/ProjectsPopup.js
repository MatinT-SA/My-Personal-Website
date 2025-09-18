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
      onClick={onClose}
    >
      <div
        className="bg-purple-primary p-8 rounded-xl shadow-2xl text-center max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-2xl font-bold mb-4">نمونه کارها</h2>
        <p className="text-gray-300 mb-6">
          برای مشاهده تمامی پروژه‌ هایم، دکمه زیر را بزنید
        </p>
        <Link href="/projects" passHref>
          <button
            className="w-full bg-blue-light text-purple-primary cursor-pointer font-semibold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out tracking-normal hover:bg-purple-primary hover:text-blue-light hover:border-blue-light hover:tracking-wide"
            onClick={onClose}
          >
            مشاهده پروژه‌ ها
          </button>
        </Link>
        <button
          className="mt-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
          onClick={onClose}
        >
          بستن
        </button>
      </div>
    </motion.div>
  );
}
