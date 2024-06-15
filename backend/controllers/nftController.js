const Caver = require('caver-js');
const caver = new Caver('https://api.cypress.klaytn.net:8651');

exports.mintNFT = async (req, res) => {
    const { address, metadata } = req.body;

    try {
        const contract = new caver.klay.Contract(ABI, CONTRACT_ADDRESS);
        const result = await contract.methods.mint(address, metadata).send({
            from: DEPLOYER_ADDRESS,
            gas: '2000000',
        });

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
