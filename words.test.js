const Words = require("./words.js");

describe(Words, () => {
  describe("the data this class holds", () => {
    it("contains a list of ikea words", () => {
      const words = new Words();
      expect(words.ikeaWords.includes("skogsfraken")).toEqual(true);
    });

    it("contains a list of cheese words", () => {
      const words = new Words();
      expect(words.cheeseWords.includes("gammalost")).toEqual(true);
    });

    it("contains a list of all words combined", () => {
      const words = new Words();
      const totalWords = words.ikeaWords.length + words.cheeseWords.length;
      expect(words.allWords.length).toEqual(totalWords);
    });
  });

  describe("random word", () => {
    it("returns a random word from the all words array", () => {
      const words = new Words();
      result = words.random();

      expect(words.allWords.indexOf(result)).toBeGreaterThanOrEqual(0);
      expect(words.allWords.indexOf(result)).toBeLessThanOrEqual(
        words.allWords.length
      );
    });
  });
});
