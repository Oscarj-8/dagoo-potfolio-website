import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ReusableModal from "./ReusableModal";
import IconButton from "@mui/material/IconButton";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CallUs from "./CallUs";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pNumber: "",
    message: "",
  });
  const [emptyField, setEmptyField] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, pNumber, message } = formData;

    if (!fullName || !email || !pNumber || !message) {
      setEmptyField(true);
      setSubmissionSuccess(false);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmissionSuccess("successfull");
        setTimeout(() => {
          setSubmissionSuccess(null);
        }, 8000);
        resetForm();
        setLoading(false);
      } else {
        setSubmissionSuccess("failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error occured while submitting form:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      pNumber: "",
      message: "",
    });
  };

  return (
    <div
      className="flex flex-col w-full p-4 items-center justify-between gap-4 lg:flex-row max-w-[1500px] mx-auto mb-8"
      id="contact"
    >
      <div className="text-center lg:text-left w-full flex flex-col gap-4 p-1">
        <h1 className="text-2xl font-semibold lg:text-3xl text-mainColor">
          Contact us
        </h1>
        <p className="text-[#323232] text-lg mb-4">
          Thank you for visiting our website. We value your feedback and would
          love to hear from you. If you have any questions, comments, or
          concerns please contact us. We are available to answer your questions
          and provide assistance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 text-mainColor" />
            <div className="text-[#323232]">
              <h1 className="text-xl md:text-2xl ">Email</h1>
              <p>dagooincorporated@gmail.com</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="h-10 text-mainColor"
            />
            <div className="text-[#323232] ">
              <h1 className="text-xl md:text-2xl ">Address</h1>
              <p>Bole atlas in front of sapphire addis hotel</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon
              icon={faPhone}
              className="h-8 mt-[4px] text-mainColor"
            />
            <div className="text-[#323232] ">
              <h1 className="text-xl md:text-2xl ">Phone</h1>
              <p>Mobile 1: (+251) 919 417 797 </p>
              <p>Mobile 2: (+251) 944 355 364 </p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer text-left gap-4 hover:scale-105 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faClock} className="h-8 text-mainColor" />
            <div className="text-[#323232] ">
              <h1 className="text-xl md:text-2xl ">Opening Hours</h1>
              <p>Monday to Sunday</p>
              <p> 9:00AM - 7:00PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[700px] bg-gradient-to-br from-[#8239C3] to-[#16A2CE] rounded-md p-3 gap-4 drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)] md:p-4">
        <h2 className="text-xl md:text-3xl text-white font-semibold">
          Get in touch
        </h2>
        {emptyField && (
          <p className="transition-all duration-500 ease-in-out w-full flex justify-between text-xs text-red-700 p-2 rounded-md bg-red-200 tracking-wide">
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
            className={`flex items-center justify-center gap-2 ${
              loading
                ? "bg-[#a641ff] cursor-progress"
                : "bg-[#8239C3] cursor-pointer"
            }  p-2 text-white tracking-wider rounded-md shadow-xl font-semibold text-xl w-full hover:shadow-none`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
            {loading && <div class="loader"></div>}
          </button>

          {submissionSuccess === "successfull" && (
            <p className="transition-all duration-500 ease-in-out w-full flex justify-between text-sm text-green-700 p-2 rounded-md bg-green-200 leading-5 tracking-wide shadow-2xl">
              Thank you for sending us your message, your message has been
              successfully received. We will get back to you as soon as
              possible.
            </p>
          )}
          {submissionSuccess === "failed" && (
            <p className="transition-all duration-500 ease-in-out w-full flex justify-between text-sm text-red-700 p-2 rounded-md bg-red-200 leading-5 tracking-wide shadow-2xl">
              There was an error sending your message, please try again later
            </p>
          )}
        </form>
      </div>
      <ReusableModal
        backgroundColor="linear-gradient(45deg,  #613886 90%, #34C1ED 60%)"
        open={open}
        onClose={handleClose}
      >
        <div className="flex flex-col items-center min-w-[300px] max-w-[500px] text-white gap-2">
          <div className="w-full flex justify-between items-center ">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-left w-full"
            >
              Our contact information
            </Typography>
            <IconButton aria-label="close">
              <CloseIcon className="text-white" onClick={handleClose} />
            </IconButton>{" "}
          </div>
          <hr className="bg-gray-500 w-full" />
          <Typography
            className="w-full flex flex-col gap-2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <p className="flex gap-2">
              <span className="font-semibold">Mobile 1:</span>
              0919417797
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Mobile 2:</span>
              0944355364
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Email:</span>
              dagooincorporated@gmail.com
            </p>
          </Typography>
          <CallUs />
        </div>
      </ReusableModal>
    </div>
  );
};

export default ContactUs;
