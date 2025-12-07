"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { customTheme } from "@/lib/config/github";
import { createTooltipBlockRenderer } from "./GithubCalendarTooltipRenderer";

export default function GithubCalendarGraph({ username }) {
  const t = useTranslations("AboutMe");

  const renderBlockWithTooltip = createTooltipBlockRenderer(t);

  return (
    <>
      <div className="w-full">
        <div className="min-w-[580px] py-3 px-6 github-calendar-graph calendar-wrapper">
          <GitHubCalendar
            username={username}
            blockSize={11}
            blockMargin={4}
            fontSize={14}
            theme={customTheme}
            labels={{
              totalCount: `{{count}} ${t("calendar_contributions_text")}`,
              legend: {
                less: t("calendar_less"),
                more: t("calendar_more"),
              },
            }}
            colorScheme="dark"
            toolTip={false}
            renderBlock={renderBlockWithTooltip}
          />
        </div>
      </div>
      <ReactTooltip
        id="my-github-tooltip"
        place="top"
        variant="light"
        style={{
          fontSize: "14px",
          fontWeight: "500",
          zIndex: 9999,
          padding: "8px 12px",
        }}
      />
    </>
  );
}
