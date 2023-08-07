class UserGuess {
  constructor(userInput) {
    this.userInput = userInput;
  }

  checkUserInput() {
    return this.userInput === 'ikea' || this.userInput === 'cheese' ? true : "Answer must be 'ikea' or 'cheese', please try again";
   }

  calculateScore() {
    return this.score.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}

module.exports = UserGuess;
