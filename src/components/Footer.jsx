import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import dagoo from "../images/dagoo.png";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-footerFirst to-footerSecond px-4 pt-4 2xl:px-8 2xl:pt-8 ">
      <div
        className="grid grid-cols-1 text-white  gap-8 justify-center justify-items-center md:grid-cols-2 max-w-[1500px] mx-auto
      "
      >
        <div className="w-full flex flex-col gap-2 text-gray-200 items-center text-center md:items-start md:text-left">
          <img src={dagoo} className="w-32" />
          <p className="font-light text-xs max-w-[25em]">
            Dagoo transforms brands with unique visuals, aligning with client
            goals and audience preferences for maximum impact.
          </p>
          <div className="flex justify-center gap-6">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-xl xl:text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl xl:text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl xl:text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl xl:text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full md:w-fit flex flex-col text-center md:text-left">
          <h3 className="font-medium md:text-left">Help and Support</h3>
          <p className="font-light text-xs md:text-left">Contact us</p>
        </div>
        <div className="md:col-span-2 mb-2">
          <p className="text-xs font-light text-center">@2023 Dagoo.inc</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
