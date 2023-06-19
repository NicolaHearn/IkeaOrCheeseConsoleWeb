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
    if (this.rounds < 10) {
      this.displayGame();
      this.setRounds();
      this.setCurrentWord();
      this.displayWord();
      this.userChoice();
    } else {
      this.hideGame();
      this.gameOver();
    }
  }

  greetPlayer() {
    const playerWelcome = document.getElementById("playerWelcome");
    playerWelcome.innerHTML = `Hello ${this.player}, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts...`;
    playerWelcome.style.display = "inline";
  }

  displayGame() {
    document.getElementById("game").style.display = "inline";
  }

  hideGame() {
    document.getElementById("game").style.display = "none";
  }

  gameOver() {
    document.getElementById("gameOver").style.display = "inline";
  }

  setRounds() {
    document.getElementById("round").innerText = `Round ${this.rounds}`;
  }

  setCurrentWord() {
    this.currentWord = this.words.random();
  }

  displayWord() {
    document.getElementById("questionWord").innerText = this.currentWord;
    // console.log(this.currentWord);
  }

  userChoice() {
    const chooseIkea = document.getElementById("chooseIkea");

    chooseIkea.addEventListener(
      "click",
      () => (
        (this.userGuess = chooseIkea.value),
        console.log(this.userGuess),
        this.winOrLose(this.userGuess),
        this.setRounds(),
        this.setCurrentWord(),
        this.displayWord()
      )
    );

    const chooseCheese = document.getElementById("chooseCheese");

    chooseCheese.addEventListener(
      "click",
      () => (
        (this.userGuess = chooseCheese.value),
        console.log(this.userGuess),
        this.winOrLose(this.userGuess),
        this.setRounds(),
        this.setCurrentWord(),
        this.displayWord()
      )
    );

    return this.userGuess;
  }

  winOrLose(userGuess) {
    if (
      (userGuess === "IKEA" &&
        this.words.ikeaWords.includes(this.currentWord)) ||
      (userGuess === "CHEESE" &&
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
    console.log(this.rounds);
  }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}
