import Blockchain from "../components/testCoin/blockchain";

export default class Route {
    constructor(blockchain) {
        this.blockchain = blockchain
    }

    getChain() {
        return (req, res) => res.status(200).json({
            'chain': this.blockchain.chain,
            'length': this.blockchain.chain.length
        })
    }
}