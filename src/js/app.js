import express from 'express'
import Blockchain from './components/testCoin/blockchain'
import Route from './components/api/route'
import "@babel/polyfill"

let app = express();

var port = process.env.PORT || 3000;

let blockchain = new Blockchain
let route = new Route(blockchain)

app.get('/get_chain', (req, res) => res.status(200).json(route.getChain()));
app.get('/mine', (req, res) => res.status(200).json(route.mine()));
app.get('/valid', (req, res) => res.status(200).json(route.valid()));
app.get('/sync', async (req, res) => res.status(200).json(await route.sync()));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/add_transaction', (req, res) => {
    let index = route.addTransaction(req)
    if (index === 0) {
        return res.status(422).json({'message': 'required parameter sender, receiver, amount missing'})
    }

    return res.status(201).json({'message': 'transaction added to block' + index })
});

app.post('/connect', (req, res) => {
    let response = route.connect(req)
    if (!response) {
        return res.status(422).json({'message': 'required parameter nodes missing'})   
    }

    return res.status(201).json(response)
})

app.listen(port, err => {
    if (err) {
        throw err;
    } else {
        console.log("Running on port " + port)
    }
})
