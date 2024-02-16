import ClientsGlass from "../components/ClientsGlass";
import Hero from "../components/Hero";
import Services from "../components/Services";
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
      <Services />
    </div>
  );
}
export default HomePage;
