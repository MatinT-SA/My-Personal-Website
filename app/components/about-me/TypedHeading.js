"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslations } from "use-intl";

export default function TypedHeading() {
  const t = useTranslations("AboutMe");
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t("heading1"), t("heading2"), t("heading3")],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <h1 className="mb-12 text-xl sm:text-2xl text-center lg:text-3xl italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
      <span ref={el}></span>
    </h1>
  );
}
