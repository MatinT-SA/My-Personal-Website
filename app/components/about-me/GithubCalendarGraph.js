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
      {/* STYLE OVERRIDE 
         Forces the Month and Day labels to use your specific blue #a8c6de 
      */}
      <style jsx global>{`
        .github-calendar-graph text {
          fill: #a8c6de !important;
          font-size: 12px;
        }
      `}</style>

      {/* SCROLLABLE WRAPPER 
         - overflow-x-auto: Enables the ONE horizontal scrollbar
         - we REMOVED padding here to prevent double scrollbars
      */}
      <div className="overflow-x-auto w-full custom-scrollbar">
        {/* FIXED WIDTH CONTAINER
           - min-w-[720px]: Forces content width > card width to trigger scroll
           - p-4: Padding is applied INSIDE the scrolling element
        */}
        <div className="min-w-[720px] p-4 github-calendar-graph">
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

              // Logic: "1 contribution" vs "5 contributions"
              const label =
                count === 0
                  ? "No contributions"
                  : `${count} contribution${count > 1 ? "s" : ""}`;

              return React.cloneElement(block, {
                "data-tooltip-id": "my-github-tooltip",
                "data-tooltip-content": `${label} on ${date}`,
                children: null, // Hide default children (titles) to fix native tooltip showing up
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
