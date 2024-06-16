import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { checkNFTOwnership, vote } from "../services/votingService";

const VotingPage = () => {
  const [isNFTHolder, setIsNFTHolder] = useState(false);
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkOwnership = async () => {
      const isHolder = await checkNFTOwnership();
      setIsNFTHolder(isHolder);
      setIsLoading(false);
    };
    checkOwnership();
  }, []);

  const handleVote = async () => {
    if (selectedProposal) {
      setIsLoading(true);
      await vote(selectedProposal);
      setIsLoading(false);
      navigate("/voting-result");
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              NFT 홀더 투표
            </Typography>
            {isLoading ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
              </Box>
            ) : isNFTHolder ? (
              <>
                <Typography variant="body1" gutterBottom>
                  아래 제안 중 하나를 선택하여 투표해주세요.
                </Typography>
                <List>
                  {proposals.map((proposal, index) => (
                    <ListItem
                      key={index}
                      button
                      selected={selectedProposal === proposal}
                      onClick={() => setSelectedProposal(proposal)}
                    >
                      <ListItemText primary={proposal} />
                    </ListItem>
                  ))}
                </List>
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleVote}
                    disabled={!selectedProposal}
                  >
                    투표하기
                  </Button>
                </Box>
              </>
            ) : (
              <Typography variant="body1" align="center">
                투표에 참여하려면 NFT를 소유해야 합니다.
              </Typography>
            )}
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default VotingPage;
