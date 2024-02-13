import Nav from "./Nav";
import heroBg from "../images/heroBg.png";
function Hero() {
  return (
    <div
      className="flex flex-col items-center
       h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-mainColor opacity-65"></div>
      <Nav />
      <div className="flex flex-col items-center gap-8 z-10 mt-[5.25em]">
        <div className="flex bg-gradient-to-r from-mainColor/30 to-secondaryColor/30 py-1 px-3 rounded-[24px] backdrop-blur-sm shadow-xl">
          <span className="uppercase text-white font-medium">
            Welcome to dagoo.inc
          </span>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-4xl text-white font-bold">
            Your Path to Digital Excellence
          </h1>
          <p className="text-[#E8E8E8]">
            At ligula justo morbi sagittis fusce. Accumsan magna habitant non
            habitasse litora etiam torquent. Placerat lobortis volutpat
            efficitur elementum sagittis leo amet euismod tristique.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-[#EBEBEB] font-semibold">
          <button className="bg-gradient-to-r from-mainColor to-secondaryColor w-[9em] p-2 rounded-3xl">
            See our works
          </button>
          <button className="border-2 border-secondaryColor w-[9em] p-2 rounded-3xl">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
