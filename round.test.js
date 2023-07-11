const Round = require("./round");
const UserGuess = require("./userGuess");
const Words = require("./words");
//integration test

describe(Round, () => {
    it("generates a random word by calling random()", () => {
        const round = new Round();
        const result = round.randomWord();

        expect(typeof result).toEqual("string");
    });

    it("returns true if the user guess matches the category (ikea or cheese) of the word they have been given", () => {
        const round = new Round();
        const words = new Words();
        const userGuess = new UserGuess("ikea")
        const result = round.winOrLose("tvarhand", userGuess.userInput);

        const nextRound = new Round();
        const newWords = new Words();
        const newUserGuess = new UserGuess("cheese")
        const newResult = round.winOrLose("kaffeost", newUserGuess.userInput);

        expect(result).toEqual(true)
        expect(newResult).toEqual(true);
    });

    it("returns false if the user guess does not match the category (ikea or cheese) of the word they have been given", () => {
        const round = new Round();
        const words = new Words();
        const userGuess = new UserGuess("cheese")
        const result = round.winOrLose("tvarhand", userGuess.userInput);

        const nextRound = new Round();
        const newWords = new Words();
        const newUserGuess = new UserGuess("ikea")
        const newResult = round.winOrLose("kaffeost", newUserGuess.userInput);

        expect(result).toEqual(false)
        expect(newResult).toEqual(false);
    });

    // it("returns a score of 1 if the user matches the word to the wrong category", () => {
    //     const round = new Round();
    //     const words = new Words();
    //     const userGuess = new UserGuess("ikea")
    //     const winOrLose = round.winOrLose("tvarhand", userGuess.userInput);
    //     const result = round.roundScore();
        
    //     const nextRound = new Round();
    //     const newWords = new Words();
    //     const newUserGuess = new UserGuess("cheese")
    //     const newwinOrLose = round.winOrLose("kaffeost", newUserGuess.userInput);
    //     const nextResult = round.roundScore();

    //     expect(result).toEqual(1);
    //     expect(nextResult).toEqual(1);
    // });

//     it("returns a score of 0 if the user matches the word to the wrong category", () => {
//         const round = new Round();
//         const words = new Words();
//         const userGuess = new UserGuess("cheese")
//         const winOrLose = round.winOrLose("tvarhand", userGuess.userInput);
//         const result = round.roundScore();
        
//         const nextRound = new Round();
//         const newWords = new Words();
//         const newUserGuess = new UserGuess("ikea")
//         const newwinOrLose = round.winOrLose("kaffeost", newUserGuess.userInput);
//         const nextResult = round.roundScore();

//         expect(result).toEqual(0);
//         expect(nextResult).toEqual(0);
//     })
}) 