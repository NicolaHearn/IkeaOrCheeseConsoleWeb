const Round = require("./round");
const UserGuess = require("./userGuess");

describe(Round, () => {
    it("generates a random word by calling random()", () => {
        const round = new Round();
        const result = round.randomWord();

        expect(typeof result).toEqual("string");
    });

    it("returns true if the user guess matches the category (ikea or cheese) of the word they have been given", () => {
        const round = new Round();
        const userGuess = new UserGuess("ikea")
        const result = round.winOrLose("tvarhand", userGuess.userInput);

        const newUserGuess = new UserGuess("cheese")
        const newResult = round.winOrLose("kaffeost", newUserGuess.userInput);

        expect(result).toEqual(true)
        expect(newResult).toEqual(true);
    });

    it("returns false if the user guess does not match the category (ikea or cheese) of the word they have been given", () => {
        const round = new Round();
        const userGuess = new UserGuess("cheese")
        const result = round.winOrLose("tvarhand", userGuess.userInput);

        const newUserGuess = new UserGuess("ikea")
        const newResult = round.winOrLose("kaffeost", newUserGuess.userInput);

        expect(result).toEqual(false)
        expect(newResult).toEqual(false);
    });
}) 