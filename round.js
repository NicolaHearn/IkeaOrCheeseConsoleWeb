const Words = require("./words");

class Round {
    constructor() {
        this.words = new Words();
    }

    displayWord() {
        const word = new Words();
        return word.random();
    }

    promptUser() {
        return "Is it ikea or cheese?";
    }

    winOrLose(questionWord, currentGuess) {
          if (
            (currentGuess === "ikea" &&
              this.words.ikeaWords.includes(questionWord)) ||
            (currentGuess === "cheese" &&
              this.words.cheeseWords.includes(questionWord))
          ) {
            return true
          } else {
            return false
          }
      }

    //should I make this a getter and also have a setter that I call inside winOrLose?
    roundScore() {
        return this.score;
      }
}

module.exports = Round;