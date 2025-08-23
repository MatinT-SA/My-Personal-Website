"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedHeading() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "به وب سایت من خوش آمدید!",
        "من متین طاهرزاده هستم",
        "توسعه‌دهنده وب و عاشق React.js",
        "با پروژه‌های جذاب و طراحی خلاقانه",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000, // pause before deleting
      startDelay: 500, // small delay before starting
      loop: true,
      showCursor: true,
      cursorChar: "✨", // fancy cursor instead of just "|"
      smartBackspace: true, // only erase what's different
    });

    return () => typed.destroy();
  }, []);

  return (
    <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 mb-4">
      <span ref={el}></span>
    </h1>
  );
}
