export default class Blockchain {
    constructor() {
        this.hashlib = require('jshashes')
        this.sha256 = new this.hashlib.SHA256

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

    getPrevBlock() {
        return this.chain[-1]
    }

    pow(prevProof) {
        let newProof = 1
        let checkProof = false
        while (!checkProof) {
            if (this.isHashValid(this.calcHash(newProof, prevProof))) {
                return newProof;
            } 

            newProof++
        }
    }

    isChainValid(chain) {
        let prevBlock = chain[0]
        let blockIndex = 1
        while (blockIndex < chain.length) {
            const block = chain[blockIndex]
            if (block['previous_hash'] != this.hashBlock(prevBlock)) {
                return false
            }

            const hash = this.calcHash(block['proof'], prevBlock['proof'])
            if (!this.isHashValid(hash)) {
                return false
            }

            prevBlock = block
            blockIndex++
        }

        return true
    }

    calcHash(newProof, prevProof) {
        return this.sha256.hex((Math.pow(newProof, 2) - Math.pow(prevProof, 2)).toString())
    }

    isHashValid(hash) {
        return hash.substring(0, 4) === '0000'
    }

    hashBlock(block) {
        return this.sha256.hex(JSON.stringify(block, Object.keys(block).sort()));
    }
}