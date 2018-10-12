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
});
