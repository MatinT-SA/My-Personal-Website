import Image from "next/image";
import React from "react";

export default function ModalBody() {
  return (
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
  );
}
