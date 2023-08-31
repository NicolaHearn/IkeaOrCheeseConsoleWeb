const UserGuess = require('../userGuess');

describe(UserGuess, () => {
  describe("user input", () => {
    it("accepts a string as an argument", () => {
      const userGuess = new UserGuess("myUserInput");
      expect(userGuess.userInput).toEqual("myUserInput");
    });
    it("asks the user to try again if the userInput is not a string", () => {
      const userGuess = new UserGuess(4);
      const result = userGuess.checkUserInput();

      expect(result).toEqual("Answer must be 'ikea' or 'cheese', please try again") 
    });
    it("asks the user to re-enter input if they type anything except 'ikea' or 'cheese'", () => {
      const userGuess = new UserGuess("July");
      const result = userGuess.checkUserInput();

      const nextuserGuess = new UserGuess(4);
      const nextResult = userGuess.checkUserInput();

      expect(result).toEqual("Answer must be 'ikea' or 'cheese', please try again");
      expect(nextResult).toEqual("Answer must be 'ikea' or 'cheese', please try again");
    })
  });

  
});
