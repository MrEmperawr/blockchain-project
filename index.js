const Block = require('./block')
const Blockchain = require('./blockchain')
const Transaction = require('./transaction')

const transaction = new Transaction('Aurelius', 'Augustus', 1337)

const genesisBlock = new Block()
const blockchain = new Blockchain(genesisBlock)

console.log(blockchain)
