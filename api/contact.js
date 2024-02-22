// import express from "express";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// const port = 3000;
// const emailPassword = process.env.EMAIL_PASS;
// console.log(emailPassword);

// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Create transporter object using SMTP transport
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "mabdulahi954@gmail.com",
//     pass: emailPassword,
//   },
// });

// // ROute to handle Form submission
// app.post("/submit-form", (req, res) => {
//   const { fullName, email, pNumber, message } = req.body;

//   // Create email
//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: "recipient-email@example.com",
//     subject: "New Form Submission",
//     text: `FullName: ${fullName}\nPhone number: ${pNumber}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error occured while sending email:", error);
//       res.status(500).send("Error occured while sending email");
//     } else {
//       console.log("Email sent successfully" + info.response);

//       res.status(200).send("Email sent successfully");
//     }
//   });
// });

const nodemailer = require("nodemailer");
const emailPassword = process.env.EMAIL_PASS;

module.exports = async (req, res) => {
  const { fullName, pNumber, email, message } = req.body;

  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "mabdulahi954@gmail.com",
          pass: emailPassword,
        },
      });

      const mailOptions = {
        from: email,
        to: "mabdulahi954@gmail.com",
        subject: subject,
        text: `FullName: ${fullName},
        Phone number: ${pNumber},
        Email: ${email},
        Message: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error processing the form" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
