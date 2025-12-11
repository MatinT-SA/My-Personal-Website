import React from "react";
import styles from "./comment.module.css";

/**
 * Renders a button with the liquid animation effect.
 * Styling from comment.module.css includes .liquidButtonContainer
 * and @keyframes CommentButton animation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content inside the button (e.g., "ارسال پیام").
 * @param {string} [props.type="submit"] - The button type (submit, button, reset).
 * @param {boolean} [props.disabled=false] - Whether button is disabled.
 */
export const LiquidButton = ({
  children,
  type = "submit",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.liquidButtonContainer} transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <span>{children}</span>
      <div className={styles.liquid}></div>
    </button>
  );
};
