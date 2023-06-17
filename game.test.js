const mockInput = jest.fn();
jest.mock("prompt-sync", () => () => mockInput);

const Game = require("./game");

describe(Game, () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("game data", () => {
    it("at the beginning of the game, the number of rounds is set to zero", () => {
      const game = new Game();

      expect(game.rounds).toEqual(1);
    });
    it("at the beginning of the game, the score is set to an empty array", () => {
      const game = new Game();

      expect(game.score).toEqual([]);
    });

    it("at the beginning of the game, it initiates a new round", () => {
      const game = new Game();

      expect(game.currentRound.ikeaWords).toContain("tvarhand");
    });
  });

  describe("user choice", () => {
    it("prompts the user to choose ikea or cheese", () => {
      const game = new Game();
      game.playGame();
      // game.userChoice();

      expect(mockInput).toHaveBeenCalledWith("Ikea or Cheese?");
    });

    it('should call "ikea"', () => {
      mockInput.mockReturnValue("ikea");

      const game = new Game();

      expect(game.userChoice()).toEqual("ikea");
    });
  });

  describe("displayWord()", () => {
    it("logs the rnadom qord to the console", () => {
      const game = new Game();
      const logSpy = jest.spyOn(console, "log");

      game.currentRound.randomWord = "gammalost";
      game.displayWord();
      expect(logSpy).toHaveBeenCalledWith("gammalost");
    });
  });

  describe("winOrLose()", () => {
    it("checks whether the user has won or lost the round", () => {
      const game1 = new Game();
      game1.currentRound.randomWord = "gammalost";
      mockInput.mockReturnValue("ikea");
      game1.userChoice();
      game1.winOrLose();

      const game2 = new Game();
      game2.currentRound.randomWord = "tvarhand";
      mockInput.mockReturnValue("ikea");
      game2.userChoice();
      game2.winOrLose();

      expect(game1.score).toEqual([0]);
      expect(game2.score).toEqual([1]);
    });
  });

  describe("playGame()", () => {
    it("plays ten rounds per game", () => {
      const game = new Game();
      game.currentRound.randomWord = "tvarhand";
      mockInput.mockReturnValue("ikea");

      game.playGame();

      expect(game.rounds).toEqual(11);
    });
  });

  describe("calculates the score", () => {
    it("returns the total score", () => {
      const game = new Game();

      game.currentRound.randomWord = "tvarhand";
      mockInput.mockReturnValue("ikea");

      game.playGame();

      expect(typeof game.calculateScore()).toEqual("number");
    });
  });
});
