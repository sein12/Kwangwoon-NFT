import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // 회원가입 처리
      const newUser = { email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      setIsLoggedIn(true);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } else {
      // 로그인 처리
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          setIsLoggedIn(true);
          alert("로그인되었습니다.");
          navigate("/");
        } else {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        }
      } else {
        alert("등록된 사용자가 없습니다.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    alert("로그아웃되었습니다.");
  };

  if (isLoggedIn) {
    return (
      <div>
        <Header />
        <Container maxWidth="sm">
          <Box my={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                환영합니다!
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                로그인된 상태입니다.
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleLogout}
                >
                  로그아웃
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              {isSignUp ? "회원가입" : "로그인"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="이메일"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="비밀번호"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                {isSignUp ? "회원가입" : "로그인"}
              </Button>
            </form>
            <Box mt={2} display="flex" justifyContent="center">
              <Button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp
                  ? "이미 계정이 있나요? 로그인하기"
                  : "계정이 없나요? 회원가입하기"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUpLoginPage;
