import React from "react";
import { Typography, Box } from "@mui/material";

const Introduction = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        프로젝트 소개
      </Typography>
      <Typography variant="body1" paragraph>
        광운대 NFT 프로젝트는 학생들의 학교 생활 추억을 NFT로 만들어 보관하고
        공유할 수 있는 프로젝트입니다. 학생들은 자신만의 특별한 추억을 NFT로
        만들어 소장하고, 다른 학생들과 공유할 수 있습니다.
      </Typography>
    </Box>
  );
};

export default Introduction;
