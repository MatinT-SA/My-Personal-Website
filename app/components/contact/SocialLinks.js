"use client";

import SocialButton from "./SocialButton";

export default function SocialLinks({ socialLinks }) {
  return (
    <div className="flex justify-center flex-wrap gap-y-4 my-16">
      {socialLinks.map((link, index) => (
        <SocialButton key={index} {...link} isEven={index % 2 === 1} />
      ))}
    </div>
  );
}
