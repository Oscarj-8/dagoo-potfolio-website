function Works() {
  return (
    // <div className="w-full flex flex-col items-center bg-mainColor ">
    //   <h2 className="text-2xl text-white font-semibold">Our works</h2>
    //   <div className="bg-red-500 my-44 w-full flex flex-col items-center">
    //     <div className="w-64 rounded-2xl">
    //       <div className="bg-gradient-to-r from-secondaryColor to-cardHeaderMain p-2 rounded-t-2xl">
    //         <h2>Graphic Design</h2>
    //         <span>Fresh Bites Catering</span>
    //       </div>
    //       <div>
    //         <img
    //           src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt=""
    //           className="h-full rounded-b-2xl"
    //         />
    //         <div className="w-64 absolute -mt-10 bg-white/30 backdrop-blur-sm p-2 rounded-b-2xl">
    //           <h2>Client</h2>
    //         </div>
    //         <div>
    //           <p>
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
    //             dignissimos voluptas debitis dolorem, suscipit perspiciatis
    //             soluta nesciunt deleniti nisi quaerat quam repudiandae id? Harum
    //             accusantium unde officia totam architecto delectus?
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full flex flex-col items-center bg-mainColor ">
      <div className="my-48">
        <h1 className="text-white">Our works</h1>
        <div className="flex flex-col">
          <div className="card flex flex-col w-64 border-2 rounded-2xl  h-96">
            <div className="p-3">
              <h1>Graphic Design</h1>
              <p>Fresh Bites Cathering</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1707924989463-ef6ffe314359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
            <div className=" bg-white/30 backdrop-blur-sm rounded-b-2xl w-64">
              <h2>Client</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works;
