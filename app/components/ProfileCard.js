"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";

export default function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative text-center">
      {/* Profile Image */}
      <Image
        src="/images/Matin-Taherzadeh-portrait.webp"
        alt="Matin Taherzadeh"
        width={150}
        height={150}
        className="mx-auto rounded-full cursor-pointer hover:opacity-80 transition"
        onClick={openModal}
      />

      {/* Profile Modal */}
      <ProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
