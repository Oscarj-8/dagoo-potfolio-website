import ClientsGlass from "../components/ClientsGlass";
import Hero from "../components/Hero";
import Works from "../components/Works";

function HomePage() {
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <Hero />
      <ClientsGlass />
      <Works />
    </div>
  );
}
export default HomePage;
