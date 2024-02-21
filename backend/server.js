import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const emailPassword = process.env.EMAIL_PASS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mabdulahi954@gmail.com",
    pass: emailPassword,
  },
});

// ROute to handle Form submission
app.post("/submit-form", (req, res) => {
  const { fullName, email, pNumber, message } = req.body;

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occured while sending email:", error);
      res.status(500).send("Error occured while sending email");
    } else {
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
