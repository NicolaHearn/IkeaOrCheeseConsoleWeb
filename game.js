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
    // while (this.rounds <= 10) {
    this.displayGame();
    this.displayWord();
    this.userChoice();
    this.winOrLose();
    // }
    console.log(`Game over, you scored ${this.calculateScore()}`);
  }

  greetPlayer() {
    const playerWelcome = document.getElementById("playerWelcome");
    playerWelcome.innerHTML = `Hello ${this.player}, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts...`;
    playerWelcome.style.display = "inline";
  }

  displayGame() {
    document.getElementById("game").style.display = "inline";
  }

  displayWord() {
    document.getElementById("questionWord").innerText = this.words.random();
    // console.log(this.currentWord);
  }

  userChoice() {
    document
      .getElementById("chooseIkea")
      .addEventListener(
        "click",
        () => ((this.userGuess = chooseIkea.value), console.log(this.userGuess))
      );

    document
      .getElementById("chooseCheese")
      .addEventListener(
        "click",
        () => (
          (this.userGuess = chooseCheese.value), console.log(this.userGuess)
        )
      );
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
        const para = document.createElement("p");
        para.innerText = "Correct!";
        document.body.appendChild(para);
      } else {
        this.score.push(0);
        const para = document.createElement("p");
        para.innerText = "Incorrect!";
        document.body.appendChild(para);
      }
      this.rounds++;
    } else {
      const para = document.createElement("p");
      para.innerText = "Please enter either 'i' or 'c'";
      document.body.appendChild(para);
    }
  }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}
