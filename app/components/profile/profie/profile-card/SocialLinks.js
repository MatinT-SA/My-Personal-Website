import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/matin-taherzadeh-sa",
      color: "hover:text-[rgb(0,0,204)]",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/matin_taherzadeh_sa/",
      color: "hover:text-[rgb(255,0,191)]",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/MatinT-SA",
      color: "hover:text-[rgb(255,123,0)]",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/MatinT_SA",
      color: "hover:text-[rgb(86,154,243)]",
    },
  ];

  return (
    <div className="flex gap-5 mt-7 text-xl text-blue-light">
      {links.map(({ icon, url, color }, idx) => (
        <a key={idx} href={url} target="_blank" rel="noopener" aria-label={url}>
          {React.cloneElement(icon, { className: `transition ${color}` })}
        </a>
      ))}
    </div>
  );
}
