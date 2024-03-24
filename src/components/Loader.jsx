import { useEffect } from "react";

const Loader = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const loader = document.querySelector(".loader-container");
  //     loader.classList.add("hide");
  //   }, 6000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div id="loader" className="loader-container">
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          text-anchor="middle"
          className="text-body"
        >
          Dagoo
        </text>
        <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="1.5em"
          text-anchor="middle"
          className="text-body"
        >
          .
        </text>
      </svg>
    </div>
  );
};
export default Loader;
