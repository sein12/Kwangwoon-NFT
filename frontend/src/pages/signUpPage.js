import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              회원가입
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              NFT 프로젝트에 참여하려면 회원가입이 필요합니다. 회원가입 후 NFT
              페이지로 이동하여 프로젝트를 경험해보세요!
            </Typography>
            <Box display="flex" justifyContent="center" mt={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={CustomLink}
                to="/signup-login"
              >
                회원가입하기
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUpPage;
