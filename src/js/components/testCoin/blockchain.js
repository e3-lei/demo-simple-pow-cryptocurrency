export default class Blockchain {
    constructor() {
        this.chain = []
        this.transactions = []
        this.nodes = new Set()
        this.createBlock(1, '0') // init block
    }

    createBlock(proof, previousHash) {
        const block = {
            'index': this.chain.length + 1,
            'timestamp': Date.now().toString(),
            'proof': proof,
            'previous_hash': previousHash,
            'transactions': this.transactions 
        }
        this.transactions = []
        this.chain.push(block)

        return block
    }
}