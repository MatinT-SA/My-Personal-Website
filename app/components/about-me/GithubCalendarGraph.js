"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Custom Theme Configuration
const customTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "rgba(255, 255, 255, 0.08)", // faint block for empty days
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
};

export default function GithubCalendarGraph({ username }) {
  return (
    <>
      {/* TEXT COLOR OVERRIDE (Confirmed Working) */}
      <style jsx global>{`
        .github-calendar-graph text {
          fill: #a8c6de !important;
          font-size: 12px;
          user-select: none;
        }
      `}</style>

      {/* SCROLLABLE WRAPPER 
         - w-full: Takes full width, relies on parent container for overflow handling
      */}
      <div className="w-full">
        {/* FIXED WIDTH CONTAINER & PADDING
           - min-w-[620px]: Ensures horizontal space for the calendar
           - pt-6: Increased padding top for visual separation (your requested "margin-top")
           - pb-4 px-6: Retains existing bottom and horizontal padding
        */}
        <div className="min-w-[620px] pt-6 pb-4 px-6 github-calendar-graph">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={customTheme}
            colorScheme="dark"
            // Disable default tooltip to avoid conflicts
            toolTip={false}
            // Inject Custom Tooltip Data
            renderBlock={(block, activity) => {
              const count = activity.count;
              const date = activity.date;

              // Correct text formatting (e.g., "3 contributions on 2024-05-12")
              const label =
                count === 0
                  ? "No contributions"
                  : `${count} contribution${count > 1 ? "s" : ""}`;

              return React.cloneElement(block, {
                "data-tooltip-id": "my-github-tooltip",
                "data-tooltip-content": `${label} on ${date}`,

                // CRITICAL FIXES for Tooltip Content
                // Explicitly remove all competing native tooltip attributes.
                title: "",
                "aria-label": "", // Remove aria-label which some browsers use for tooltips
                children: null,
              });
            }}
          />
        </div>
      </div>

      {/* TOOLTIP COMPONENT */}
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
