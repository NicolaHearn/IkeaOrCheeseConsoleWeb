const Round = require("./round");
//integration test

describe(Round, () => {
    it("generates a random word by calling random() from the words class", () => {
        const round = new Round();
        const result = round.displayWord();

        expect(typeof result).toEqual("string");
    })
})