"use client";

import { useEffect, useRef, useState } from "react";
import ProfileButtons from "./ProfileButtons";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileModal from "../profile-modal/ProfileModal";
import SocialLinks from "./SocialLinks";

export default function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const profileImgRef = useRef();

  const getProfileRect = () => {
    if (profileImgRef.current) {
      return profileImgRef.current.getBoundingClientRect();
    }
    return null;
  };

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 550);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div
      className="relative w-full bg-[url('/images/profile-card-bg.svg')] bg-no-repeat bg-cover bg-bottom pt-1 pb-56 min-h-[71vh] animate-pic-load opacity-0 px-2"
      style={{
        backgroundColor: "var(--color-purple-secondary)",
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`w-full max-w-sm mx-auto my-2 bg-purple-primary shadow-[0_10px_20px_-10px_rgba(0,0,0,0.75)] pt-1 pb-5 flex flex-col items-center relative rounded-md max-[550px]:animate-none animate-float-profile`}
      >
        {/* Cover Photo */}
        <div
          className="w-full h-32 rounded-md -mb-24"
          style={{ backgroundColor: "var(--color-blue-light)" }}
        />

        <ProfileImage
          onClick={handleProfileClick}
          refProp={profileImgRef}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        />

        <ProfileInfo isMobile={isMobile} setIsMobile={setIsMobile} />

        <ProfileButtons />

        <SocialLinks />

        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          getTargetRect={getProfileRect}
        />
      </div>
    </div>
  );
}
