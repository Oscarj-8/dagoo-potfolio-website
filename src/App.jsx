import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.querySelector("#loader");
      if (loader) {
        loader.remove();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
    }, 6000);
  }, []);

  return (
    <div>
      <Loader />
      <HomePage />
    </div>
  );
}

export default App;
