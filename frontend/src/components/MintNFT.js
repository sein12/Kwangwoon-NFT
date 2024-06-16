import React, { useState } from "react";
import Caver from "caver-js";
import useKaikas from "../hooks/useKaikas";
import { ABI, CONTRACT_ADDRESS } from "../services/contractService";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
} from "@mui/material";

const caver = new Caver(window.klaytn);

const MintNFT = () => {
  const account = useKaikas();
  const [metadata, setMetadata] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const mintNFT = async () => {
    if (!account) {
      alert("Please connect to Kaikas wallet.");
      return;
    }

    try {
      const tokenURI = `ipfs://${metadata}`;
      const contract = new caver.klay.Contract(ABI, CONTRACT_ADDRESS);
      const result = await contract.methods.createNFT(tokenURI).send({
        from: account,
        gas: "2000000",
      });
      setSuccessMessage("NFT minted successfully: " + result.transactionHash);
      setErrorMessage("");
    } catch (error) {
      console.error("Error minting NFT:", error);
      setErrorMessage("Minting failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Mint NFT
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}
          <TextField
            label="IPFS Hash of Metadata"
            fullWidth
            value={metadata}
            onChange={(e) => setMetadata(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={mintNFT}>
            Mint NFT
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default MintNFT;
