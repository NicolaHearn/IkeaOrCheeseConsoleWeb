const words = require('./words');

describe('words', () => {
    it('contains an array of Ikea words', () => {
        expect(words.ikea).toBeInstanceOf(Array);
    });

    it('has a list of ikea words which includes the word "skogsfraken"', () => {
        expect(words.ikea.includes("skogsfraken")).toEqual(true);
    });

    it('contains an array of Cheese words', () => {
        expect(words.cheese).toBeInstanceOf(Array);
    });

    it('has a list of cheese words which includes the word "gammalost"', () => {
        expect(words.cheese.includes("gammalost")).toEqual(true);
    });

})