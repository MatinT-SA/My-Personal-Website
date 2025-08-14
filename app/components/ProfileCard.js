"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full bg-[url('/images/profile-card-bg.svg')] bg-no-repeat bg-cover bg-bottom pt-1 pb-28">
      <div className="w-full max-w-sm mx-auto my-4 bg-purple-primary shadow-2xl pt-0 pb-8 flex flex-col items-center relative rounded-md">
        {/* Cover Photo */}
        <div
          className="w-full h-32 rounded-md -mb-24"
          style={{ backgroundColor: "var(--color-blue-light)" }}
        />

        {/* Profile Image */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/images/Matin-Taherzadeh-portrait.webp"
            alt="Matin Taherzadeh"
            width={127}
            height={160}
            className="rounded-[50%] border-8 border-purple-tertiary shadow-xl hover:opacity-90 transition object-cover ml-52"
            priority
          />
        </div>

        {/* Name & Subtitle */}
        <div className="mt-7 text-center">
          <div className="text-2xl font-bold text-yellow-primary drop-shadow">
            متین طاهرزاده
          </div>
          <div className="text-base text-blue-light mt-1 font-semibold">
            Front-End Developer
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            className="bg-yellow-primary hover:bg-yellow-400 text-purple-primary font-bold px-5 py-2 rounded-xl shadow transition"
            onClick={() => (window.location.href = "#Comment-anchor")}
          >
            ارسال پیام
          </button>
          <button
            className="bg-blue-light hover:bg-blue-400 text-purple-primary font-bold px-5 py-2 rounded-xl shadow transition"
            onClick={() =>
              window.open(
                "https://www.instagram.com/matin_taherzadeh_sa/",
                "_blank"
              )
            }
          >
            در اینستا فالوم کن
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-7 text-2xl text-yellow-primary">
          <a
            href="https://www.linkedin.com/in/matin-taherzadeh-sa"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-light transition" />
          </a>
          <a
            href="https://www.instagram.com/matin_taherzadeh_sa/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a
            href="https://github.com/MatinT-SA"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-purple-tertiary transition" />
          </a>
          <a
            href="https://twitter.com/MatinT_SA"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Modal */}
        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
