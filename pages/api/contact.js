import nodemailer from "nodemailer";

export default function async(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
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
      html: `<div>
      <h1 >APPOINTMENT REQUEST</h1>
      <h3>Name: ${req.body.name}</h3>
      <h3>Email: ${req.body.email}</h3>
      <br />
     <div> ${req.body.message}</div>
      </div>`,
    };

    transporter.sendMail(mailData);

    res.status(200);
  } catch (error) {
    res.status(400);
  }
}
