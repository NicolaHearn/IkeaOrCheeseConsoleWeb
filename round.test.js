const Round = require("./round");
const UserGuess = require("./userGuess");
const Words = require("./words");
//integration test

describe(Round, () => {
    it("generates a random word by calling random() from the words class", () => {
        const round = new Round();
        const result = round.displayWord();

        expect(typeof result).toEqual("string");
    });

    it("returns true if the user guess matches the category of the word they have been given", () => {
        const round = new Round();
        const words = new Words();
        const wordToGuess = round.displayWord();
        const userGuess = new UserGuess("ikea")
        const result = round.winOrLose("tvarhand", userGuess.userInput);

        expect(result).toEqual(true);
    })
})