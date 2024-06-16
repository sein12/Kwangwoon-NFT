import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 광운대 NFT 프로젝트. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
