let assert = require('assert');

import Blockchain from './blockchain.js';

describe('test for class Blockchain', function() {
    it('should return insert the first block after init', function() {
        const blockchain = new Blockchain
        const firstBlock = blockchain.chain[0]

        assert.equal(blockchain.chain.length, 1);
        assert.equal(blockchain.transactions.length, 0);
        assert.equal(firstBlock.index, 1);
        assert.equal(firstBlock.proof, 1);
        assert.equal(firstBlock.previous_hash, 0);
        assert.equal(firstBlock.transactions.length, 0);
    });
    it('should create new block with pow', () => {
        const blockchain = new Blockchain
        const firstBlock = blockchain.chain[0]
        const secondBlock = blockchain.createBlock(blockchain.pow(firstBlock.proof), blockchain.hashBlock(firstBlock))

        assert.equal(blockchain.chain.length, 2);
        assert.equal(blockchain.transactions.length, 0);
        assert.equal(secondBlock.index, 2);
        assert.equal(secondBlock.previous_hash, blockchain.hashBlock(firstBlock));
        assert.equal(secondBlock.transactions.length, 0);
        assert.equal(blockchain.isChainValid(blockchain.chain), true)
    })
});
