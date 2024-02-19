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
        Our services
      </h1>
      <p className="text-[#323232] text-lg">
        Thank you for visiting our website. We value your feedback and would
        love to hear from you. If you have any questions, comments, or concerns
        about our item exchange service, please contact us. We are available to
        answer your questions and provide assistance.
      </p>
      <div className="flex w-full flex-wrap text-mainColor">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-2xl font-semibold" style={textStyle}>
              Email
            </h1>
            <p>h1@yahoo.com</p>
            <p>h1@yahoo.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="h-8 text-mainColor"
          />
          <div className="text-[#323232] ">
            <h1 className="text-2xl font-semibold" style={textStyle}>
              Address
            </h1>
            <p>Somewhere here</p>
            <p>bole atlas, Addis Ababa.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-2xl font-semibold" style={textStyle}>
              Phone
            </h1>
            <p>Mobile: (555) 555-5555</p>
            <p>fax: (555) 555-5555</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClock} className="h-8 text-mainColor" />
          <div className="text-[#323232] ">
            <h1 className="text-2xl font-semibold" style={textStyle}>
              Opening Hours
            </h1>
            <p>Monday to Sunday</p>
            <p> 9:00AM - 7:00PM</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full max-w-[700px] bg-slate-200 rounded-md p-3 gap-4 shadow-lg md:p-4">
      <h2
        className="text-xl md:text-3xl text-slate-700 font-semibold"
        style={textStyle}
      >
        Get in touch
      </h2>
      <form className="flex flex-col gap-4 mb-2 justify-center">
        <input
          id="name"
          className="p-3 w-full border rounded-md border-slate-500"
          placeholder="Enter your name here"
          type="text"
        />
        <input
          id="email"
          className="p-3 w-full border rounded-md border-slate-500"
          placeholder="Enter your email here"
          type="email"
        />
        <input
          id="number"
          className="p-3 border w-full border-slate-500 rounded-md"
          placeholder="Enter your number here"
          type="number"
        />
        <textarea
          name="message"
          id="message"
          className="w-full p-3 border h-[200px]  border-slate-500 rounded-md"
          placeholder="Write your message here"
        ></textarea>
        <button
          type="button"
          variant="contained"
          className="bg-mainColor p-2 text-white tracking-wider font-semibold text-xl w-full shadow-none hover:shadow-lg"
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
