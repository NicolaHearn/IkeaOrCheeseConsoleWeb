const Words = require("./words");

class Round {
    constructor() {
        this.words = new Words();
    }

    displayWord() {
        const word = new Words();
        return word.random();
    }

    winOrLose(questionWord, currentGuess) {
        console.log(questionWord);
        console.log(currentGuess)
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
    

}

module.exports = Round;