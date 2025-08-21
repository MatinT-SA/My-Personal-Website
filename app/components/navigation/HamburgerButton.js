import React from "react";
import { FaBars } from "react-icons/fa";

export default function HamburgerButton({ openMenu }) {
  return (
    <button
      type="button"
      onClick={openMenu}
      className="block mx-auto p-5 text-center w-12 h-12 text-dark-primary hamburger:hidden"
      aria-label="Open menu"
    >
      <FaBars className="w-8 h-8" />
    </button>
  );
}
