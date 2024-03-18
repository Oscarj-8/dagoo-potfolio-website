// import Circles from "./Circles";
import { works } from "../data/Data.js";

function Works() {
  return (
    <div
      className="relative flex flex-col items-center bg-gradient-to-b from-worksFirst to-worksSecond overflow-hidden "
      id="works"
    >
      {/* <Circles /> */}
      <div className="mt-[550px] flex flex-col items-center gap-8 z-10 md:mt-[500px] lg:mt-[400px] xl:mt-[300px] 2xl:mt-[150px] xl:gap-16 w-[100vw]">
        <div className="text-center flex flex-col text-white gap-2">
          <h1 className="text-2xl font-semibold lg:text-3xl">Our works</h1>
          <p className="text-white/80 text-lg">Here are some of our works</p>
        </div>
        <div className="flex flex-wrap gap-14 justify-center z-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="card  transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
                <h1 className="font-medium text-lg">{work.workType}</h1>
                <p className="font-light">{work.client}</p>
              </div>
              <div className="h-full overflow-hidden">
                <img
                  src={work.photo}
                  alt="works"
                  className="h-full transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3 object-cover"
                />
              </div>
              <div className="absolute mt-[404px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
                <h2 className="font-medium text-lg text-secondaryColor ">
                  Client
                </h2>
                <p className="text-white">Sophie gerard</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-32 cursor-pointer flex items-center justify-center gap-4 text-white hover:scale-105 hover:text-secondaryColor transition-all duration-300 ease-in-out p-1 my-4">
          <p className=" text-lg">See more</p>
          <span className="text-2xl">&raquo;</span>
        </div>
      </div>
    </div>
  );
}
export default Works;
