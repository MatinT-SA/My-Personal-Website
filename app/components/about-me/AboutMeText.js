"use client";

import TypedHeading from "./TypedHeading";
import { useTranslations } from "next-intl";
import ResumeDownloadButton from "./ResumeDownloadButton";

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
        <ResumeDownloadButton />
      </div>
    </div>
  );
}
