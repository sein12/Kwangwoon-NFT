import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connectWallet, mintNFT, getTokenURI } from '../services/contractService';

const EmailAuth = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [account, setAccount] = useState(null);
    const [verified, setVerified] = useState(false);
    const [tokenId, setTokenId] = useState(null);
    const [nftImage, setNftImage] = useState(null);

    const sendVerificationCode = async () => {
        try {
            await axios.post('/api/email-auth/send', { email });
            setMessage('Verification code sent to ' + email);
        } catch (error) {
            setMessage('Error sending verification code');
        }
    };

    const verifyCode = async () => {
        try {
            await axios.post('/api/email-auth/verify', { email, code });
            setMessage('Email verified successfully. You can now connect your wallet and mint your NFT.');
            setVerified(true);
        } catch (error) {
            setMessage('Invalid verification code');
        }
    };

    const handleConnectWallet = async () => {
        console.log('Connecting to Kaikas wallet...');
        const account = await connectWallet();
        if (account) {
            setAccount(account);
            setMessage('Wallet connected: ' + account);
        } else {
            setMessage('Failed to connect wallet');
        }
    };

    const handleMintNFT = async () => {
        console.log('Mint NFT button clicked');
        if (!account) {
            alert('Please connect your wallet first');
            return;
        }

        const ipfsHash = 'QmRznhbtL9yLe4h4yP1a2KjVtSmUCwY7jrywoEhKfa2CPV';  // 미리 저장된 IPFS 해시

        try {
            console.log('Attempting to mint NFT with the following details:');
            console.log('Account:', account);
            console.log('IPFS Hash:', ipfsHash);
            const result = await mintNFT(account, ipfsHash);
            if (result) {
                setMessage('NFT minted successfully!');
                const newTokenId = result.events.Transfer.returnValues.tokenId; // 민팅된 토큰 ID 추출
                setTokenId(newTokenId);
            } else {
                setMessage('Error minting NFT');
            }
        } catch (error) {
            console.error('Error minting NFT: ', error);
            setMessage('Error minting NFT');
        }
    };

    useEffect(() => {
        const fetchTokenURI = async () => {
            if (tokenId) {
                const tokenURI = await getTokenURI(tokenId);
                if (tokenURI) {
                    const response = await axios.get(`https://ipfs.io/ipfs/${tokenURI.split('ipfs://')[1]}`);
                    const imageUrl = response.data.image;
                    setNftImage(`https://ipfs.io/ipfs/${imageUrl.split('ipfs://')[1]}`);
                }
            }
        };
        fetchTokenURI();
    }, [tokenId]);

    return (
        <div>
            <h2>Welcome to NFT Minting Platform</h2>
            <h3>Email Verification</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={verified}
            />
            <button onClick={sendVerificationCode} disabled={verified}>Send Verification Code</button>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter verification code"
                disabled={verified}
            />
            <button onClick={verifyCode} disabled={verified}>Verify Code</button>
            <p>{message}</p>

            {verified && (
                <>
                    <h3>Connect Wallet</h3>
                    <button onClick={handleConnectWallet}>Connect Kaikas Wallet</button>
                    <br />
                    {account && (
                        <>
                            <h3>Mint NFT</h3>
                            <button onClick={handleMintNFT}>Mint NFT</button>
                        </>
                    )}
                </>
            )}

            {nftImage && (
                <div>
                    <h3>Your Minted NFT</h3>
                    <img src={nftImage} alt="Minted NFT" style={{ maxWidth: '300px', border: '1px solid #ccc' }} />
                </div>
            )}
        </div>
    );
};

export default EmailAuth;
