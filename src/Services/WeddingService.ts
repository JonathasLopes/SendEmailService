import { Request, Response } from 'express';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import sgMail from '@sendgrid/mail';

class WeddingService {
    async sendNotConfirmed(request: Request, response: Response) {
        const { names, total } = request.body;

        if (!names) {
            response.status(400).json({ message: 'Data missing!' });
        }

        const templatePath = path.join(__dirname, '../Templates/Wedding', 'NotConfirmed.hbs');
        const templateSource = fs.readFileSync(templatePath, 'utf-8');
        const compiledTemplate = handlebars.compile(templateSource);

        const context = {
            names: names.split(","),
            total: total,
            year: new Date().getFullYear()
        };

        const htmlToSend = compiledTemplate(context);

        const mailOptions = {
            from: process.env.SSEMAIL,
            to: process.env.MYEMAIL,
            subject: 'Wedding - Jonathas e Bianca',
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

export default WeddingService