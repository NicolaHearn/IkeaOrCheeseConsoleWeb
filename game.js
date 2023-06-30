const Round = require('./round');
const UserGuess = require('./userGuess');

class Game {
    constructor() {
        this.rounds = 1;
        this.score = 0;
    }

    playRound() {
        const round = new Round();
        // const word = round.displayWord();
        const word = "koge";
    
        round.promptUser();
        const userGuess = new UserGuess("ikea");
        const result = round.winOrLose(word, userGuess.userInput);  
        //issue here because test works without the second argument! 
        return result ? "correct!" : "incorrect!";
    }


    playGame() {
        const result = this.playRound();
        console.log(result);
        result === "correct!" ? this.score += 1 : false;
    }
}

module.exports = Game; 