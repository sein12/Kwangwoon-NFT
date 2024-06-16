import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

const CustomRouterLink = styled(RouterLink)({
  textDecoration: "none",
});

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to the NFT Minting Platform
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            This is the home page. Navigate to the Email Verification page to
            get started.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              component={CustomRouterLink}
              to="/email-auth"
            >
              Go to Email Verification
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
