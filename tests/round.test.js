const Round = require("../round");
const UserGuess = require("../userGuess");

describe(Round, () => {
  describe("randomWord()", () => {
    it("generates a random word by calling random()", () => {
      const round = new Round();
      const result = round.randomWord();

      expect(typeof result).toEqual("string");
    });
  });
  describe("winOrLose()", () => {
    it("returns true if the user guess matches the category (ikea or cheese) of the word they have been given", () => {
      const round = new Round();
      const result = round.winOrLose("tvarhand", "i");

      const newResult = round.winOrLose("kaffeost", "c");

      expect(result).toEqual(true);
      expect(newResult).toEqual(true);
    });

    it("returns false if the user guess does not match the category (ikea or cheese) of the word they have been given", () => {
      const round = new Round();
      const userGuess = new UserGuess("c");
      const result = round.winOrLose("tvarhand", userGuess.userInput);

      const newUserGuess = new UserGuess("i");
      const newResult = round.winOrLose("kaffeost", newUserGuess.userInput);

      expect(result).toEqual(false);
      expect(newResult).toEqual(false);
    });
  });
  describe("roundResult()", () => {
    it("returns the true/false result of the winOrLose function as text which can be displayed to a user", () => {
      const round = new Round();
      const userGuess = new UserGuess("c");
      const winOrLose = round.winOrLose("tvarhand", userGuess.userInput);

      const nextUserGuess = new UserGuess("i");
      const nextWinOrLose = round.winOrLose(
        "tvarhand",
        nextUserGuess.userInput
      );

      expect(round.roundResult(winOrLose)).toEqual("incorrect");
      expect(round.roundResult(nextWinOrLose)).toEqual("correct!");
    });
  });
});
