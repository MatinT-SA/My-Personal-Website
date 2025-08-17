import React from "react";

export default function ModalFooter({ onClose, closing }) {
  return (
    <div
      className="flex justify-center items-center px-6 py-4"
      style={{
        background: "linear-gradient(90deg, #a8c6de 0%, #231e39 100%)",
        borderRadius: "0 0 16px 16px",
        boxShadow: "0 -2px 8px rgba(168,198,222,0.15)",
      }}
    >
      <button
        type="button"
        className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition cursor-pointer"
        onClick={!closing ? onClose : undefined}
      >
        بستن
      </button>
    </div>
  );
}
