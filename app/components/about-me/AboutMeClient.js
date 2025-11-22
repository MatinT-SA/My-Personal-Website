"use client";

import dynamic from "next/dynamic";
import { forwardRef } from "react";
import GithubContributions from "./GithubContributions";

const AboutMeTextClient = dynamic(
  () => import("@/app/components/about-me/AboutMeText"),
  { ssr: false }
);

const AboutMeClient = forwardRef(function AboutMeClient(
  { children, githubData },
  ref
) {
  return (
    <section
      id="about-me"
      className="container scroll-mt-20 mx-auto px-4 py-4 min-h-[78vh] flex flex-col md:flex-row-reverse items-center justify-between gap-12"
      ref={ref}
    >
      {children}

      <div className="flex flex-col w-full md:w-6/12">
        <AboutMeTextClient />

        <GithubContributions data={githubData} />
      </div>
    </section>
  );
});

export default AboutMeClient;
