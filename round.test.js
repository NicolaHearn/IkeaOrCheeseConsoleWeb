const Round = require('./round.js');

describe(Round, () => {
    describe("the data this class holds", () => {
        it('contains a list of ikea words', () => {
            const round = new Round();
            expect(round.ikeaWords.includes("skogsfraken")).toEqual(true);
        });

        it('contains a list of cheese words', () => {
            const round = new Round();
            expect(round.cheeseWords.includes("gammalost")).toEqual(true);
        });

        it('contains a list of all words combined', () => {
            const round = new Round();
            const totalWords = round.ikeaWords.length + round.cheeseWords.length;
            expect(round.allWords.length).toEqual(totalWords);
        })
    });

});

