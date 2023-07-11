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
});
