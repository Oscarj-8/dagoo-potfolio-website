import About from "../components/About";
import BackToTop from "../components/BackToTop";
import ClientsGlass from "../components/ClientsGlass";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";

function HomePage() {
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <Hero id="hero" />
      <ClientsGlass id="clients" />
      <BackToTop />
      <Works id="works" />
      <Services id="services" />
      <About id="about" />
      <ContactUs id="contact" />
      <Footer />
    </div>
  );
}
export default HomePage;
