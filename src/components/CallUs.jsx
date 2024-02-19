import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function CallUs() {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <a href="tel:+251919417797">
        <FontAwesomeIcon
          icon={faPhone}
          className={shaking ? "icon shake" : "icon"}
        />
      </a>
    </div>
  );
}

export default CallUs;
