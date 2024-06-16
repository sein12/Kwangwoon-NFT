import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the NFT Minting Platform</h2>
            <p>This is the home page. Navigate to the Email Verification page to get started.</p>
            <Link to="/email-auth">Go to Email Verification</Link>
        </div>
    );
};

export default Home;
