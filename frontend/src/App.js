import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import SignUpPage from "./pages/signUpPage";
import SignUpLoginPage from "./pages/signUpLoginPage";
import NFTPage from "./pages/NFTPage";
import VotingPage from "./pages/votingPage";
import VotingResultPage from "./pages/votingResultPage";
import NFTMarketplacePage from "./pages/NFTMarketplacePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-login" element={<SignUpLoginPage />} />
          <Route path="/nft" element={<NFTPage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/voting-result" element={<VotingResultPage />} />
          <Route path="/marketplace" element={<NFTMarketplacePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
