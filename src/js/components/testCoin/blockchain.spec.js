let assert = require('assert');

import Blockchain from './blockchain.js';

describe('test for class Blockchain', () => {
    let blockchain;
    beforeEach(() => {
        blockchain = new Blockchain
    });

    it('should return insert the first block after init', function() {
        const firstBlock = blockchain.chain[0]

        assert.equal(blockchain.chain.length, 1);
        assert.equal(blockchain.transactions.length, 0);
        assert.equal(firstBlock.index, 1);
        assert.equal(firstBlock.proof, 1);
        assert.equal(firstBlock.previous_hash, 0);
        assert.equal(firstBlock.transactions.length, 0);
    });
    it('should create new block with pow', () => {
        const firstBlock = blockchain.chain[0]
        const secondBlock = blockchain.createBlock(blockchain.pow(firstBlock.proof), blockchain.hashBlock(firstBlock))

        assert.equal(blockchain.chain.length, 2);
        assert.equal(blockchain.transactions.length, 0);
        assert.equal(secondBlock.index, 2);
        assert.equal(secondBlock.previous_hash, blockchain.hashBlock(firstBlock));
        assert.equal(secondBlock.transactions.length, 0);
        assert.equal(blockchain.isChainValid(blockchain.chain), true)
    })
    it('should add transaction', () => {
        const firstBlock = blockchain.chain[0]
        blockchain.addTransaction('senderAddr', 'receiverAddr', 100)

        assert.equal(blockchain.transactions.length, 1);
        assert.equal(blockchain.transactions[0].sender, 'senderAddr');
        assert.equal(blockchain.transactions[0].receiver, 'receiverAddr');
        assert.equal(blockchain.transactions[0].amount, 100);
    })
    it('should add a node', () => {
        blockchain.addNode('http://127.0.0.1:8000/test/me')
        blockchain.addNode('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')

        assert.equal(blockchain.nodes.has('127.0.0.1'), true)
        assert.equal(blockchain.nodes.has('sub.host.com'), true)
        assert.equal(blockchain.nodes.has('test.test'), false)
    })
});
