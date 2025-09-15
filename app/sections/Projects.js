"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import WistiaVideo from "../components/projects/WistiaVideo";

const PROJECTS = [
  {
    id: "stelix-website",
    name: "Stelix Website",
    description:
      "اولین پروژه ام با Next.js در کنار React و Tailwindcss که در اصل سایت مشتری پروژه قبلی ما یعنی Stelix هست. این وبسایت کاملا ریسپانسیو و مبتنی بر اصول حرفه ای کد نوشته شده که برای سیستم رزرو سوئیت در هتل میباشد.",
    wistiaId: "placeholder-id-1",
  },
  {
    id: "stelix",
    name: "Stelix",
    description:
      "یک پروژه فول استک با استفاده از React، Vite، React Query، Supabase و بسیاری تکنولوژی‌ دیگر. یک سیستم پذیرش هتل که شامل احراز هویت، مدیریت رزروها، عملیات CRUD، فرم‌های پیشرفته و داشبورد تحلیلی می‌باشد.",
    wistiaId: "placeholder-id-2",
  },
  {
    id: "zesty",
    name: "Zesty",
    description:
      "وب اپ ریسپانسیو برای سفارش غذا از رستوران با استفاده از React + Vite. این اپ از Three.js و Redux Toolkit نیز بهره برده و یک تجربه کاربری دلچسب به کاربر می دهد.",
    wistiaId: "placeholder-id-3",
  },
  {
    id: "travex",
    name: "Travex",
    description:
      "یک پروژه ریسپانسیو با ری‌اکت با استفاده از useReducer و Context API برای مدیریت کردن state ها. یک نقشه تعاملگرا با استفاده از leaflet. ابزاری همچون Datepicker, React-toastify, react-router-dom برای یک تجربه کاربری دلچسب",
    wistiaId: "placeholder-id-4",
  },
  {
    id: "rateflicks",
    name: "Rateflicks",
    description:
      "یک اپلیکیشن ری‌اکت برای رتبه‌بندی فیلم ها کاملا ریسپانسیو. قابلیت جستجوی فیلم‌ها، و نمایش بر اساس رتبه بندی ها. قابلیت هایی مانند جستجو، واکشی داده‌ها از API. همچنین از react-spinners و react-toastify استفاده کرده‌ام.",
    wistiaId: "placeholder-id-5",
  },
  {
    id: "project-6",
    name: "پروژه ششم",
    description: "توضیحات پروژه ششم",
    wistiaId: "placeholder-id-6",
  },
  {
    id: "project-7",
    name: "پروژه هفتم",
    description: "توضیحات پروژه هفتم",
    wistiaId: "placeholder-id-7",
  },
  {
    id: "project-8",
    name: "پروژه هشتم",
    description: "توضیحات پروژه هشتم",
    wistiaId: "placeholder-id-8",
  },
  {
    id: "project-9",
    name: "پروژه نهم",
    description: "توضیحات پروژه نهم",
    wistiaId: "placeholder-id-9",
  },
  {
    id: "project-10",
    name: "پروژه دهم",
    description: "توضیحات پروژه دهم",
    wistiaId: "placeholder-id-10",
  },
];

export default function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const visibleProjects = 5;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, PROJECTS.length - visibleProjects)
    );
  };

  const handleAccordionToggle = (projectId) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId);
  };

  return (
    <section
      id="Resume"
      className="padding-top-5 px-4 text-[#a8c6de] py-20"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="main-titles text-center text-3xl font-bold mb-12 text-[--color-purple-primary]">
          نمونه کارها
        </h2>

        <div
          id="accordion"
          className="panel relative flex justify-center items-center"
        >
          <div className="w-6xl bg-white shadow-custom-blue flex justify-center items-center rounded-md">
            {/* Previous Arrow Button (Left side) */}
            <motion.button
              onClick={handlePrev}
              disabled={startIndex >= PROJECTS.length - visibleProjects}
              className={`
                absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2
                ${
                  startIndex >= PROJECTS.length - visibleProjects
                    ? "opacity-0 cursor-default pointer-events-none"
                    : "opacity-100 cursor-pointer"
                }
              `}
              initial={{ opacity: 1 }}
              animate={{
                opacity:
                  startIndex >= PROJECTS.length - visibleProjects ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 text-[--color-blue-light] hover:text-[#dae7f1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </motion.button>

            {/* Slider Window */}
            <div className="w-full overflow-hidden" ref={containerRef}>
              <motion.ul
                id="Resume-items"
                className="flex flex-nowrap w-full"
                animate={{
                  x: `${startIndex * (containerWidth / visibleProjects)}px`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {PROJECTS.map((project) => (
                  <motion.li
                    key={project.id}
                    className="flex-grow flex-shrink-0 relative my-4 px-4 flex flex-col items-center justify-center cursor-pointer group"
                    style={{ flexBasis: `calc(100% / ${visibleProjects})` }}
                  >
                    {/* Custom Tooltip */}
                    <div className="CustomTooltip absolute top-[-70px] right-[-50%] md:right-auto md:left-1/2 md:-translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#fff] text-[#2c1537] text-[13px] p-4 rounded-full shadow-lg transition-opacity duration-300 z-20 whitespace-nowrap">
                      {project.description}
                    </div>

                    <button
                      onClick={() => handleAccordionToggle(project.id)}
                      className={`
                        relative w-full z-10
                        cursor-pointer outline-none border-none overflow-hidden transition-all duration-300
                        p-[0.9rem] px-[1.8rem] text-base font-semibold rounded-sm
                        text-purple-primary bg-[rgba(168,198,222,0.4)]
                        group-hover:text-blue-light
                        ${
                          activeProjectId === project.id
                            ? "bg-purple-primary text-blue-light"
                            : ""
                        }
                      `}
                    >
                      <span
                        className={`
                          absolute inset-0 z-[-1] bg-purple-primary
                          scale-x-0 origin-left transition-transform duration-300 ease-in-out
                          group-hover:scale-x-100 group-hover:shadow-[0_2px_6px_var(--color-purple-primary)]
                        `}
                      ></span>
                      <span className="relative z-20">{project.name}</span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Next Arrow Button (Right side) */}
            <motion.button
              onClick={handleNext}
              disabled={startIndex === 0}
              className={`
                absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2
                ${
                  startIndex === 0
                    ? "opacity-0 cursor-default pointer-events-none"
                    : "opacity-100 cursor-pointer"
                }
              `}
              initial={{ opacity: 1 }}
              animate={{ opacity: startIndex === 0 ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 text-[--color-blue-light] hover:text-[#dae7f1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.button>
          </div>

          {/* Accordion Content */}
          <AnimatePresence mode="wait">
            {activeProjectId && (
              <motion.div
                key={activeProjectId}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <WistiaVideo wistiaId={activeProjectId} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Wistia Player Script */}
      <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" />
    </section>
  );
}
