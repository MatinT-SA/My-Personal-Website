"use client";

import { FiDownload } from "react-icons/fi";
import TypedHeading from "./TypedHeading";
import { useTranslations } from "next-intl";

export default function AboutMeText() {
  const t = useTranslations("AboutMe");

  return (
    <div className="p-4 sm:px-20 py-4">
      <TypedHeading />

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-12">
        {t("text1")}
        <br />
        {t("text2")}
        <br />
        {t("text3")}
        <br />
        {t("text4")}
        <br />
        {t("text5")}
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/resume/Matin Taherzadeh Resume - 1404-06-03.pdf"
          download
          className="relative px-8 py-4 text-lg font-bold text-blue-light bg-purple-primary rounded-full transition-all duration-300 ease-in-out hover:text-purple-primary hover:bg-blue-300 hover:shadow-lg flex items-center gap-2 hover:gap-3.5"
        >
          {t("button_resume")}
          <FiDownload className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
