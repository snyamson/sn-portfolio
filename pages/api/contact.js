export default function handler(req, res) {
  require("dotenv").config();

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.PORTFOLIO_EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "portfolio.snyamson@gmail.com",
    to: "work.snyamson@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else res.status(200);
  });

  res.status(200);
}
