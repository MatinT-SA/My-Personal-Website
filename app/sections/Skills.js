"use client";

import { motion } from "framer-motion";

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

const listVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

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
        {/* Left skills */}
        <ul className="space-y-6 text-right">
          {skillsLeft.map((skill, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center items-center py-2 text-md font-medium text-dark-primary"
            >
              {skill}
            </motion.li>
          ))}
        </ul>

        {/* Center Animation Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Replace this with a Lottie animation, SVG, or Three.js canvas */}
          <div className="h-80 w-56 rounded-xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg" />
        </motion.div>

        {/* Right skills */}
        <ul className="space-y-6 text-right">
          {skillsRight.map((skill, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center items-center py-2 text-md font-medium text-dark-primary"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
