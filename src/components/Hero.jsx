import Nav from "./Nav";
import heroBg from "../images/heroBg.png";
function Hero({ scrollToSection }) {
  return (
    <div
      className="flex flex-col items-center
       h-screen bg-cover bg-center w-full "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-mainColor opacity-65 h-screen"></div>
      <Nav scrollToSection={scrollToSection} />
      <div className="flex flex-col items-center gap-8 z-10 mt-[8.25em] 2xl:mt-[2.5em] md:max-w-[700px] md:p-4">
        <div className="flex bg-gradient-to-r from-mainColor/30 to-secondaryColor/30 py-1 px-3 rounded-[24px] backdrop-blur-sm shadow-xl">
          <span className="uppercase text-white font-medium">
            Welcome to dagoo
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-4 p-4">
          <h1 className="text-4xl text-white font-bold lg:text-5xl xl:text-6xl">
            Your Path to Digital Excellence
          </h1>
          <p className="text-[#E8E8E8]">
            At Dagoo Marketing, we redefine brands, unlocking their full
            potential through tailored marketing solutions. With over 5 years of
            industry expertise, we stand as a beacon of creativity, delivering
            impactful results for our diverse clientele.
          </p>
        </div>
        <div className="flex w-full items-center justify-center flex-col gap-4 md:gap-8 text-[#EBEBEB] font-semibold md:flex-row">
          <button className="bg-gradient-to-r from-mainColor to-secondaryColor w-[9em] p-[10px] rounded-3xl shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl">
            See our works
          </button>
          <button className=" button border-2 border-secondaryColor w-[9em] p-2 rounded-3xl shadow-xl transition-all duration-500 ease-in-out">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
