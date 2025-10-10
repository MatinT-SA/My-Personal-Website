"use client";

import Button from "../components/Button";
import TimelineElement from "../components/experience/TimelineElement";
import { jobData } from "../src/constants/experience";
import Link from "next/link";

const ExperiencePage = () => {
  const backgroundStyle = {
    backgroundImage: "linear-gradient(to right, #fff, #ffe6ff 80%)",
  };

  return (
    <section
      className="min-h-screen py-6 px-1 sm:py-10 sm:px-2"
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto pb-10 grid sm:grid-row grid-cols-[7fr_1fr] items-center justify-center">
        <h1 className="text-4xl sm:text-5xl flex justify-center font-extrabold text-purple-primary mb-6 sm:mb-0">
          سابقه کاری
        </h1>
        <Link href="/">
          <Button className="bg-purple-primary text-blue-light hover:bg-blue-light hover:text-purple-primary transform hover:scale-105">
            بازگشت به خانه
          </Button>
        </Link>
      </div>

      {/* --- Vertical Timeline Container --- */}
      <div className="max-w-7xl mx-auto">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical Line in the Center (The spine of the timeline) */}
          <div className="border-2 border-purple-primary absolute border-opacity-20 h-full right-1/2 rounded-full hidden md:block"></div>

          {/* The timeline items */}
          {jobData.map((job, index) => (
            <TimelineElement key={job.id} {...job} index={index} />
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="max-w-7xl mx-auto text-center mt-10 p-4 text-gray-500 text-sm">
        <p>
          این سوابق به ترتیب زمانی معکوس (جدیدترین به قدیمی‌ترین) نمایش داده
          شده‌اند.
        </p>
      </div>
    </section>
  );
};

export default ExperiencePage;
