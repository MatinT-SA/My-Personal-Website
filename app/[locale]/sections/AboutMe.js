"use client";

import React from "react";
import { motion } from "framer-motion";

import AboutMeText from "@/app/components/about-me/AboutMeText";
import AboutMeImage from "@/app/components/about-me/AboutMeImage";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="container scroll-mt-20 mx-auto px-4 py-4 min-h-[78vh] flex flex-col md:flex-row-reverse items-center justify-between gap-12"
    >
      <motion.div
        className="w-full md:w-6/12"
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <AboutMeImage />
      </motion.div>

      <motion.div
        className="w-full md:w-6/12"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <AboutMeText />
      </motion.div>
    </section>
  );
}
