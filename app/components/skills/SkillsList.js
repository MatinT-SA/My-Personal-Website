"use client";

import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function SkillsList({ skills }) {
  return (
    <ul className="space-y-6 text-right">
      {skills.map((skill, i) => (
        <motion.li
          key={i}
          custom={i}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center py-2 text-md font-medium text-dark-primary"
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
}
