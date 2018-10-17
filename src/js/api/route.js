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

    mine() {
        let prevBlock = this.blockchain.getPrevBlock()
        let proof = this.blockchain.pow(prevBlock['proof'])
        let prevHash = this.blockchain.hashBlock(prevBlock)
        this.blockchain.addTransaction('Bob', 'Alice', 1)
        let block = this.blockchain.createBlock(proof, prevHash)
        return {
            'message': 'You just mined a new block',
            'index': block['index'],
            'timestamp': block['timestamp'],
            'proof': block['proof'],
            'previous_hash': block['previous_hash'],
            'transactions': block['transactions']
        }
    }

    valid() {
        return this.blockchain.isChainValid(this.blockchain.chain) ? {
            'message': 'blockchain is valid'
        } : {
            'message': 'noo, something is wrong'
        }
    }
}