"use client";

import React, { useState, useRef, useEffect } from "react";
import { jobData } from "../src/constants/experience";
import TimelineElement from "../components/experience/TimelineElement";

const Link = ({ children, href }) => (
  <a href={href} className="inline-block">
    {children}
  </a>
);

const ExperiencePage = () => {
  // Define the background style object
  const backgroundStyle = {
    backgroundImage: "linear-gradient(to right, #fff, #ffe6ff 80%)",
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen p-6 sm:p-10"
      style={backgroundStyle} // Apply the custom style here
    >
      {/* Header and Back Button */}
      <div className="max-w-7xl mx-auto pb-10 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-0">
          سابقه کاری
        </h1>
        <Link href="/">
          {/* Styling the link to look like a clean button */}
          <button className="px-6 py-2 bg-purple-primary text-blue-light rounded-full shadow-lg hover:bg-blue-light hover:text-purple-primary transition duration-300 transform hover:scale-105">
            بازگشت به خانه
          </button>
        </Link>
      </div>

      {/* --- Vertical Timeline Container --- */}
      <div className="max-w-7xl mx-auto">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical Line in the Center (The spine of the timeline) */}
          <div
            className="border-2 border-purple-primary absolute border-opacity-20 h-full right-1/2 rounded-full hidden md:block"
            style={{ borderStyle: "dotted" }}
          ></div>

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
