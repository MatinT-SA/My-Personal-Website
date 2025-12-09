"use client";

import SkillsList from "./SkillsList";
import SkillsCircle from "./SkillsCircle";
import SkillsCircleButton from "./SkillsCircleButton";

export default function SkillsLayout({
  skillsLeft,
  skillsRight,
  circleData,
  skillCategoryMap,
  activeCategory,
  showAll,
  toggleCategory,
  toggleShowAll,
  registerItem,
}) {
  return (
    <div className="flex flex-row items-center justify-around gap-8 max-lg:flex-col max-lg:items-center max-lg:gap-4">
      <SkillsList
        items={skillsLeft}
        baseIndex={0}
        registerItem={registerItem}
        activeCategory={activeCategory}
        skillCategoryMap={skillCategoryMap}
      />

      <div className="hidden xl:flex xl:justify-center relative max-xl:order-first">
        <SkillsCircle data={circleData} onSliceClick={toggleCategory} />
        <SkillsCircleButton showAll={showAll} toggleShowAll={toggleShowAll} />
      </div>

      <SkillsList
        items={skillsRight}
        baseIndex={skillsLeft.length}
        registerItem={registerItem}
        activeCategory={activeCategory}
        skillCategoryMap={skillCategoryMap}
      />
    </div>
  );
}
