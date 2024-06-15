import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const sendVerificationCode = async () => {
        try {
            await axios.post('/api/email-auth/send', { email });
            alert('Verification code sent to your email.');
        } catch (error) {
            console.error('Error sending verification code:', error);
        }
    };

    const verifyCode = async () => {
        try {
            await axios.post('/api/email-auth/verify', { email, code });
            setIsVerified(true);
            alert('Email verified successfully.');
        } catch (error) {
            console.error('Error verifying code:', error);
        }
    };

    return (
        <div>
            <h2>Email Verification</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendVerificationCode}>Send Verification Code</button>
            <input
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={verifyCode}>Verify Code</button>
            {isVerified && <p>Email verified! You can now mint your NFT.</p>}
        </div>
    );
};

export default EmailVerification;
