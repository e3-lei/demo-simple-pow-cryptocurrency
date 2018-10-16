import express from 'express';
import Blockchain from './components/testCoin/blockchain';
import Route from './api/route';

let app = express();

var port = process.env.PORT || 3000;

let blockchain = new Blockchain
let route = new Route(blockchain)

app.get('/get_chain', route.getChain());

app.listen(port, err => {
    if (err) {
        throw err;
    } else {
        console.log("Running on port " + port)
    }
})
