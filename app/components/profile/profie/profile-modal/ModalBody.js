import Image from "next/image";
import React from "react";

export default function ModalBody() {
  return (
    <div
      className="flex flex-col items-center justify-center py-6 px-4"
      style={{
        background: "rgba(168,198,222,0.3)",
      }}
    >
      <div className="relative aspect-3/4 w-full max-w-[280px] lg:w-[310px] lg:max-w-none">
        <Image
          src="/images/Matin-Taherzadeh-portrait.webp"
          alt="Matin Taherzadeh Enlarged"
          fill
          sizes="(max-width: 1024px) 280px, 354px"
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
    </div>
  );
}
