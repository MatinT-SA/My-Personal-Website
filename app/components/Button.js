"use client";

export default function Button({ onClick, className = "", children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg shadow transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
