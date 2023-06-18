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
    document.getElementById("round").innerText = `Round ${this.rounds}`;
    document.getElementById("answer").innerText = "";
    this.displayGame();
    this.displayWord();
    this.userChoice();
    console.log(this.rounds);
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
    const chooseIkea = document.getElementById("chooseIkea");

    chooseIkea.addEventListener(
      "click",
      () => (
        (this.userGuess = chooseIkea.value),
        console.log(this.userGuess),
        this.winOrLose()
      )
    );

    const chooseCheese = document.getElementById("chooseCheese");

    chooseCheese.addEventListener(
      "click",
      () => (
        (this.userGuess = chooseCheese.value),
        console.log(this.userGuess),
        this.winOrLose()
      )
    );

    // document.getElementById("game").addEventListener("submit", () => {
    //   this.winOrLose();
    // });
  }

  winOrLose() {
    if (
      (this.userGuess === "IKEA" &&
        this.words.ikeaWords.includes(this.currentWord)) ||
      (this.userGuess === "CHEESE" &&
        this.words.cheeseWords.includes(this.currentWord))
    ) {
      this.score.push(1);
      document.getElementById("answer").innerText = "Correct!";
      console.log("Correct");
    } else {
      this.score.push(0);
      document.getElementById("answer").innerText = "Incorrect!";
      console.log("Incorrect");
    }
    this.rounds++;
  }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}
