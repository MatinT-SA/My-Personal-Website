"use client";

export default function SkillsCircleButton({ showAll, toggleShowAll }) {
  return (
    <div
      onClick={toggleShowAll}
      className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer font-bold text-center text-sky-900 transition-opacity duration-300"
    >
      {showAll ? "Hide All" : "Show All"}
    </div>
  );
}
