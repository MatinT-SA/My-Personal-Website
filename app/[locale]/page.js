import HomeClient from "./HomeClient";
import AboutMeSection from "./sections/AboutMe";

export default function Home() {
  const aboutMeContent = <AboutMeSection />;

  return <HomeClient aboutMeServerContent={aboutMeContent} />;
}
