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

  displayWord() {
    const para = document.createElement("p");
    para.innerText = this.words.random();
    document.body.appendChild(para);
    // console.log(this.currentWord);
  }

  userChoice() {
    const chooseIkea = document.createElement("button");
    chooseIkea.textContent = "IKEA";
    chooseIkea.setAttribute("value", "i");
    document.body.appendChild(chooseIkea);
    chooseIkea.addEventListener("click", () => console.log(chooseIkea.value));

    const chooseCheese = document.createElement("button");
    chooseCheese.textContent = "CHEESE";
    chooseCheese.setAttribute("value", "c");
    document.body.appendChild(chooseCheese);
    chooseCheese.addEventListener("click", () =>
      console.log(chooseCheese.value)
    );

    this.userGuess = inputChoice.value.toLowerCase();
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
