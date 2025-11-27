"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Custom Theme Configuration
const customTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "rgba(255, 255, 255, 0.08)",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
};

export default function GithubCalendarGraph({ username }) {
  const t = useTranslations("AboutMe");

  return (
    <>
      <div className="w-full">
        <div className="min-w-[620px] pt-6 pb-4 px-6 github-calendar-graph calendar-wrapper">
          <GitHubCalendar
            username={username}
            blockSize={12}
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
            renderBlock={(block, activity) => {
              const count = Number(activity.count ?? 0);
              const date = activity.date;

              let contributionText = "";

              if (count === 0) {
                contributionText = t("no_contribution");
              } else {
                contributionText = t("contributions", { count: count });
              }

              const finalContent =
                "\u200e" +
                contributionText +
                " " +
                t("on_date") +
                " \u200e" +
                date +
                "\u200e";

              return React.cloneElement(block, {
                "data-tooltip-id": "my-github-tooltip",
                "data-tooltip-content": finalContent,
                title: "",
                "aria-label": "",
                children: null,
              });
            }}
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
