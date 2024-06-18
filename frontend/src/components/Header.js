import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  marginRight: "1rem",
});

const CustomButton = styled(Button)({
  color: "white",
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={CustomLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
        >
          광운대 NFT 프로젝트
        </Typography>
        <CustomButton component={CustomLink} to="/voting">
          voting
        </CustomButton>
        <CustomButton component={CustomLink} to="/marketplace">
          마켓플레이스
        </CustomButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
