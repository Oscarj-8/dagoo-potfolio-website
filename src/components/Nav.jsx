import dagooLogo from "../images/dagoo.png";
import { useState } from "react";

function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div className="bg-slate-400 flex justify-between items-center">
      <img src={dagooLogo} alt="dagoo Logo" className="w-36 " />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={`absolute gap-4 bg-blue-700 top-0
           right-0 cursor-pointer transition-transform w-1/2 duration-500 ease-in-out text-white h-screen
        ${navIsOpen ? "translate-x-0" : "translate-x-full "}
        flex flex-col p-4 items-center `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white cursor-pointer md:hidden self-end"
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

          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>Clients</li>
            <li>Works</li>
            <li>Servces</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
