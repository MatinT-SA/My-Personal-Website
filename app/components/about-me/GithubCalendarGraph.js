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
        {/* FIXED WIDTH CONTAINER & PADDING */}
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
              // Ensure count is a number, falling back to 0
              const count = Number(activity.count ?? 0);
              const date = activity.date;

              let contributionText = "";

              if (count === 0) {
                contributionText = "No contributions";
              } else {
                // *** FINAL FIX: Simplified, explicit string construction ***
                // Aggressively force String() conversion on count and manually concatenate.
                const plural = count === 1 ? "" : "s";
                contributionText = `${String(count)} contribution${plural}`;
              }

              const finalContent = `${contributionText} on ${date}`;

              // No more complex string extraction needed, just simple substitution.

              return React.cloneElement(block, {
                "data-tooltip-id": "my-github-tooltip",

                // Set the custom tooltip content to the reliable string
                "data-tooltip-content": finalContent,

                // CRITICAL FIX: Explicitly set the native title/aria-label to empty.
                title: "",
                "aria-label": "",
                children: null, // Remove the original children (which includes the conflicting <title> tag)
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
