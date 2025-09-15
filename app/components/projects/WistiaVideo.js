// src/components/projects/WistiaVideo.js
"use client";

import React from "react";

const WistiaVideo = ({ wistiaId }) => {
  return (
    <div
      className="wistia_responsive_padding"
      style={{ padding: "47.92% 0 0 0", position: "relative" }}
    >
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${wistiaId}?web_component=true&seo=true`}
          title="Video Player"
          allow="autoplay; fullscreen; picture-in-picture"
          allowtransparency="true"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default WistiaVideo;
