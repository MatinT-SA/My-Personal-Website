import React from "react";
import { FaTimes } from "react-icons/fa";

export default function ModalHeader({ onClose, closing }) {
  return (
    <div
      className="grid grid-cols-[1fr_auto] sm:flex items-center justify-between px-2 sm:px-6 py-4"
      style={{
        background: "linear-gradient(90deg, #231e39 60%, #a8c6de 100%)",
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 2px 8px rgba(168,198,222,0.15)",
      }}
    >
      <h4 className="text-sm xs:text-base sm:text-lg text-center font-bold text-white tracking-wide">
        &lt;Web&gt; Matin Taherzadeh &lt;/Developer&gt;
      </h4>
      <button
        type="button"
        className={`hidden rounded-full ml-1 sm:ml-3 bg-white/80 hover:bg-red-400 hover:text-white p-1 sm:p-2 transition cursor-pointer sm:flex items-center justify-center`}
        aria-label="Close"
        onClick={!closing ? onClose : undefined}
      >
        <FaTimes size={16} />
      </button>
    </div>
  );
}
