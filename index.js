const express = require('express')

const Block = require('./block')
const Blockchain = require('./blockchain')
const Transaction = require('./transaction')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/blockchain', (req, res) => {
    
    const transaction = new Transaction('Aurelius', 'Augustus', 1337)
    
    const genesisBlock = new Block()
    const blockchain = new Blockchain(genesisBlock)
    
    const block = blockchain.getNextBlock([transaction])
    blockchain.addBlock(block)

    const anotherTransaction = new Transaction('Some', 'One', 7)
    const block1 = blockchain.getNextBlock([anotherTransaction, transaction])
    blockchain.addBlock(block1)

    res.json(blockchain)
})

app.listen(3000, () => console.log('Server has started'))



