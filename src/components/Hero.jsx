import Nav from "./Nav";
import heroBg from "../images/HomePageImages/heroBg.png";
import CallUs from "./CallUs";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ReusableModal from "./ReusableModal";
import { useState } from "react";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", duration: 5000 });
  }
};

export default function Hero() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div
      className="flex flex-col items-center
       h-screen bg-cover bg-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="hero"
    >
      <div className="absolute inset-0 bg-mainColor opacity-65 h-screen"></div>
      <Nav scrollToSection={scrollToSection} />
      <div className="flex flex-col items-center gap-8 z-10 mt-[8.25em] lg:mt-[2.25em] 2xl:mt-[1.5em] md:max-w-[700px] md:p-4">
        <div className="flex bg-gradient-to-r from-mainColor/30 to-secondaryColor/30 py-1 px-3 rounded-[24px] backdrop-blur-sm shadow-xl">
          <span className="uppercase text-white font-medium">
            Welcome to dagoo
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-4 p-4">
          <h1 className="text-animation text-4xl text-white font-bold lg:text-5xl xl:text-6xl">
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
          <button
            className=" button border-2 border-secondaryColor w-[9em] p-2 rounded-3xl shadow-xl transition-all duration-500 ease-in-out"
            onClick={() => setOpen(true)}
          >
            Contact us
          </button>
        </div>
        <ReusableModal
          backgroundColor="linear-gradient(45deg,  #613886 90%, #34C1ED 60%)"
          open={open}
          onClose={handleClose}
        >
          <div className="flex flex-col items-center min-w-[300px] max-w-[500px] text-white gap-2">
            <div className="w-full flex justify-between items-center ">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-left w-full"
              >
                Our contact information
              </Typography>
              <IconButton aria-label="close">
                <CloseIcon className="text-white" onClick={handleClose} />
              </IconButton>{" "}
            </div>
            <hr className="bg-gray-500 w-full" />
            <Typography
              className="w-full flex flex-col gap-2"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <p className="flex gap-2">
                <span className="font-semibold">Mobile 1:</span>
                0919417797
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Mobile 2:</span>
                0944355364
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Email:</span>
                dagooincorporated@gmail.com
              </p>
            </Typography>
            <CallUs />
          </div>
        </ReusableModal>
      </div>
    </div>
  );
}
