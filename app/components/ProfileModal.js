"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

export default function ProfileModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-modal-pop"
        style={{
          background: "rgba(168,198,222,0.25)",
          border: "1.5px solid var(--color-purple-tertiary)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{
            background: "linear-gradient(90deg, #a8c6de 60%, #231e39 100%)",
            borderRadius: "16px 16px 0 0",
            boxShadow: "0 2px 8px rgba(168,198,222,0.15)",
          }}
        >
          <h4 className="text-lg font-bold text-purple-900 tracking-wide">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-300 to-purple-700 bg-clip-text text-transparent">
              &lt;Web&gt; Matin Taherzadeh &lt;/Developer&gt;
            </span>
          </h4>
          <button
            type="button"
            className="rounded-full bg-white/80 hover:bg-red-500 hover:text-white p-2 transition"
            aria-label="Close"
            onClick={onClose}
          >
            <FaTimes size={22} />
          </button>
        </div>
        {/* Body */}
        <div
          className="flex flex-col items-center justify-center py-6"
          style={{
            background: "rgba(168,198,222,0.3)",
          }}
        >
          <Image
            src="/images/Matin-Taherzadeh-portrait.webp"
            alt="Matin Taherzadeh Enlarged"
            width={354}
            height={472}
            className="rounded-xl border-4 border-purple-800 shadow-lg"
            style={{
              background: "rgba(0,0,0,0.85)",
              padding: "10px",
              objectFit: "cover",
            }}
            priority
          />
        </div>
        {/* Footer */}
        <div
          className="flex justify-center items-center px-6 py-4"
          style={{
            background: "linear-gradient(90deg, #a8c6de 60%, #231e39 100%)",
            borderRadius: "0 0 16px 16px",
            boxShadow: "0 -2px 8px rgba(168,198,222,0.15)",
          }}
        >
          <button
            type="button"
            className="bg-purple-700 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
            onClick={onClose}
          >
            بستن
          </button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes modal-pop {
          0% {
            transform: scale(0.85) translateY(40px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-modal-pop {
          animation: modal-pop 0.4s cubic-bezier(0.4, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
