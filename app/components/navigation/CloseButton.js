import React from "react";
import { FaTimes } from "react-icons/fa";

export default function CloseButton({ closeMenu }) {
  return (
    <button
      type="button"
      onClick={closeMenu}
      className="fixed top-6 right-6 z-50 text-white"
      aria-label="Close menu"
    >
      <FaTimes className="w-5 h-5" />
    </button>
  );
}
