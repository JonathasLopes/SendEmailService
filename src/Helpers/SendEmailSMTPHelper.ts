import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

export async function sendEmail(config: MailOptions) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false, // STARTTLS
            auth: {
                user: process.env.SSEMAIL,
                pass: process.env.SSPASSWORD,
            },
            tls: {
                rejectUnauthorized: false, // Evita erros TLS
            },
        });

        var resp = await transporter.sendMail(config);
        console.log(resp.response)
        return true;
    } catch (error) {
        console.error("❌ Erro ao enviar e-mail:", error); 
        return false;
    }
}