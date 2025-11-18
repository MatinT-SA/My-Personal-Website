// app/[locale]/sections/AboutMe.js
// NOTE: "use client" MUST NOT be here.

import AboutMeImage from "@/app/components/about-me/AboutMeImage";
// REMOVE: import dynamic from "next/dynamic";
// REMOVE: const AboutMeTextClient = dynamic(...)

// This component is now a pure Server Component for structure/content
// It will render the image and a placeholder for the text.
export default function AboutMeSection() {
  return (
    <>
      <AboutMeImage />
      <div className="flex flex-col w-full md:w-6/12">
        {/* The text component must be rendered by the Client Component (AboutMeClient.jsx)
                  to use ssr: false. We will render it in step 2.
                */}
      </div>
    </>
  );
}
