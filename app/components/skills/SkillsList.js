"use client";

export default function SkillsList({
  skills = [],
  baseIndex = 0,
  registerItem,
  className = "",
}) {
  return (
    <ul className={`space-y-4 text-center lg:text-right ${className}`}>
           {" "}
      {skills.map((skill, i) => (
        <li
          key={baseIndex + i}
          ref={(el) => registerItem(baseIndex + i, el)}
          className="flex items-center justify-center py-2 text-md font-medium text-dark-primary opacity-100 lg:opacity-0 lg:will-change-[opacity,transform]"
          style={{
            transition: "opacity 100ms linear",
          }}
        >
                    {skill}       {" "}
        </li>
      ))}
         {" "}
    </ul>
  );
}
