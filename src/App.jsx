// import { useEffect, useState } from "react";
// import Loader from "./components/Loader";
// import HomePage from "./pages/HomePage";
// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.onload = () => {
//       setLoading(false);
//     };

//     return () => {
//       window.onload = null;
//     };
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div>
//           <HomePage />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const checkAllImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    const addLoadEventListeners = (node) => {
      if (node.tagName === "IMG" && !node.complete) {
        node.addEventListener("load", checkAllImagesLoaded);
      }
      node.childNodes.forEach((childNode) => addLoadEventListeners(childNode));
    };

    addLoadEventListeners(document.body);

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", checkAllImagesLoaded);
      });
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
