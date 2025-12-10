import PrevIcon from "@/app/components/ui/icons/PrevIcon";
import NextIcon from "@/app/components/ui/icons/NextIcon";

export default function ProjectControls({
  startIndex,
  projectsLength,
  visibleProjects,
  onPrev,
  onNext,
}) {
  return (
    <>
      <button
        onClick={onPrev}
        disabled={startIndex === 0}
        className={`
          absolute left-20 top-1/2 -translate-y-1/2 z-10 p-2
          ${
            startIndex === 0
              ? "opacity-0 cursor-default pointer-events-none"
              : "opacity-100 cursor-pointer"
          }
        `}
      >
        <PrevIcon className="w-8 h-8 text-blue-light hover:text-[#dae7f1]" />
      </button>

      <button
        onClick={onNext}
        disabled={startIndex >= projectsLength - visibleProjects}
        className={`
          absolute right-20 top-1/2 -translate-y-1/2 z-10 p-2
          ${
            startIndex >= projectsLength - visibleProjects
              ? "opacity-0 cursor-default pointer-events-none"
              : "opacity-100 cursor-pointer"
          }
        `}
      >
        <NextIcon className="w-8 h-8 text-blue-light hover:text-[#dae7f1]" />
      </button>
    </>
  );
}
