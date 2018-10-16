export default class Route {
    constructor(blockchain) {
        this.blockchain = blockchain
    }

    getChain() {
        return this.response(200, this.getChainJson())
    }

    getChainJson() {
        return {
            'chain': this.blockchain.chain,
            'length': this.blockchain.chain.length
        }
    }

    response(status, data) {
        return (req, res) => res.status(status).json(data)
    }
}