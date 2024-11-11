import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.SSMAILER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SSEMAIL,
    pass: process.env.SSPASSWORD
  }
});

export default transporter;
