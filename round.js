const Words = require("./words");
const Random = require('./random');

class Round {
    constructor() {
        this.words = new Words();
    }

    randomWord() {
        const random = new Random()
        return random.random();
    }

    promptUser() {
        return "Is it ikea or cheese?";
    }

    winOrLose(questionWord, currentGuess) {
      return (currentGuess === "ikea" && this.words.ikeaWords.includes(questionWord)) || (currentGuess === "cheese" && this.words.cheeseWords.includes(questionWord)) ? true : false;
      }

    //should I make this a getter and also have a setter that I call inside winOrLose?
    roundScore() {
        return this.score;
      }
}

module.exports = Round;