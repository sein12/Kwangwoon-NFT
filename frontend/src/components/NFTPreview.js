import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const nftPreviews = [
  {
    title: "광운대학교 로고 NFT",
    description: "광운대학교의 로고를 NFT로 만나보세요.",
    image: "/symbol01_03.jpg",
  },
  {
    title: "광운대학교 마스코트 NFT",
    description: "광운대학교의 마스코트 '광운이'를 NFT로 소장해보세요.",
    image: "/uni_01.png",
  },
  {
    title: "광운대학교 기념품 NFT",
    description: "광운대학교의 다양한 기념품을 NFT로 간직해보세요.",
    image: "/uni_04.png",
  },
];

const NFTPreview = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        NFT 프리뷰
      </Typography>
      <Grid container spacing={2}>
        {nftPreviews.map((preview, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={preview.image}
                alt={preview.title}
              />
              <CardContent>
                <Typography variant="h6">{preview.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {preview.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NFTPreview;
