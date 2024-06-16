const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

let authCodes = {}; // 임시 저장소

router.post('/send', async (req, res) => {
    const { email } = req.body;
    const code = crypto.randomBytes(3).toString('hex').toUpperCase();
    authCodes[email] = code;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.verify(); // SMTP 연결 테스트
        console.log('SMTP connection verified');

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification Code',
            text: `Your verification code is ${code}`,
        });
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Verification code sent');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

router.post('/verify', (req, res) => {
    const { email, code } = req.body;
    if (authCodes[email] === code) {
        delete authCodes[email];
        res.status(200).send('Email verified');
    } else {
        res.status(400).send('Invalid code');
    }
});

module.exports = router;