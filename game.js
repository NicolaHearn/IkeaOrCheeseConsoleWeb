const Round = require('./round');
const UserGuess = require('./userGuess');

class Game {
    constructor() {
        this.rounds = 1;
        this.score = 0;
    }

    playRound(testArg) {
        let result = false;
       
        if (typeof testArg === 'undefined') {
            const round = new Round();    
            round.promptUser();
            const word = round.randomWord();
            const userGuess = new UserGuess("cheese");
            result = round.winOrLose(word, userGuess.userInput); 
        }
        else {
            result = testArg;
        }

        this.rounds ++
        result ? this.score ++ : false;
        return result
    }
        
    playGame() {
        while (this.rounds <= 10) {
        this.playRound();
        }
        return "game over, you scored: " + this.score;
    }
}

module.exports = Game; 