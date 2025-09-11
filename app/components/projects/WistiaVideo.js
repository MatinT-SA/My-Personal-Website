import React from "react";

const WistiaVideo = ({ wistiaId }) => (
  <div className="w-full max-w-[80%] mx-auto mt-8">
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
          title={`Project Video`}
          allow="autoplay; fullscreen"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed rounded-md shadow-md"
          name="wistia_embed"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  </div>
);

export default WistiaVideo;
