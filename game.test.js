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
        const result = game.playRound();
        const resultMatch = [true, false]

        expect(resultMatch).toContain(result);
    })
});

describe("score", () => {
    it("keeps track of the score", () => {
        const game = new Game();
        game.playRound(true);
        game.playRound(true);
        game.playRound(false);
        
        expect(game.score).toEqual(2);
    })
})

describe("playGame()", () => {
    it("calls playRound() for ten rounds then displays game over", () => {
      const game = new Game();
      game.playGame();

      expect(game.rounds).toEqual(11);
    });

    it("returns a game over message and gives the player the score at the end of the game", () => {
      const game = new Game();

      expect(game.playGame()).toEqual("game over, you scored: " + game.score);
    })
  });

});

