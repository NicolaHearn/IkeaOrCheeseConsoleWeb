const Round = require("./round");
const prompt = require("prompt-sync")();

class Game {
  constructor(userName) {
    this.player = userName;
    this.score = [];
    this.rounds = 1;
    this.word;
    this.userGuess;
    this.currentRound = new Round();
  }

  playGame() {
    console.log(
      `Hello ${this.player}, is the word a type of cheese or an item on sale at Ikea? Type your answer after the prompts...`
    );
    while (this.rounds <= 10) {
      console.log(`Round: ${this.rounds}`);
      this.displayWord();
      this.userChoice();
      this.winOrLose();
    }
    console.log(`Game over, you scored ${this.calculateScore()}`);
  }

  displayWord() {
    console.log(this.currentRound.random());
  }

  userChoice() {
    const userChoice = prompt("Ikea or Cheese?");
    this.userGuess = userChoice;
    // return userChoice.toLowerCase();
  }

  winOrLose() {
    if (this.userGuess == "ikea" || this.userGuess === "cheese") {
      // console.log("word is ok");
      if (this.currentRound.match(this.userGuess) === true) {
        this.score.push(1);
        console.log("correct!\n");
      } else {
        this.score.push(0);
        console.log("incorrect :(\n");
      }
      this.rounds++;
    } else {
      console.log("please enter either ikea or cheese");
    }
  }

  newRound() {
    this.currentRound = new Round();
  }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}

module.exports = Game;
