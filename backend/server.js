require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Or your chosen service (e.g. Yahoo, Outlook)
  auth: {
    user: process.env.EMAIL, // Sender's email from .env
    pass: process.env.EMAIL_PASSWORD, // App password from .env
  },
});

// Handle sending the email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // From the user
    to: process.env.RECEIVER_EMAIL, // The receiver's email from .env
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Error sending email" });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
