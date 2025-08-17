import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/profile/profie/profile-card/ProfileCard";

export default function HomeSection() {
  return (
    <section id="home" className="w-full">
      <div className="w-full">
        <Header />
        <Navigation />
        <ProfileCard />
      </div>
    </section>
  );
}
