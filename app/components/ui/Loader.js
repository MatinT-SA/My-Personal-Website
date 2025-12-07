"use client";

import React from "react";

export default function Loader() {
  const dots = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50">
      <div className="grid grid-cols-3 gap-3">
        {dots.map((dot, index) => (
          <div
            key={dot}
            className="w-4 h-4 rounded-full bg-cyan-400 loader-dot"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
