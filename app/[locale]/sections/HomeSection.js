import ProfileCard from "@/app/components/profile/profie/profile-card/ProfileCard";
import Navigation from "../Navigation";

export default function HomeSection() {
  return (
    <section className="w-full">
      <Navigation />
      <ProfileCard />
    </section>
  );
}
