import About from "../components/About";
import ClientsGlass from "../components/ClientsGlass";
import ContactUs from "../components/ContactUs";
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
      <About />
      <ContactUs />
    </div>
  );
}
export default HomePage;
