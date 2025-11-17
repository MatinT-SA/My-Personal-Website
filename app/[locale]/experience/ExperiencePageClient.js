"use client";

import Button from "@/app/components/Button";
import TimelineElement from "@/app/components/experience/TimelineElement";
import { getJobData } from "@/app/src/constants/experience";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ExperiencePageClient() {
  const t = useTranslations("experience");
  const jobData = getJobData(t);

  return (
    <section className="min-h-screen py-6 px-1 sm:py-10 sm:px-2">
      <div className="max-w-7xl mx-auto pb-10 grid sm:grid-row grid-cols-[7fr_1fr] items-center justify-center">
        <h1 className="text-4xl sm:text-5xl flex justify-center font-extrabold text-purple-primary mb-6 sm:mb-0">
          {t("title")}
        </h1>

        <Link href="/">
          <Button className="bg-purple-primary text-blue-light hover:bg-blue-light hover:text-purple-primary transform hover:scale-105">
            {t("returnHome")}
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2 border-purple-primary absolute border-opacity-20 h-full right-1/2 rounded-full hidden md:block"></div>
          {jobData.map((job, index) => (
            <TimelineElement key={job.id} {...job} index={index} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-4 text-gray-500 text-sm">
        <p>{t("below_text")}</p>
      </div>
    </section>
  );
}
