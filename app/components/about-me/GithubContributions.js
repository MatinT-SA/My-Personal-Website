"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import GitHubIcon from "../ui/icons/GitHubIcon";
import LoadingSpinner from "../ui/icons/LoadingSpinner";
import GithubCalendarGraph from "./GithubCalendarGraph";

export default function GithubContributions() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("AboutMe");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-0.5 flex flex-col items-center w-full">
      <div className="w-[95%] lg:w-full md:w-max max-w-xl bg-[#2D1B69] rounded-xl shadow-lg border border-purple-500/30 overflow-x-auto overflow-y-hidden">
        <div style={{ minWidth: "850px", width: "100%" }}>
          <div className="flex items-center pt-4 px-6">
            <GitHubIcon />
            <h3 className="text-lg font-semibold text-blue-light grow">
              {t("contribution_title")}
            </h3>
          </div>

          <div className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <LoadingSpinner />
              </div>
            ) : (
              <GithubCalendarGraph username="MatinT-SA" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
