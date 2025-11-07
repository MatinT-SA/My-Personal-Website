export const getSkillsData = (t) => {
  const skillKeysLeft = [
    "csharp",
    "tailwind",
    "redux",
    "database",
    "wordpress",
    "github",
    "seo",
    "restapi",
  ];

  const skillKeysRight = [
    "javascript",
    "html",
    "react",
    "mern",
    "nextjs",
    "threejs",
    "supabase",
    "responsiveness",
  ];

  const skillsLeft = skillKeysLeft.map((key) =>
    key === "restapi" ? "RESTful API" : t(key)
  );
  const skillsRight = skillKeysRight.map((key) => t(key));

  const circleData = [
    { name: "Frontend", value: 7, color: "#3b82f6" },
    { name: "Backend", value: 3, color: "#22c55e" },
    { name: "Databases", value: 1, color: "#facc15" },
    { name: "Other", value: 4, color: "#a855f7" },
  ];

  const skillCategoryMap = {
    csharp: "Backend",
    tailwind: "Other",
    redux: "Other",
    database: "Databases",
    wordpress: "Other",
    github: "Other",
    seo: "Other",
    restapi: "Backend",

    javascript: "Frontend",
    html: "Frontend",
    react: "Frontend",
    mern: "Backend",
    nextjs: "Frontend",
    threejs: "Frontend",
    supabase: "Databases",
    responsiveness: "Frontend",
  };

  return {
    skillsLeft,
    skillsRight,
    circleData,
    skillCategoryMap,
    skillKeysLeft,
    skillKeysRight,
  };
};
