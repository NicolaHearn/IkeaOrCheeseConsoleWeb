const Round = require('./round');
const UserGuess = require('./userGuess');

class Game {
    constructor() {
        this.rounds = 1;
        this.score = 0;
        this.wordThisRound = ''
        this.round;
    }

    startRound() {
            // let result = false;
            this.round = new Round();  
            this.wordThisRound = this.round.randomWord();
            this.rounds++  
            return `${this.wordThisRound}`;
    }

    checkUserInput(userInput) {
        return userInput === 'i' || userInput === 'c' ? true : "Answer must be 'i' for ikea or 'c' for cheese, please try again";
       }

    endRound(userInput) {
        const result = this.round.winOrLose(this.wordThisRound, userInput);
        result ? this.score ++ : false;
        return this.round.roundResult(result);
    }
    //start new game, keeps track of rounds. Pull the while loop into the thing that's using the game.
    
    gameInPlay() {
        return this.rounds <= 10;
    }

    displayScore() {
        return "game over, you scored: " + this.score;
    }
}

module.exports = Game; 