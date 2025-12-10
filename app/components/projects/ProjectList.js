import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

export default function ProjectList({
  projects,
  startIndex,
  containerWidth,
  visibleProjects,
  onMouseEnterItem,
  onMouseLeaveItem,
  onToggle,
  activeProjectId,
}) {
  return (
    <div className="w-full overflow-hidden">
      <motion.ul
        id="Resume-items"
        className="flex flex-nowrap w-full"
        animate={{ x: `${startIndex * (containerWidth / visibleProjects)}px` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onMouseEnterItem={onMouseEnterItem}
            onMouseLeaveItem={onMouseLeaveItem}
            onToggle={onToggle}
            activeProjectId={activeProjectId}
            visibleProjects={visibleProjects}
          />
        ))}
      </motion.ul>
    </div>
  );
}
