import dagooLogo from "../images/dagoo.png";
import { useState } from "react";

function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div className="relative w-full flex justify-between items-center z-20 p-4 md:p-6 lg:p-10 xl:px-16 2xl:px-28 3xl:px-36">
      <img
        src={dagooLogo}
        alt="dagoo Logo"
        className="transition-all duration-1000 ease-in-out w-36 hover:rotate-[360deg] hover:scale-75"
      />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-white lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <div
          className={`fixed gap-4 bg-[#613886] top-0
           right-0 cursor-pointer transition-transform w-2/3 duration-500 ease-in-out text-white h-screen 
        ${navIsOpen ? "translate-x-0" : "translate-x-full"}
        flex flex-col p-4 items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white cursor-pointer  self-end"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setNavIsOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <ul className="flex flex-col gap-4 text-xl text-center mt-8">
            <li onClick={() => setNavIsOpen(false)}>Home</li>
            <li onClick={() => setNavIsOpen(false)}>Clients</li>
            <li onClick={() => setNavIsOpen(false)}>Works</li>
            <li onClick={() => setNavIsOpen(false)}>Services</li>
            <li onClick={() => setNavIsOpen(false)}>About</li>
            <li onClick={() => setNavIsOpen(false)}>Contact</li>
          </ul>
        </div>
      </div>
      <ul className="hidden lg:flex text-white gap-8">
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          Home
        </li>
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          Clients
        </li>
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          Works
        </li>
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          Services
        </li>
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          About
        </li>
        <li
          className="hover:underline cursor-pointer"
          onClick={() => setNavIsOpen(false)}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
export default Nav;
