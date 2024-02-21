import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const textStyle = {
  fontFamily: "Bebas Neue, sans-serif",
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pNumber: "",
    message: "",
  });
  const [emptyField, setEmptyField] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, pNumber, message } = formData;
    if (!fullName || !email || !pNumber || !message) {
      setEmptyField(true);
      return;
    } else {
      setEmptyField(false);
      setSubmissionSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        pNumber: "",
        message: "",
      });
    }
  };

  return (
    <div
      className="flex flex-col w-full p-4 items-center justify-between gap-4 lg:flex-row max-w-[1500px] mx-auto mb-8"
      id="contact"
    >
      <div className="text-center lg:text-left w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold lg:text-3xl text-mainColor">
          Contact us
        </h1>
        <p className="text-[#323232] text-lg mb-4">
          Thank you for visiting our website. We value your feedback and would
          love to hear from you. If you have any questions, comments, or
          concerns please contact us. We are available to answer your questions
          and provide assistance.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 text-mainColor" />
            <div className="text-[#323232] ">
              <h1
                className="text-xl md:text-2xl font-semibold"
                style={textStyle}
              >
                Email
              </h1>
              <p>h1@yahoo.com</p>
              <p>h1@yahoo.com</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="h-10 text-mainColor"
            />
            <div className="text-[#323232] ">
              <h1
                className="text-xl md:text-2xl font-semibold"
                style={textStyle}
              >
                Address
              </h1>
              <p>Somewhere here</p>
              <p>bole atlas, Addis Ababa.</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faPhone} className="h-8 text-mainColor" />
            <div className="text-[#323232] ">
              <h1
                className="text-xl md:text-2xl font-semibold"
                style={textStyle}
              >
                Phone
              </h1>
              <p>Mobile: (555) 555-5555</p>
              <p>fax: (555) 555-5555</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faClock} className="h-8 text-mainColor" />
            <div className="text-[#323232] ">
              <h1
                className="text-xl md:text-2xl font-semibold"
                style={textStyle}
              >
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
        {emptyField && (
          <p className="transition-all duration-500 ease-in-out w-full flex justify-between text-xs text-red-700 p-2 rounded-md bg-red-200 font-medium">
            Please fill all the fields
            <span
              className="scale-150 cursor-pointer"
              onClick={() => setEmptyField(false)}
            >
              &times;
            </span>
          </p>
        )}
        <form
          className="flex flex-col gap-4 mb-2 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            id="fullName"
            className="p-3 w-full rounded-md"
            placeholder="Enter your name here"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            id="email"
            className="p-3 w-full rounded-md"
            placeholder="Enter your email here"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            id="pNumber"
            className="p-3 w-full rounded-md"
            placeholder="Enter your number here"
            type="number"
            value={formData.pNumber}
            onChange={handleChange}
          />

          <textarea
            name="message"
            id="message"
            className="w-full p-3  h-[200px] rounded-md"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            variant="contained"
            className="bg-[#8239C3] p-2 text-white tracking-wider rounded-md shadow-xl font-semibold text-xl w-full hover:shadow-none"
            style={textStyle}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
