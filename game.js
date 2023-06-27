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
        const word = "koge"
    
        round.promptUser();
        const userGuess = new UserGuess("ikea");
          
        //issue here because test works without the second argument! 
        return round.winOrLose(word, userGuess) ? "correct!" : "incorrect!";
    }


    playGame() {
        console.log(this.playRound());
        this.playRound() === "correct!" ? this.score += 1 : false;
    }
}

module.exports = Game; 