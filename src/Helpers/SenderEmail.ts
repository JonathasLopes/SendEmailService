import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function SenderEmail(options: Mail.Options) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SSEMAIL,
            pass: process.env.SSPASSWORD,
        },
    });

    await transporter.sendMail(options);
}