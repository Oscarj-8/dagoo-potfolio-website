import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </>
  );
}

export default App;
