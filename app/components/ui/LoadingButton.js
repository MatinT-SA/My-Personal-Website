"use client";

import LoadingSpinner from "./icons/LoadingSpinner";

export default function LoadingButton({
  isLoading,
  onClick,
  children,
  loadingText,
  icon,
  spinnerSize = "h-5 w-5",
  className = "",
  disabled = false,
}) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        cursor-pointer relative flex items-center gap-2 transition-all duration-300 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size={spinnerSize} />
          {loadingText && <span>{loadingText}</span>}
        </>
      ) : (
        <>
          <span>{children}</span>
          {icon}
        </>
      )}
    </button>
  );
}
