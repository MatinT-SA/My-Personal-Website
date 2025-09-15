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
    wistiaId: "tp8e04tq2i",
  },
  {
    id: "stelix",
    name: "Stelix",
    description:
      "یک پروژه فول استک با استفاده از React، Vite، React Query، Supabase و بسیاری تکنولوژی‌ دیگر. یک سیستم پذیرش هتل که شامل احراز هویت، مدیریت رزروها، عملیات CRUD، فرم‌های پیشرفته و داشبورد تحلیلی می‌باشد.",
    wistiaId: "ei6wx8l1ph",
  },
  {
    id: "zesty",
    name: "Zesty",
    description:
      "وب اپ ریسپانسیو برای سفارش غذا از رستوران با استفاده از React + Vite. این اپ از Three.js و Redux Toolkit نیز بهره برده و یک تجربه کاربری دلچسب به کاربر می دهد.",
    wistiaId: "yug44k97un",
  },
  {
    id: "travex",
    name: "Travex",
    description:
      "یک پروژه ریسپانسیو با ری‌اکت با استفاده از useReducer و Context API برای مدیریت کردن state ها. یک نقشه تعاملگرا با استفاده از leaflet. ابزاری همچون Datepicker, React-toastify, react-router-dom برای یک تجربه کاربری دلچسب",
    wistiaId: "yzs3wso7l9",
  },
  {
    id: "rateflicks",
    name: "Rateflicks",
    description:
      "یک اپلیکیشن ری‌اکت برای رتبه‌بندی فیلم ها کاملا ریسپانسیو. قابلیت جستجوی فیلم‌ها، و نمایش بر اساس رتبه بندی ها. قابلیت هایی مانند جستجو، واکشی داده‌ها از API. همچنین از react-spinners و react-toastify استفاده کرده‌ام.",
    wistiaId: "1xj3edyvq7",
  },
  {
    id: "goal-tracker",
    name: "Goal Tracker",
    description:
      "این پروژه یک اپلیکیشن کاملاً واکنش‌گرای React برای ردیابی اهداف بر اساس اولویت‌بندی آن‌هاست. برنامه دارای یک نوار پیشرفت برای نمایش وضعیت اهداف تکمیل‌شده است و با استفاده از React Hooks (مانند useState و useEffect) و مفاهیم پیشرفته‌ای چون forwardRef، به یک اپلیکیشن مدرن و کاربردی تبدیل شده است.",
    wistiaId: "ccdh5lh9yp",
  },
  {
    id: "findish",
    name: "Findish",
    description:
      "این پروژه یک اپلیکیشن دستور پخت کاملاً واکنش‌گراست که با استفاده از جاوااسکریپت خالص (Vanilla JS) و SASS توسعه داده شده است. این برنامه با ادغام API، به کاربران امکان می‌دهد دستور پخت‌های مختلف را جستجو، کشف و به لیست خود اضافه کنند.",
    wistiaId: "ntkhrzhd9x",
  },
  {
    id: "banklist",
    name: "Banklist",
    description:
      "پروژه Banklist یک راه‌حل کامل بانکی است که از دو بخش مجزا تشکیل شده است: یک وبسایت با رابط کاربری جذاب و انیمیشن‌های چشم‌نواز برای مشتریان، و یک وب‌اپلیکیشن کاملاً واکنش‌گرا برای کارمندان. این وب‌اپلیکیشن که عمدتاً با جاوااسکریپت (فرانت‌اند) توسعه یافته، برای مدیریت و نمایش تراکنش‌های بانکی به صورت داینامیک طراحی شده است. از ویژگی‌های برجسته آن می‌توان به رابط کاربری روان، قابلیت‌های فیلتر پیشرفته و نمایش کاربردی طیف وسیعی از متدهای آرایه در جاوااسکریپت اشاره کرد.",
    wistiaId: "9gi2lfw6g1",
  },
  {
    id: "tele-note",
    name: "TeleNote",
    description:
      "TeleNote یک اپلیکیشن شبکه‌اجتماعی کامل است که با استفاده از پشته فناوری MERN توسعه یافته است. کاربران می‌توانند حساب کاربری ایجاد کرده و به راحتی فعالیت‌ها و لحظات خود را با دیگران به اشتراک بگذارند. این برنامه قابلیت‌های کاملی مانند ایجاد، ویرایش و حذف پست‌ها، و همچنین امکاناتی چون لایک کردن، کامنت گذاشتن، جستجوی پیشرفته و صفحه‌بندی را فراهم می‌کند.",
    wistiaId: "vx3wuep3a3",
  },
  {
    id: "track-map",
    name: "Track Map",
    description:
      "یک اپلیکیشن نقشه کاملاً واکنش‌گرا که به کاربران امکان می‌دهد فعالیت‌های خود را بر اساس موقعیت فعلی یا هر مکان دلخواه دیگری ردیابی و ثبت کنند. این اپلیکیشن از APIهای مختلفی مانند Big Data Cloud و OpenStreetMap برای ارائه نقشه‌های دقیق و تعاملی بهره می‌برد.",
    wistiaId: "av0onexjn1",
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

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId);

  return (
    <section
      id="projects"
      className="padding-top-5 px-4 text-[#a8c6de] py-20 scroll-mt-10"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="main-titles text-center text-3xl font-bold mb-12 text-purple-primary">
          نمونه کارها
        </h2>

        <div id="accordion" className="panel relative flex justify-center">
          {/* Previous Arrow Button (Left side) - OUTSIDE the box */}
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
              opacity: startIndex >= PROJECTS.length - visibleProjects ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-light hover:text-[#dae7f1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>

          {/* This container now holds both the slider and the video */}
          <div className="w-6xl bg-white shadow-custom-blue rounded-md">
            <div className="flex justify-center items-center relative">
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
                      <div className="CustomTooltip absolute top-[-70px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#fff] text-[#2c1537] text-[13px] p-4 rounded-full shadow-lg transition-opacity duration-300 z-20 whitespace-nowrap pointer-events-none">
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
                              ? "bg-purple-primary !text-blue-light"
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
            </div>

            {/* Accordion Content is now a child of the box-shadowed div */}
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="my-8 mx-auto max-w-2xl"
                >
                  <WistiaVideo wistiaId={activeProject.wistiaId} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Next Arrow Button (Right side) - OUTSIDE the box */}
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
              className="w-8 h-8 text-blue-light hover:text-[#dae7f1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      {/* Wistia Player Script */}
      <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" />
    </section>
  );
}
