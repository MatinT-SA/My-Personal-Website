import React from "react";
import { FaTimes } from "react-icons/fa";

export default function ModalHeader({ onClose, closing }) {
  return (
    <div
      className="flex items-center justify-between px-6 py-4"
      style={{
        background: "linear-gradient(90deg, #231e39 60%, #a8c6de 100%)",
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 2px 8px rgba(168,198,222,0.15)",
      }}
    >
      <h4 className="text-lg font-bold text-white tracking-wide">
        &lt;Web&gt; Matin Taherzadeh &lt;/Developer&gt;
      </h4>
      <button
        type="button"
        className={`rounded-full bg-white/80 hover:bg-red-400 hover:text-white p-2 transition cursor-pointer flex items-center justify-center`}
        aria-label="Close"
        onClick={!closing ? onClose : undefined}
        style={{ marginLeft: "12px" }}
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
}
