import { Words } from "./words.js";
// const prompt = require("prompt-sync")();

export class Game {
  constructor(userName) {
    this.player = userName;
    this.score = [];
    this.rounds = 1;
    this.currentWord;
    this.userGuess;
    this.words = new Words();
  }

  playGame() {
    console.log(
      `Hello ${this.player}, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts...`
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
    this.currentWord = this.words.random();
    console.log(this.currentWord);
  }

  userChoice() {
    const userChoice = prompt("Ikea or Cheese? ");
    this.userGuess = userChoice.toLowerCase();
  }

  winOrLose() {
    if (this.userGuess === "i" || this.userGuess === "c") {
      if (
        (this.userGuess === "i" &&
          this.words.ikeaWords.includes(this.currentWord)) ||
        (this.userGuess === "c" &&
          this.words.cheeseWords.includes(this.currentWord))
      ) {
        this.score.push(1);
        console.log("correct!\n");
      } else {
        this.score.push(0);
        console.log("incorrect :(\n");
      }
      this.rounds++;
    } else {
      console.log("please enter either 'i' or 'c'");
    }
  }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}
