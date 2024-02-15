import Borsaye from "../images/Borsaye Logo_full White1.png";
import Gets from "../images/Gets.png";
import Lala from "../images/Lala land@3x.png";
import Legacy from "../images/Legacy@3x.png";
import Solo from "../images/Solo.png";
import Sabegn from "../images/sabegn@3x.png";
function ClientsGlass() {
  return (
    <div className="absolute top-[40em] bg-white/20 w-[20em] lg:w-[36em] justify-center h-[26em] mx-auto backdrop-blur-md rounded-xl p-5 gap-8 flex flex-col text-center">
      <h2 className="text-2xl text-white font-semibold">Our clients</h2>
      <div className="flex flex-wrap overflow-hidden">
        <img src={Borsaye} className="w-32" alt="" />
        <img src={Solo} className="w-32" alt="" />
        <img src={Sabegn} className="w-32" alt="" />
        <img src={Lala} className="w-32" alt="" />
        <img src={Legacy} className="w-32" alt="" />
        <img src={Gets} className="w-32" alt="" />
      </div>
    </div>
  );
}
export default ClientsGlass;
