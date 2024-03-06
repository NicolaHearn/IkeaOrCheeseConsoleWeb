jest.mock("../round", () => {
  return jest.fn().mockImplementation(() => {
    return {
      randomWord: jest.fn(() => "testWord"),
    };
  });
});

const Game = require("../game.js");
const Round = require("../round.js");

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
    game.previousWords = [];
    game.score = 0;
    game.wordThisRound = "exampleWord";
  });
  describe("constructs with game data", () => {
    it("at the beginning of the game, the number of rounds is set to 0", () => {
      expect(game.rounds).toEqual(0);
    });
    it("at the beginning of the game, the score is set to zero", () => {
      expect(game.score).toEqual(0);
    });
  });

  describe("startRound()", () => {
    it("startRound returns a new round", () => {
      const word = game.startRound();
      expect(word).toBe("testWord");
      expect(game.previousWords).toContain("testWord");
      expect(game.rounds).toBe(1);
    });

    it("startRound does not repeat words", () => {
      Round.mockImplementation(() => ({
        randomWord: jest
          .fn()
          .mockReturnValueOnce("firstWord")
          .mockReturnValueOnce("firstWord")
          .mockReturnValue("secondWord"),
      }));

      game.startRound();
      const secondRoundWord = game.startRound();

      expect(secondRoundWord).toBe("secondWord");
      expect(game.previousWords).toEqual(
        expect.arrayContaining(["firstWord", "secondWord"])
      );
      expect(game.rounds).toBe(2);
    });
  });

  describe("checkUserInput", () => {
    test('returns true for valid input "i"', () => {
      const input = "i";
      const result = game.checkUserInput(input);
      expect(result).toBe(true);
    });

    test('returns true for valid input "c"', () => {
      const input = "c";
      const result = game.checkUserInput(input);
      expect(result).toBe(true);
    });

    test("returns error message for invalid input", () => {
      const input = "x";
      const result = game.checkUserInput(input);
      expect(result).toBe(
        "Answer must be 'i' for ikea or 'c' for cheese, please try again"
      );
    });
  });

  describe("endRound", () => {
    beforeEach(() => {
      game.wordThisRound = "exampleWord";
      game.round = {
        winOrLose: jest.fn(),
        roundResult: jest.fn(),
      };
    });

    it("increments score and returns round result message on win", () => {
      game.round.winOrLose.mockReturnValue(true);
      const successMessage = "Correct! You've guessed the word.";
      game.round.roundResult.mockReturnValue(successMessage);

      const userInput = "exampleWord";
      const result = game.endRound(userInput);

      expect(game.score).toBe(1);
      expect(game.round.roundResult).toHaveBeenCalledWith(true);
      expect(result).toBe(successMessage);
    });

    // it("does not increment score and returns false on loss", () => {
    //   game.round.winOrLose.mockReturnValue(false);

    //   const userInput = "wrongWord";
    //   const initialScore = game.score;
    //   const result = game.endRound(userInput);

    //   expect(game.score).toBe(initialScore);
    //   expect(result).toBe(false);
    //   expect(game.round.roundResult).not.toHaveBeenCalled();
    // });
    it("does not increment score and returns false on loss", () => {
      game.round.winOrLose.mockReturnValue(false);
      game.round.roundResult.mockReturnValue(false);

      const userInput = "wrongWord";
      const initialScore = game.score;
      const result = game.endRound(userInput);

      expect(game.score).toBe(initialScore);
      expect(result).toBe(false);
      expect(game.round.roundResult).toHaveBeenCalledWith(false);
    });
  });

  describe("gameInPlay", () => {
    it("returns true when the number of rounds is less than or equal to 10", () => {
      game.rounds = 5;
      expect(game.gameInPlay()).toBe(true);
    });

    it("returns false when the number of rounds is greater than 10", () => {
      game.rounds = 11;
      expect(game.gameInPlay()).toBe(false);
    });
  });

  describe("displayScore", () => {
    it("returns the correct score message at the end of the game", () => {
      game.score = 7;
      const expectedMessage = "game over, you scored: 7";
      expect(game.displayScore()).toBe(expectedMessage);
    });
  });
});
