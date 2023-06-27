const mockInput = jest.fn();


const Round = require("./round");

describe(Round, () => {
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
      const round = new Round("myUserInput");
      expect(round.userInput).toEqual("myUserInput");
    });
    it("asks the user to try again if the userInput is not a string", () => {
      const round = new Round(4);
      const result = round.checkUserInput();

      expect(result).toEqual("Answer must be 'ikea' or 'cheese', please try again") 
    });
    it("asks the user to re-enter input if they type anything except 'ikea' or 'cheese'", () => {
      const round = new Round("July");
      const result = round.checkUserInput();

      expect(result).toEqual("Answer must be 'ikea' or 'cheese', please try again");
    })
  })

  // describe("user choice", () => {
  //   it("Says hello and gives instructions on how to play the game", () => {
  //     const game = new Game();
  //     const logSpy = jest.spyOn(console, "log");
  //     game.player = "Leo";
  //     mockInput.mockReturnValue("i");
  //     game.playGame();
  //     expect(logSpy).toHaveBeenCalledWith(
  //       "Hello Leo, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts..."
  //     );
  //   }); 
  // }); 

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
