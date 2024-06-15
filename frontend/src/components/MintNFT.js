import React, { useState } from 'react';
import Caver from 'caver-js';
import useKaikas from '../hooks/useKaikas';
import { ABI, CONTRACT_ADDRESS } from '../services/contractService';

const caver = new Caver(window.klaytn);

const MintNFT = () => {
    const account = useKaikas();
    const [metadata, setMetadata] = useState('');

    const mintNFT = async () => {
        if (!account) {
            alert('Please connect to Kaikas wallet.');
            return;
        }

        try {
            const tokenURI = `ipfs://${metadata}`; // 메타데이터 IPFS 해시
            const contract = new caver.klay.Contract(ABI, CONTRACT_ADDRESS);
            const result = await contract.methods.createNFT(tokenURI).send({
                from: account,
                gas: '2000000',
            });

            alert('NFT minted successfully: ' + result.transactionHash);
        } catch (error) {
            console.error('Error minting NFT:', error);
            alert('Minting failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Mint NFT</h2>
            <input
                type="text"
                placeholder="Enter IPFS hash of metadata"
                value={metadata}
                onChange={(e) => setMetadata(e.target.value)}
            />
            <button onClick={mintNFT}>Mint NFT</button>
        </div>
    );
};

export default MintNFT;
