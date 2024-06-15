import React, { useState } from 'react';
import Caver from 'caver-js';
import useKaikas from '../hooks/useKaikas';
import { ABI, CONTRACT_ADDRESS } from '../services/contractService';

const caver = new Caver(window.klaytn);

const Whitelist = () => {
    const account = useKaikas();
    const [address, setAddress] = useState('');

    const handleAddToWhitelist = async () => {
        if (!account) {
            alert('Please connect to Kaikas wallet.');
            return;
        }

        try {
            const contract = new caver.klay.Contract(ABI, CONTRACT_ADDRESS);
            await contract.methods.addToWhitelist(address).send({
                from: account,
                gas: '2000000',
            });
            alert('Successfully added to whitelist');
        } catch (error) {
            console.error('Error adding to whitelist:', error);
            alert('Failed to add to whitelist');
        }
    };

    return (
        <div>
            <h2>Add to Whitelist</h2>
            <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleAddToWhitelist}>Add to Whitelist</button>
        </div>
    );
};

export default Whitelist;
