"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
import Button from "./Button";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full bg-[url('/images/profile-card-bg.svg')] bg-no-repeat bg-cover bg-bottom pt-1 pb-56 min-h-[71vh] animate-pic-load opacity-0"
      style={{
        backgroundColor: "var(--color-purple-secondary)",
        animationFillMode: "forwards",
      }}
    >
      <div className="w-full max-w-sm mx-auto my-3 bg-purple-primary shadow-[0_10px_20px_-10px_rgba(0,0,0,0.75)] pt-4 pb-5 flex flex-col items-center relative rounded-md animate-float-profile">
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
            className="rounded-[50%] border-8 border-purple-tertiary shadow-xl hover:opacity-90 transition object-cover ml-52 select-none"
            priority
          />
        </div>

        {/* Name & Subtitle */}
        <div className="text-2xl font-bold text-white -mt-10 -ml-28">
          متین طاهرزاده
        </div>
        <div className="text-white mt-10 text-base">Front-End Developer</div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            className="bg-blue-light text-purple-primary border border-purple-primary rounded-sm hover:bg-purple-primary hover:text-blue-light hover:border-blue-light"
            onClick={() => (window.location.href = "#Comment-anchor")}
          >
            ارسال پیام
          </Button>

          <Button
            className="bg-purple-primary text-blue-light border border-blue-light rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary"
            onClick={() =>
              window.open(
                "https://www.instagram.com/matin_taherzadeh_sa/",
                "_blank"
              )
            }
          >
            در اینستا فالوم کن
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-7 text-xl text-blue-light">
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
