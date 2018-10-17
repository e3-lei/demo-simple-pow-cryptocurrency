const assert = require('assert')

import Route from './route.js'
import Blockchain from '../components/testCoin/blockchain'

describe('test for Route class', () => {
    let route
    beforeEach(() => {
        route = new Route(new Blockchain)
    });

    it('retrieve data from /get_chain api call', function() {
        const data = route.getChain()
        assert.equal(data.length, 1);
        assert.equal(data.chain.constructor.name, 'Array');
        assert.equal(data.chain[0].index, 1);
    });
});
