import { motion } from "framer-motion";

export default function ProjectItem({
  project,
  onMouseEnterItem,
  onMouseLeaveItem,
  onToggle,
  activeProjectId,
  visibleProjects,
}) {
  return (
    <motion.li
      className="grow shrink-0 relative my-4 px-4 flex flex-col items-center justify-center cursor-pointer group"
      style={{ flexBasis: `calc(100% / ${visibleProjects})` }}
      onMouseEnter={(e) => onMouseEnterItem(e, project.description)}
      onMouseLeave={onMouseLeaveItem}
    >
      <button
        onClick={() => onToggle(project.id)}
        className={`
          relative w-full z-10
          cursor-pointer outline-none border-none overflow-hidden transition-all duration-300
          p-[0.9rem] px-[1.8rem] text-base font-semibold rounded-sm
          text-purple-primary bg-[rgba(168,198,222,0.4)]
          group-hover:text-blue-light
          ${
            activeProjectId === project.id
              ? "bg-purple-primary text-blue-light!"
              : ""
          }
        `}
      >
        <span
          className={`
            absolute inset-0 z-[-1] bg-purple-primary
            scale-x-0 origin-left transition-transform duration-300 ease-in-out
            group-hover:scale-x-100 group-hover:shadow-[0_2px_6px_var(--color-purple-primary)]
          `}
        ></span>
        <span className="relative z-20">{project.name}</span>
      </button>
    </motion.li>
  );
}
