"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var transporter = nodemailer_1.default.createTransport({
    service: process.env.SSMAILER,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SSEMAIL,
        pass: process.env.SSPASSWORD
    }
});
exports.default = transporter;
