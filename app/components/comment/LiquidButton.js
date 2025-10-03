import React from "react";

/**
 * Renders a button with the liquid animation effect.
 * The styling (including .liquid-button-container and @keyframes) is assumed
 * to be defined in the global CSS file.
 * * @param {Object} props
 * @param {React.ReactNode} props.children - The content inside the button (e.g., "ارسال پیام").
 * @param {string} [props.type="submit"] - The button type (submit, button, reset).
 */
export const LiquidButton = ({ children, type = "submit" }) => {
  return (
    <button
      type={type}
      className="liquid-button-container transition duration-300 ease-in-out"
    >
      <span>{children}</span>
      <div className="liquid"></div>
    </button>
  );
};
