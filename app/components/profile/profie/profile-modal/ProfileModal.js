"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalContainer from "./ModalContainer";

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
    <ModalContainer
      show={show}
      closing={closing}
      onClick={!closing ? handleClose : undefined}
    >
      <div
        ref={modalRef}
        className={`relative shadow-2xl max-w-md w-full overflow-auto animate-modal-pop ${
          closing ? "" : "rounded-2xl"
        }`}
        style={{
          background: "rgba(168,198,222,0.25)",
          border: "1.5px solid var(--color-purple-tertiary)",
          maxHeight: "100vh",
          ...modalStyle,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader onClose={handleClose} closing={closing} />
        <ModalBody />
        <ModalFooter onClose={handleClose} closing={closing} />
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
      `}</style>
    </ModalContainer>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
