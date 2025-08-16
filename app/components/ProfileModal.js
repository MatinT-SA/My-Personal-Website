"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

export default function ProfileModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
      setClosing(false);
    }
  }, [isOpen]);

  // Handle fancy close animation
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShow(false);
      onClose();
    }, 1800); // Animation duration
  };

  if (!isOpen && !show) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md ${
        closing ? "" : "transition-opacity duration-300"
      } ${show ? "opacity-100" : "opacity-0"}`}
      // Only allow closing if not already closing
      onClick={!closing ? handleClose : undefined}
    >
      <div
        ref={modalRef}
        className={`relative rounded-2xl shadow-2xl max-w-md w-full overflow-auto animate-modal-pop ${
          closing ? "animate-modal-whirlwind" : ""
        }`}
        style={{
          background: "rgba(168,198,222,0.25)",
          border: "1.5px solid var(--color-purple-tertiary)",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
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
            className={`rounded-full bg-white/80 hover:bg-red-400 hover:text-white p-2 transition cursor-pointer flex items-center justify-center ${
              closing ? "animate-icon-squish" : ""
            }`}
            aria-label="Close"
            onClick={!closing ? handleClose : undefined}
            style={{ marginLeft: "12px" }}
          >
            <FaTimes size={18} />
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
            className="rounded-xl shadow-lg"
            style={{
              border: "4px solid var(--color-purple-tertiary)",
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
            background: "linear-gradient(90deg, #a8c6de 0%, #231e39 100%)",
            borderRadius: "0 0 16px 16px",
            boxShadow: "0 -2px 8px rgba(168,198,222,0.15)",
          }}
        >
          <button
            type="button"
            className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition cursor-pointer"
            onClick={!closing ? handleClose : undefined}
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
        @keyframes modal-whirlwind {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0);
          }
          /* 50% {
            transform: scale(0.5) rotate(1440deg);
            opacity: 0.5;
            filter: blur(6px);
          } */
          /* 80% {
            transform: scale(0.3, 0.6) rotate(2160deg);
            opacity: 0.2;
            filter: blur(6px);
          } */
          100% {
            transform: scale(0, 0) rotate(2880deg);
            opacity: 0;
            filter: blur(12px);
          }
        }
        .animate-modal-pop {
          animation: modal-pop 0.4s cubic-bezier(0.4, 0.8, 0.2, 1) forwards;
        }
        .animate-modal-whirlwind {
          animation: modal-whirlwind 1.8s ease-in-out forwards;
        }
        @keyframes icon-squish {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.7) rotate(-20deg);
          }
          100% {
            transform: scale(0.9) rotate(360deg);
          }
        }
        .animate-icon-squish {
          animation: icon-squish 0.5s cubic-bezier(0.7, 0.2, 0.2, 1);
        }
      `}</style>
    </div>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
