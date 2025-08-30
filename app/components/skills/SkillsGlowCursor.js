"use client";
import { useEffect, useState } from "react";

export default function SkillsGlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const size = 250;

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
        top: pos.y - size / 2,
        left: pos.x - size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
        borderRadius: "50%",
        background: `radial-gradient(circle at center,
      rgba(80, 50, 150, 0.30) 0%,     
      rgba(130, 90, 200, 0.24) 35%,  
      rgba(168, 120, 247, 0.12) 65%, 
      rgba(168, 120, 247, 0.0) 100%)`,
        mixBlendMode: "normal",
        opacity: active ? 1 : 0,
        transition: "opacity 0.3s ease-out",
        zIndex: 50,
      }}
    />
  );
}
