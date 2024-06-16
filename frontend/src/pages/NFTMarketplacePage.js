import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getNFTs, purchaseNFT } from "../services/marketplaceService";

const NFTMarketplacePage = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const nftList = await getNFTs();
      setNFTs(nftList);
    };
    fetchNFTs();
  }, []);

  const handlePurchase = async (nftId) => {
    await purchaseNFT(nftId);
    // NFT 구매 후 처리 로직 추가
  };

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom>
            NFT 마켓플레이스
          </Typography>
          <Grid container spacing={2}>
            {nfts.map((nft) => (
              <Grid item xs={12} sm={6} md={4} key={nft.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={nft.image}
                    alt={nft.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{nft.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {nft.description}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="h6" component="span">
                        Price: {nft.price} ETH
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handlePurchase(nft.id)}
                        sx={{ ml: 2 }}
                      >
                        구매하기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default NFTMarketplacePage;
