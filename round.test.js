const Round = require('./round'); 
const words = require('./words');

describe(Round, () => {
    it('has access to the ikea and cheese words', () => {
        const round = new Round(words);
        expect(round.words.includes("skogsfraken")).toEqual(true);
        expect(round.words.includes("gammalost")).toEqual(true);
        
    });

    
});