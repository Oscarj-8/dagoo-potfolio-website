import dagoo from "../images/dagoo.png";

function Footer() {
  return (
    <div className="bg-gradient-to-br from-footerFirst to-footerSecond w-full grid grid-cols-1 text-white  gap-4 justify-center justify-items-center p-4">
      <div className="w-full flex flex-col gap-2 text-gray-200 items-center text-center">
        <img src={dagoo} className="w-32" />
        <p className="font-light text-xs">
          Dagoo transforms brands with unique visuals, aligning with client
          goals and audience preferences for maximum impact.
        </p>
      </div>
      <div className="w-full text-center">
        <h3 className="font-medium">Help and Support</h3>
        <p className="font-light text-xs">Contact us</p>
      </div>
      <div>
        <p className="text-xs font-light text-center">
          Terms of Service | Privacy Policy | @2023 Dagoo.inc. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
