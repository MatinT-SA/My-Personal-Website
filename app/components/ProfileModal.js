"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

export default function ProfileModal({ isOpen, onClose, getTargetRect }) {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setModalStyle({});
    } else {
      setShow(false);
      setClosing(false);
      setModalStyle({});
    }
  }, [isOpen]);

  const handleClose = () => {
    let targetRect = getTargetRect ? getTargetRect() : null;
    if (modalRef.current && targetRect) {
      const modalRect = modalRef.current.getBoundingClientRect();
      const scaleX = targetRect.width / modalRect.width;
      const scaleY = targetRect.height / modalRect.height;
      const translateX =
        targetRect.left +
        targetRect.width / 2 -
        (modalRect.left + modalRect.width / 2);
      const translateY =
        targetRect.top +
        targetRect.height / 2 -
        (modalRect.top + modalRect.height / 2);

      setModalStyle({
        transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY}) rotate(1440deg)`,
        borderRadius: "50%",
        transition:
          "transform 1s cubic-bezier(0.7,0.2,0.2,1), opacity 1s ease-in-out, border-radius 1s cubic-bezier(0.7,0.2,0.2,1)",
        opacity: 0,
      });
    }
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShow(false);
      setModalStyle({});
      onClose();
    }, 1000);
  };

  if (!isOpen && !show) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md ${
        closing ? "" : "transition-opacity duration-300"
      } ${show ? "opacity-100" : "opacity-0"}`}
      onClick={!closing ? handleClose : undefined}
    >
      <div
        ref={modalRef}
        className={`relative shadow-2xl max-w-md w-full overflow-auto ${
          closing ? "" : "rounded-2xl modal-pop"
        }`}
        style={{
          background: "rgba(168,198,222,0.25)",
          border: "1.5px solid var(--color-purple-tertiary)",
          maxHeight: "90vh",
          ...modalStyle,
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
            className={`rounded-full bg-white/80 hover:bg-red-400 hover:text-white p-2 transition cursor-pointer flex items-center justify-center`}
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
    </div>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
