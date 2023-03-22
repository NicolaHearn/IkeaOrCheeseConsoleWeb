const prompt = require('prompt-sync')();
const Round = require('./round.js');

class Game {
    constructor() {
        this.player = '';
        this.score = []
        this.rounds = 1;
        this.currentRound = new Round();
    }

    playGame() {
        while (this.rounds <= 10) {
        console.log(`Round: ${this.rounds}`);
        this.displayWord();
        this.winOrLose();
        this.currentRound = new Round();
        }

        console.log(`Game over, you scored ${this.calculateScore()}. Would you like to play again?`)
    }

    displayWord() {
        console.log(this.currentRound.randomWord);
    }

    userChoice() {
        const userChoice = prompt('Ikea or Cheese?');
        return userChoice;
    }

    winOrLose() {
        if (this.currentRound.match(this.userChoice())) {
            this.score.push(1);
            console.log('correct!\n');
        } else {
            this.score.push(0);
            console.log('incorrect :(\n');
        }
        this.rounds += 1;
    }

    newRound() {
        this.currentRound = new Round();
    }

    calculateScore() {
        return this.score.reduce(
            (accumulator, currentValue) => accumulator + currentValue)
    }
}

module.exports = Game;