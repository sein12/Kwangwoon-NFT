import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import TeamMembers from "../components/TeamMembers";
import NFTPreview from "../components/NFTPreview";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const MainPage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h2" align="center" gutterBottom>
            광운대 NFT 프로젝트
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            광운대학교 학생들을 위한 NFT 프로젝트입니다. NFT를 통해 학교 생활의
            추억을 간직해보세요!
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={CustomLink}
                to="/signup"
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Introduction />
        <NFTPreview />
        <TeamMembers />
      </Container>
      <Footer />
    </div>
  );
};

export default MainPage;
