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
          absolute top-1/2 -translate-y-1/2 z-10 p-2
          -left-5 xs:-left-5 sm:left-0 md:left-4 lg:left-5 xl:left-20
          ${
            startIndex === 0
              ? "opacity-0 cursor-default pointer-events-none"
              : "opacity-100 cursor-pointer transition-opacity"
          }
        `}
      >
        <PrevIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-light hover:text-[#dae7f1]" />
      </button>

      <button
        onClick={onNext}
        disabled={startIndex >= projectsLength - visibleProjects}
        className={`
          absolute top-1/2 -translate-y-1/2 z-10 p-2
          -right-5 xs:-right-5 sm:right-0 md:right-4 lg:right-5 xl:right-20
          ${
            startIndex >= projectsLength - visibleProjects
              ? "opacity-0 cursor-default pointer-events-none"
              : "opacity-100 cursor-pointer transition-opacity"
          }
        `}
      >
        <NextIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-light hover:text-[#dae7f1]" />
      </button>
    </>
  );
}
