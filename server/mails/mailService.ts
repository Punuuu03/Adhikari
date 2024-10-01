import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (email: string, username: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Our App',
    text: `Hello ${username}, welcome to our app!`,
  };

  await transporter.sendMail(mailOptions);
};
