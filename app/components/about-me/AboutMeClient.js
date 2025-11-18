// app/components/about-me/AboutMeClient.jsx
"use client";

import dynamic from "next/dynamic"; // 👈 Dynamic import now happens here
import { forwardRef } from "react";
import GithubContributions from "./GithubContributions";

// Dynamically import the client-only text component here!
const AboutMeTextClient = dynamic(
  () => import("@/app/components/about-me/AboutMeText"),
  { ssr: false } // 👈 ssr: false is now safe inside the Client Component
);

const AboutMeClient = forwardRef(function AboutMeClient(
  { children, githubData },
  ref
) {
  // Note: The children prop still contains the AboutMeImage component from the server.

  return (
    <section
      id="about-me"
      className="container scroll-mt-20 mx-auto px-4 py-4 min-h-[78vh] flex flex-col md:flex-row-reverse items-center justify-between gap-12"
      ref={ref}
    >
      {/* children renders AboutMeImage */}
      {children}

      <div className="flex flex-col w-full md:w-6/12">
        {/* Render the dynamically loaded AboutMeTextClient */}
        <AboutMeTextClient />

        {/* Render the contribution graph, passing data fetched by the server */}
        <GithubContributions data={githubData} />
      </div>
    </section>
  );
});

export default AboutMeClient;
