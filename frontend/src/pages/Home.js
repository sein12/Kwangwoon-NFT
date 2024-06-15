import React from 'react';
import EmailVerification from '../components/EmailVerification';
import MintNFT from '../components/MintNFT';
import Whitelist from '../components/Whitelist';

const Home = () => {
    return (
        <div>
            <h1>Welcome to NFT Minting Platform</h1>
            <EmailVerification />
            <Whitelist />
            <MintNFT />
        </div>
    );
};

export default Home;
