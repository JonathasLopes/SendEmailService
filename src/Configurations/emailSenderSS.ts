import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SSSENDGRIDKEY);

const transporter = nodemailer.createTransport({
  host: process.env.SSMAILER,
  port: parseInt(process.env.SSPORT),
  secure: false,
  logger: true,
  debug: true,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  }
});

export default transporter;
