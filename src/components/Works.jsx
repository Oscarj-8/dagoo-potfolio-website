// import Circles from "./Circles";

function Works() {
  return (
    <div
      className="relative flex flex-col items-center bg-gradient-to-b from-worksFirst to-worksSecond overflow-hidden "
      id="works"
    >
      {/* <Circles /> */}
      <div className="mt-[400px] flex flex-col items-center gap-8 z-10 md:mt-[350px] lg:mt-[400px] xl:mt-[300px] 2xl:mt-[150px] xl:gap-16 w-[100vw]">
        <div className="text-center flex flex-col text-white gap-2">
          <h1 className="text-2xl font-semibold lg:text-3xl">Our works</h1>
          <p className="text-white/80 text-lg">Here are some of our works</p>
        </div>
        <div className="flex flex-wrap gap-14 justify-center z-10">
          <div className="card  transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="absolute mt-[404px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="absolute mt-[404px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="absolute mt-[404px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="absolute mt-[404px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
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
