import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  fontFamily: "Bebas Neue, sans-serif",
};

const ContactUs = () => (
  <div className="flex flex-col w-full p-4 items-center justify-between gap-4 lg:flex-row max-w-[1500px] mx-auto mb-8">
    <div className="text-center lg:text-left w-full flex flex-col gap-4">
      <h1 className="text-2xl font-semibold lg:text-3xl text-mainColor">
        Contact us
      </h1>
      <p className="text-[#323232] text-lg">
        Thank you for visiting our website. We value your feedback and would
        love to hear from you. If you have any questions, comments, or concerns
        about our item exchange service, please contact us. We are available to
        answer your questions and provide assistance.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
        <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
          <FontAwesomeIcon icon={faEnvelope} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-xl md:text-2xl font-semibold" style={textStyle}>
              Email
            </h1>
            <p>h1@yahoo.com</p>
            <p>h1@yahoo.com</p>
          </div>
        </div>
        <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="h-8 text-mainColor"
          />
          <div className="text-[#323232] ">
            <h1 className="text-xl md:text-2xl font-semibold" style={textStyle}>
              Address
            </h1>
            <p>Somewhere here</p>
            <p>bole atlas, Addis Ababa.</p>
          </div>
        </div>
        <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
          <FontAwesomeIcon icon={faPhone} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-xl md:text-2xl font-semibold" style={textStyle}>
              Phone
            </h1>
            <p>Mobile: (555) 555-5555</p>
            <p>fax: (555) 555-5555</p>
          </div>
        </div>
        <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
          <FontAwesomeIcon icon={faClock} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-xl md:text-2xl font-semibold" style={textStyle}>
              Opening Hours
            </h1>
            <p>Monday to Sunday</p>
            <p> 9:00AM - 7:00PM</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full max-w-[700px] bg-gradient-to-br from-[#8239C3] to-[#16A2CE] rounded-md p-3 gap-4 shadow-lg md:p-4">
      <h2
        className="text-xl md:text-3xl text-white font-semibold"
        style={textStyle}
      >
        Get in touch
      </h2>
      <form className="flex flex-col gap-4 mb-2 justify-center">
        <input
          id="name"
          className="p-3 w-full rounded-md "
          placeholder="Enter your name here"
          type="text"
        />
        <input
          id="email"
          className="p-3 w-full rounded-md "
          placeholder="Enter your email here"
          type="email"
        />
        <input
          id="number"
          className="p-3 w-full  rounded-md"
          placeholder="Enter your number here"
          type="number"
        />
        <textarea
          name="message"
          id="message"
          className="w-full p-3  h-[200px] rounded-md"
          placeholder="Write your message here"
        ></textarea>
        <button
          type="button"
          variant="contained"
          className="bg-[#8239C3] p-2 text-white tracking-wider rounded-md font-semibold text-xl w-full shadow-none hover:shadow-lg"
          style={textStyle}
        >
          Send
        </button>
      </form>
    </div>
  </div>
);

export default ContactUs;

// ContactUs.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   handleSend: PropTypes.func.isRequired,
//   formData: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//   }).isRequired,
// };
