import Borsaye from "../images/HomePageImages/Borsaye Logo_full White1.png";
import Gets from "../images/HomePageImages/Gets.png";
import Lala from "../images/HomePageImages/Lala land@3x.png";
import Legacy from "../images/HomePageImages/Legacy@3x.png";
import Solo from "../images/HomePageImages/Solo.png";
import Sabegn from "../images/HomePageImages/sabegn@3x.png";
function ClientsGlass() {
  return (
    <div
      className="absolute top-[36em] bg-white/20 w-[20em] md:w-[28em] lg:w-[35em] xl:w-[40em] 2xl:w-[70em] 2xl:gap-8 justify-center mx-auto backdrop-blur-md rounded-xl p-5 flex flex-col text-center border border-white/30 shadow-2xl hover:shadow-none transi duration-500 ease-in-out z-10"
      id="clients"
    >
      <h2 className="text-2xl lg:text-3xl text-white font-semibold mt-6">
        Our clients
      </h2>
      <div className="flex flex-wrap items-center justify-center overflow-hidden">
        <img src={Borsaye} className="flex-1 w-36 lg:w-48 xl:w-36" alt="" />
        <img src={Solo} className="flex-1 w-32 xl:w-48" alt="" />
        <img src={Sabegn} className="flex-1 w-32  xl:w-36" alt="" />
        <img src={Gets} className="flex-1 w-32  xl:w-28" alt="" />
        <img src={Legacy} className="flex-1 w-36  xl:w-28" alt="" />

        <img src={Lala} className="flex-1 w-32  xl:w-36" alt="" />
      </div>
    </div>
  );
}
export default ClientsGlass;
