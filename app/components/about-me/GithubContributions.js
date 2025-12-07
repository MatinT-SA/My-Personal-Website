"use client";

import React, { useState, useEffect } from "react";
import GithubCalendarGraph from "./GithubCalendarGraph";
import { useTranslations } from "next-intl";
import GitHubIcon from "../ui/icons/GitHubIcon";
import LoadingSpinner from "../ui/icons/LoadingSpinner";

export default function GithubContributions({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("AboutMe");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-0.5 flex flex-col items-center w-full">
      <div className="w-full max-w-xl bg-[#2D1B69] rounded-xl shadow-lg border border-purple-500/30 overflow-hidden relative min-h-40">
        {/* --- NEW HEADER SECTION with Official GitHub Icon --- */}
        <div className="flex items-center pt-4 px-6">
          <GitHubIcon />
          <h3 className="text-lg font-semibold text-blue-light grow">
            {t("contribution_title")}
          </h3>
        </div>

        {/* --- CONTENT SECTION --- */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <GithubCalendarGraph username="MatinT-SA" />
        )}
      </div>
    </div>
  );
}
