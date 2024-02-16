function Works() {
  return (
    // <div className="w-full flex flex-col items-center bg-mainColor ">
    //   <h2 className="text-2xl text-white font-semibold">Our works</h2>
    //   <div className="bg-red-500 my-44 w-full flex flex-col items-center">
    //     <div className="w-64 rounded-2xl h-96 overflow-hidden">
    //       <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain p-2 rounded-t-2xl">
    //         <h2>Graphic Design</h2>
    //         <span>Fresh Bites Catering</span>
    //       </div>
    //       <div>
    //         <img
    //           src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt=""
    //           className="h-96 "
    //         />
    //         <div className="w-64 absolute -mt-30 bg-white/30 backdrop-blur-sm p-2 ">
    //           <h2>Client</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col items-center bg-gradient-to-b from-worksFirst to-worksSecond">
      {/* <div className="absolute left-0 rounded-full blur-[150px] bg-secondaryColor w-[400px] h-[400px] z-0"></div>
      <div className="absolute right-0 top-24 rounded-full blur-[150px] bg-secondaryColor w-[400px] h-[400px] -z-10"></div>
      <div className="absolute left-0 rounded-full blur-[150px] bg-secondaryColor w-[400px] h-[400px] z-0"></div>  */}
      <div className="my-[350px] flex flex-col items-center gap-8 z-10 md:my-[300px] lg:my-[400px] xl:my-[450px] 2xl:my-[150px]">
        <h1 className="text-2xl text-white font-semibold lg:text-3xl">
          Our works
        </h1>
        <div className="flex flex-wrap gap-14 justify-center z-10">
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
          <div className="card  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col w-80  rounded-2xl h-[28em] overflow-hidden">
            <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain rounded-t-2xl p-3 text-white">
              <h1 className="font-medium text-lg">Graphic Design</h1>
              <p className="font-light">Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className="absolute mt-[406px] flex flex-col py-2 px-4 bg-black/40 backdrop-blur-sm rounded-b-2xl  w-80 ">
              <h2 className="font-medium text-lg text-secondaryColor ">
                Client
              </h2>
              <p className="text-white">Sophie gerard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works;
