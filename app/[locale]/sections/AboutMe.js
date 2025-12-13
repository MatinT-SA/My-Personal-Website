import AboutMeImageGraphWrapper from "@/app/components/about-me/AboutMeImageGraphWrapper";

export default function AboutMeSection({ githubData }) {
  return (
    <>
      <AboutMeImageGraphWrapper githubData={githubData} />
      <div className="flex flex-col w-full"></div>
    </>
  );
}
