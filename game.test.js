const Game = require('./game');
const Round = require('./round');

describe(Game, () => {
describe("constructs with game data", () => {
    it("at the beginning of the game, the number of rounds is set to 1", () => {
      const game = new Game();

      expect(game.rounds).toEqual(1);
    });
    it("at the beginning of the game, the score is set to zero", () => {
      const game = new Game();

      expect(game.score).toEqual(0);
    });
  });

describe("plays a round", () => {
    it("has a playRound method which calls round.displayWord(), prompts the user for input, calls round.userGuess(), passes the result of the method calls to round.winOrLose() and returns a score from the Round module", () => {
        const game = new Game();
        const round = new Round();
        
        const result = game.playRound();
        const resultMatch = ["correct!", "incorrect!"]

        expect(resultMatch).toContain(result);
    })
});

describe("score", () => {
    it("keeps track of the score", () => {
        const game = new Game();
        game.playGame();
        game.playGame();

        
        expect(game.score).toEqual(2);
    })
})

describe("playGame()", () => {
    it("calls playRound() for ten rounds then displays game over", () => {
      const game = new Game();
      

      expect(game.rounds).toEqual(11);
    });
  });

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

