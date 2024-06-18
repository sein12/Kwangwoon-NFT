import React from "react";
import { Typography, Box } from "@mui/material";

const Introduction = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        프로젝트 소개
      </Typography>
      <Typography variant="body1" paragraph>
        광운대 NFT 프로젝트는 광운대학교 학생들을 대상으로 재학생임을 인증하는
        NFT를 발행하고, 이를 이용한 서비스를 제공합니다. 학생들은 학생증 뿐만
        아니라 NFT로도 재학생임을 인증할 수 있고, 이를 이용해 학교 내에서 다양한
        서비스를 이용할 수 있습니다.
      </Typography>
    </Box>
  );
};

export default Introduction;
