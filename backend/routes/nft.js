const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController.js');

router.post('/mint', nftController.mintNFT);

module.exports = router;
