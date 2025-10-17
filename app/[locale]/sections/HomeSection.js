import Navigation from "../components/navigation/Navigation";
import ProfileCard from "../components/profile/profie/profile-card/ProfileCard";

export default function HomeSection() {
  return (
    <section id="home" className="w-full">
      <div className="w-full">
        <Navigation />
        <ProfileCard />
      </div>
    </section>
  );
}
