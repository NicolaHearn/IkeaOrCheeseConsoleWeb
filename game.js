const prompt = require('prompt-sync')();
const Round = require('./round.js');

class Game {
    constructor() {
        this.player = '';
        this.score = []
        this.rounds = 0;
        this.currentRound = new Round();
    }

    playGame() {
        const userChoice = prompt('Please enter ikea or cheese');
        console.log(userChoice);
    }
}

module.exports = Game;