import React from "react";

export default function CloseButton({
  onClick,
  ariaLabel = "Close",
  className = "",
  children,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`rounded-full bg-white/80 hover:bg-red-400 hover:text-white p-2 transition cursor-pointer flex items-center justify-center ${className}`}
      aria-label={ariaLabel}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
