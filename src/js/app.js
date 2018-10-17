import express from 'express'
import Blockchain from './components/testCoin/blockchain'
import Route from './api/route'

let app = express();

var port = process.env.PORT || 3000;

let blockchain = new Blockchain
let route = new Route(blockchain)

app.get('/get_chain', (req, res) => res.status(200).json(route.getChain()));
app.get('/mine', (req, res) => res.status(200).json(route.mine()));
app.get('/valid', (req, res) => res.status(200).json(route.valid()));

app.listen(port, err => {
    if (err) {
        throw err;
    } else {
        console.log("Running on port " + port)
    }
})
