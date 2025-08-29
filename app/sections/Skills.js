"use client";

import { motion } from "framer-motion";
import SkillsList from "../components/skills/SkillsList";
import SkillsCircle from "../components/skills/SkillsCircle";

const skillsLeft = [
  "آشنا به زبان برنامه نویسی CSharp",
  "آشنا به Tailwind, Bootstrap, SASS",
  "آشنا به Redux",
  "تسلط کافی به SQL Server و MySQL",
  "سابقه کار با وردپرس",
  "تسلط کافی به Git و GitHub",
  "آشنا با مفاهیم SEO",
  "RESTful API",
];

const skillsRight = [
  "تسلط کافی به زبان برنامه نویسی JavaScript",
  "مسلط به HTML و CSS",
  "مسلط به کتابخانه ReactJS",
  "برنامه نویسی MERN Stack",
  "آشنا به Next.js",
  "آشنا با ThreeJS",
  "آشنا با کتابخانه jQuery",
  "طراحی سایت واکنش گرا",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 mx-12 my-16 rounded-[300px_15px] bg-blue-light-transparent p-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl font-extrabold text-sky-900"
      >
        مهارت ها
      </motion.h2>

      <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-3">
        {/* Left Skills */}
        <SkillsList skills={skillsLeft} />

        {/* Middle Circle */}
        <div className="flex justify-center">
          <SkillsCircle />
        </div>

        {/* Right Skills */}
        <SkillsList skills={skillsRight} />
      </div>
    </section>
  );
}
