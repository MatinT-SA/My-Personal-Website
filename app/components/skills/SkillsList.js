"use client";

export default function SkillsList({
  skills = [],
  baseIndex = 0,
  registerItem,
}) {
  return (
    <ul className="space-y-4 text-center">
      {skills.map((skill, i) => (
        <li
          key={baseIndex + i}
          ref={(el) => registerItem(baseIndex + i, el)}
          className="flex items-center justify-center py-2 text-md font-medium text-dark-primary"
          style={{
            opacity: 0,
            transition: "opacity 100ms linear",
            willChange: "opacity, transform",
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
