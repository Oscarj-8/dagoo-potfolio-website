import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return <div>{loading ? <Loader /> : <HomePage />}</div>;
}

export default App;
