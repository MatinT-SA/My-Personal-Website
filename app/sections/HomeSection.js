import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";

export default function HomeSection() {
  return (
    <section id="home" className="w-full">
      <div className="w-full mx-auto px-4 py-6">
        <Header />
        <Navigation />

        <ProfileCard />
      </div>
    </section>
  );
}
