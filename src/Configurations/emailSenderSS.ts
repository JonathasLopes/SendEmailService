import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SSMAILER,
  port: 587,
  secure: false,
  logger: true,
  debug: true,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false
  },
  auth: {
    user: process.env.SSEMAIL,
    pass: process.env.SSPASSWORD
  }
});

export default transporter;
