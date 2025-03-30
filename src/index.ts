import express from 'express';
import cors from 'cors';
import {router} from './routes';
import dotenv from 'dotenv';
//import sgMail from '@sendgrid/mail';

const app = express();
dotenv.config();
//sgMail.setApiKey(process.env.SSSENDGRIDKEY);

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is running!'));