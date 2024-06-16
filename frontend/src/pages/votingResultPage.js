import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VotingResultPage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              투표 결과
            </Typography>
            <Typography variant="body1" align="center">
              투표가 성공적으로 제출되었습니다. 투표 결과는 추후 공개될
              예정입니다.
            </Typography>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default VotingResultPage;
