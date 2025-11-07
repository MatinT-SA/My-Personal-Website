export const getSkillsData = (t) => {
  const skillsLeft = [
    t("csharp"),
    t("tailwind"),
    t("redux"),
    t("database"),
    t("wordpress"),
    t("github"),
    t("seo"),
    "RESTful API",
  ];

  const skillsRight = [
    t("javascript"),
    t("html"),
    t("react"),
    t("mern"),
    t("nextjs"),
    t("threejs"),
    t("supabase"),
    t("responsiveness"),
  ];

  const circleData = [
    { name: "Frontend", value: 7, color: "#3b82f6" },
    { name: "Backend", value: 3, color: "#22c55e" },
    { name: "Databases", value: 1, color: "#facc15" },
    { name: "Other", value: 4, color: "#a855f7" },
  ];

  const skillCategoryMap = {
    "آشنا به زبان برنامه نویسی سی‌شارپ": "Backend",
    "آشنا به Tailwind, Bootstrap, SASS": "Other",
    "آشنا به Redux": "Other",
    "تسلط کافی به SQL Server و MySQL": "Databases",
    "سابقه کار با وردپرس": "Other",
    "تسلط کافی به Git و GitHub": "Other",
    "آشنا با مفاهیم SEO": "Other",
    "RESTful API": "Backend",
    "تسلط کافی به زبان برنامه نویسی JavaScript": "Frontend",
    "مسلط به HTML و CSS": "Frontend",
    "مسلط به کتابخانه ReactJS": "Frontend",
    "برنامه نویسی MERN Stack": "Backend",
    "آشنا به Next.js": "Frontend",
    "آشنا با ThreeJS": "Frontend",
    "آشنا با کتابخانه jQuery": "Frontend",
    "طراحی سایت واکنش گرا": "Frontend",
  };

  return { skillsLeft, skillsRight, circleData, skillCategoryMap };
};
