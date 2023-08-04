import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";
dotenv.config();

/** Send email from real Gmail account */
export const registerMail = async (req, res) => {
  const { userName, text } = req.body;

  const config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Chatify",
      link: "https://chatify-smit.netlify.app/",
    },
  });

  const response = {
    body: {
      intro: text,
      outro: " Welcome to our growing community of users! ",
    },
  };

  const mail = mailGenerator.generate(response);

  const message = {
    from: process.env.EMAIL,
    to: userName,
    subject: "Chatify is registered successfully",
    html: mail,
  };

  try {
    await transporter.sendMail(message);
    return res.status(201).json({
      msg: "You should receive an email shortly.",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
