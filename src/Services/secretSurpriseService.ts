import { Request, Response } from 'express';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import sgMail from '@sendgrid/mail';

class SecretSurpriseService {
    async sendMFA(request: Request, response: Response) {
        const { mfaCode, email } = request.body;

        if (!mfaCode || !email) {
            response.status(400).json({ message: 'Data missing!' });
        }

        const templatePath = path.join(__dirname, '../Templates/SecretSurprise', 'mfaTemplate.hbs');
        const templateSource = fs.readFileSync(templatePath, 'utf-8');
        const compiledTemplate = handlebars.compile(templateSource);

        const context = {
            code: mfaCode,
            year: new Date().getFullYear()
        };

        const htmlToSend = compiledTemplate(context);

        const mailOptions = {
            from: process.env.SSEMAIL,
            to: email,
            subject: 'SecretSurprise - MFA Code',
            html: htmlToSend
        };

        try {
            await sgMail.send(mailOptions);

            response.json({ message: "Email sent!" });
        } catch (error) {
            response.status(500).json({ message: `There was a problem sending email! ${error}` });
        }

        return;
    }
}

export default SecretSurpriseService