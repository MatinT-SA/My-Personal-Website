"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedHeading() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["به وب سایت من خوش آمدید!"],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4">
      <span ref={el}></span>
    </h1>
  );
}
