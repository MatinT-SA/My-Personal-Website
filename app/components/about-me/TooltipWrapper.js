// app/components/about-me/TooltipWrapper.js
"use client";

import dynamic from "next/dynamic";

// Dynamic import remains the standard way to handle client-only libraries
const DynamicTooltip = dynamic(
  () => import("react-tooltip").then((mod) => mod.Tooltip),
  { ssr: false }
);

// We define the styles here, applying them directly to prevent external interference.
const customStyles = {
  zIndex: 99999, // Max Z-index
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "4px",
  opacity: 1, // Explicit opacity
  visibility: "visible", // Explicit visibility
};

// This wrapper component is minimal and only renders the aggressively styled tooltip
export default function TooltipWrapper({ id }) {
  if (!id) return null;

  return (
    <DynamicTooltip
      id={id}
      className="github-tooltip-override" // Use the aggressive CSS class
      place="top"
      effect="solid"
      style={customStyles} // Apply inline styles for high precedence
    />
  );
}
