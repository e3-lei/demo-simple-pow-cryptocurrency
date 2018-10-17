const assert = require('assert')

import Route from './route.js'
import Blockchain from '../components/testCoin/blockchain'

describe('test for Route class', () => {
    let route
    beforeEach(() => {
        route = new Route(new Blockchain)
    });

    it('retrieve data from /get_chain api call', () => {
        const data = route.getChain()
        assert.equal(data.length, 1);
        assert.equal(data.chain.constructor.name, 'Array');
        assert.equal(data.chain[0].index, 1);
    });

    it('mines new block', () => {
        const data1 = route.mine()
        assert.equal(data1.index, 2);
        assert.equal(data1.transactions.length, 1);

        const data2 = route.mine()
        assert.equal(data2.index, 3);
        assert.equal(data2.transactions.length, 1);
    })
});
