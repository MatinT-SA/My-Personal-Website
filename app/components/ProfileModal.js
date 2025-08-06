"use client";

import Image from "next/image";

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="relative bg-purple-secondary p-6 rounded-2xl max-w-[90vw] max-h-[90vh] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-yellow-primary hover:text-red-500"
          aria-label="بستن"
        >
          &times;
        </button>
        <h4 className="text-lg font-bold mb-4 text-center text-yellow-primary">
          &lt;Web&gt; Matin Taherzadeh &lt;/Programmer&gt;
        </h4>
        {/* Modal Image */}
        <Image
          src="/images/Matin-Taherzadeh-portrait.webp"
          alt="Matin Taherzadeh Enlarged"
          width={500}
          height={500}
          className="rounded-xl object-cover mx-auto"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
