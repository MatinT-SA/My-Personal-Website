"use client";

import TypedHeading from "./TypedHeading";
import { useTranslations } from "next-intl";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function AboutMeText() {
  const t = useTranslations("AboutMe");

  return (
    <div className="p-4 py-4 md:px-1 lg:px-10 w-[300px] xs:w-[300px] sm:w-[400px] md:w-[600px] lg:w-full">
      <TypedHeading />

      <p className="text-md sm:text-base md:text-lg text-gray-700 leading-loose sm:leading-8 md:leading-12">
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
