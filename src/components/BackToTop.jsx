import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`fixed bottom-4 right-4 text-white bg-gradient-to-br from-footerFirst to-footerSecond flex p-4 w-14 items-center justify-center rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out active:scale-110  ${
        isVisible ? "show" : "hidden"
      } z-50`}
    >
      <button onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
      </button>
    </div>
  );
};
export default BackToTop;
