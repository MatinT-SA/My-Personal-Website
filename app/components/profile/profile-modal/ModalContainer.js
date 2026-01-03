import React from "react";

export default function ModalContainer({ show, closing, onClick, children }) {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-md ${
        closing ? "" : "transition-opacity duration-300"
      } ${show ? "opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
