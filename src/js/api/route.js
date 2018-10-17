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

    addTransaction(req) {
        let data = req.body
        let err
        const keys = ['sender', 'receiver', 'amount']
        keys.forEach(key => {
            console.log(key in data)
            if (!(key in data)) {
                err = true
            }
        })

        return err ? 0: this.blockchain.addTransaction(data['sender'], data['receiver'], data['amount'])
    }
}