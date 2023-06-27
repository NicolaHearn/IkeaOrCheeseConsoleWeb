class UserGuess {
  constructor(userInput) {
    this.userInput = userInput;
  }

  checkUserInput() {
    return this.userInput === 'ikea' || this.userInput === 'cheese' ? true : "Answer must be 'ikea' or 'cheese', please try again";
   }

  playRound() {
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

module.exports = UserGuess;
