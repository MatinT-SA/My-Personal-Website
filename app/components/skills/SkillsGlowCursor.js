"use client";
import { useEffect, useState } from "react";

export default function SkillsGlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const skills = document.getElementById("skills");

    const handleMove = (e) => {
      if (!skills) return;
      const rect = skills.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setActive(true);
        setPos({ x: e.clientX, y: e.clientY });
      } else {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y - 200,
        left: pos.x - 200,
        width: 400,
        height: 400,
        pointerEvents: "none",
        borderRadius: "50%",
        background: `radial-gradient(circle at center,
  rgba(35, 30, 57, 0.7) 0%,     /* deep purple */
  rgba(111, 66, 193, 0.45) 35%, /* mid purple */
  rgba(168, 85, 247, 0.25) 65%, /* neon purple */
  rgba(168, 85, 247, 0.0) 100%)`,
        mixBlendMode: "normal",
        opacity: active ? 1 : 0,
        transition: "opacity 0.3s ease-out",
        zIndex: 50,
      }}
    />
  );
}
