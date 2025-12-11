import { motion } from "framer-motion";

/**
 * Section header for the comment form with animated entrance.
 *
 * @param {Object} props
 * @param {string} props.title - Title text from translations
 * @returns {JSX.Element}
 */
export function CommentHeader({ title }) {
  return (
    <motion.h2
      className="text-center text-3xl font-extrabold text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
  );
}
