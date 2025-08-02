"use client";

import Image from "next/image";

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
        >
          &times;
        </button>

        {/* Modal Image */}
        <Image
          src="/images/Matin-Taherzadeh-portrait.webp"
          alt="Matin Taherzadeh Enlarged"
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
