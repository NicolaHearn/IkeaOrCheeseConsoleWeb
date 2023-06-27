const UserGuess = require('./userGuess');

describe(UserGuess, () => {
  // describe("game data", () => {
  //   it("at the beginning of the game, the number of rounds is set to zero", () => {
  //     const game = new Game();

  //     expect(game.rounds).toEqual(1);
  //   });
  //   it("at the beginning of the game, the score is set to an empty array", () => {
  //     const game = new Game();

  //     expect(game.score).toEqual([]);
  //   });
  // });

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

  

  

  // describe("winOrLose()", () => {
  //   it("checks whether the user has won or lost the round", () => {
  //     const game1 = new Game();
  //     game1.currentWord = "gammalost";
  //     mockInput.mockReturnValue("i");
  //     game1.userChoice();
  //     game1.winOrLose();

  //     const game2 = new Game();
  //     game2.currentWord = "tvarhand";
  //     mockInput.mockReturnValue("i");
  //     game2.userChoice();
  //     game2.winOrLose();

  //     expect(game1.score).toEqual([0]);
  //     expect(game2.score).toEqual([1]);
  //   });
  // });

  // describe("playGame()", () => {
  //   it("plays ten rounds per game", () => {
  //     const game = new Game();
  //     game.player = "Joel";
  //     mockInput.mockReturnValue("i");
  //     game.playGame();

  //     expect(game.rounds).toEqual(11);
  //   });
  // });

  // describe("calculates the score", () => {
  //   it("returns the total score", () => {
  //     const game = new Game();
  //     game.player = "Leo";
  //     mockInput.mockReturnValue("i");
  //     game.playGame();

  //     expect(typeof game.calculateScore()).toEqual("number");
  //   });
  // });
});
