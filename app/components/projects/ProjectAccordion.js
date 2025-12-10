import { AnimatePresence, motion } from "framer-motion";
import WistiaVideo from "@/app/components/projects/WistiaVideo";

export default function ProjectAccordion({ activeProject }) {
  if (!activeProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="accordion-panel"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="my-8 max-w-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <WistiaVideo wistiaId={activeProject.wistiaId} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
