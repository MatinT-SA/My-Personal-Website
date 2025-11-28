import AboutMeImage from "@/app/components/about-me/AboutMeImage";
import GithubContributions from "./GithubContributions";

export default function AboutMeImageGraphWrapper({ githubData }) {
  return (
    <div className="flex flex-col items-center w-full">
      <AboutMeImage />
      <GithubContributions data={githubData} />
    </div>
  );
}
