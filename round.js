const Words = require("./words");

class Round {
    constructor() {
        
    }

    displayWord() {
        const word = new Words();
        return word.random();
    }
}

module.exports = Round;