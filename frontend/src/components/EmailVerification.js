import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
} from "@mui/material";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendVerificationCode = async () => {
    try {
      await axios.post("/api/email-auth/send", { email });
      setErrorMessage("");
      alert("Verification code sent to your email.");
    } catch (error) {
      console.error("Error sending verification code:", error);
      setErrorMessage("Failed to send verification code. Please try again.");
    }
  };

  const verifyCode = async () => {
    try {
      await axios.post("/api/email-auth/verify", { email, code });
      setIsVerified(true);
      setErrorMessage("");
      alert("Email verified successfully.");
    } catch (error) {
      console.error("Error verifying code:", error);
      setErrorMessage("Invalid verification code. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Email Verification
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={sendVerificationCode}
            sx={{ mb: 2 }}
          >
            Send Verification Code
          </Button>
          <TextField
            label="Verification Code"
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={verifyCode}>
            Verify Code
          </Button>
          {isVerified && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Email verified! You can now mint your NFT.
            </Alert>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default EmailVerification;
