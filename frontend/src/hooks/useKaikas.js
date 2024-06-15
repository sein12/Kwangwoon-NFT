import { useState, useEffect } from 'react';

const useKaikas = () => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const connectWallet = async () => {
            if (window.klaytn) {
                try {
                    await window.klaytn.enable();
                    setAccount(window.klaytn.selectedAddress);
                    window.klaytn.on('accountsChanged', (accounts) => {
                        setAccount(accounts[0]);
                    });
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error('Kaikas 지갑을 설치하세요.');
            }
        };
        connectWallet();
    }, []);

    return account;
};

export default useKaikas;
