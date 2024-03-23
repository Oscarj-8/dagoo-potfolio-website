import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Loader />
      <HomePage />
    </div>
  );
}

export default App;
