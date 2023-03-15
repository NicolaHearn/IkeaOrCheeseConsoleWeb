const words = require('./words');

describe('words', () => {
    it('contains an array of Ikea words', () => {
        expect(words.ikea).toBeInstanceOf(Array);
    });

    it('contains the word "skogsfraken"', () => {
        expect(words.ikea.includes("skogsfraken")).toEqual(true);
    });
})