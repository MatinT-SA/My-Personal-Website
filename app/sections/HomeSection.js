import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function HomeSection() {
  return (
    <section id="Home" className="w-full">
      <div className="container-fluid px-4">
        <div className="row">
          <Header />
          <Navigation />
        </div>
      </div>
    </section>
  );
}
