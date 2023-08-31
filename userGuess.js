class UserGuess {
  constructor(userInput) {
    this.userInput = userInput;
  }
  
  collectGuess() {
    const input = "Please enter a guess: ";
    return("You entered: " + input);
    this.userInput = input;
  }

  checkUserInput() {
    return this.userInput === 'ikea' || this.userInput === 'cheese' ? true : "Answer must be 'ikea' or 'cheese', please try again";
   }

}

module.exports = UserGuess;
