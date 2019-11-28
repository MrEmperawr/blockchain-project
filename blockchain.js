const sha256 = require('./node_modules/js-sha256')
const Block = require('./block')

class Blockchain {
    constructor (genesisBlock) {
        this.blocks = []
        this.addBlock(genesisBlock)
    }

    addBlock(block) {
        if (this.blocks.length == 0) {
            block.previousHash = '00000000000000'
            block.hash = this.generateHash(block)
        }

        this.blocks.push(block)
    }

    getNextBlock(transactions) {
        const block = new Block()

        transactions.forEach((transaction) => {
            block.addTransaction(transaction)
        })

        const previousBlock = this.getPreviousBlock()
        block.index = this.blocks.length
        block.previousHash = previousBlock.hash
        block.hash = this.generateHash(block)
    }

    getPreviousBlock() {
        return this.blocks[this.block.length - 1]
    }

    generateHash(block) {
        const hash = sha256(block.key)

        while(!hash.startsWith('00000')) {
            block.nonce += 1
            hash = sha256(block.key)
            console.log(hash)
        }

        return hash
    }
}

module.exports = Blockchain