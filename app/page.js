import AboutMe from "./sections/AboutMe";
import Comment from "./sections/Comment";
import Contact from "./sections/Contact";
import EntrepreneurQuotes from "./sections/EntrepreneurQuotes";
import Footer from "./sections/Footer";
import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutMe />
      <Skills />
      <Projects />
      <EntrepreneurQuotes />
      <Contact />
      <Comment />
      <Footer />
    </main>
  );
}
