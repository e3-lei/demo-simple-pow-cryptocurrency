export default class Route {
    constructor(blockchain) {
        this.blockchain = blockchain
    }

    getChain() {
        return {
            'chain': this.blockchain.chain,
            'length': this.blockchain.chain.length
        }
    }

    getChainResponse() {
        return this.response(200, this.getChain())
    }

    response(status, data) {
        return (req, res) => res.status(status).json(data)
    }
}