import Nav from "./Nav";
import heroBg from "../images/heroBg.png";
function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundColor: "#613886",
          opacity: 0.5,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <Nav />
    </div>
  );
}
export default Hero;
