import React from "react";
import AboutMeText from "../components/about-me/AboutMeText";
import AboutMeImage from "../components/about-me/AboutMeImage";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="container mx-auto px-4 py-24 min-h-[78vh] flex flex-col md:flex-row-reverse items-center justify-between gap-12"
    >
      <div className="w-full md:w-7/12">
        <AboutMeImage />
      </div>
      <div className="w-full md:w-5/12">
        <AboutMeText />
      </div>
    </section>
  );
}
