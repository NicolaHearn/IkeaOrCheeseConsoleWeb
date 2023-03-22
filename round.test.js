const Round = require('./round.js');

describe(Round, () => {
    describe('the data this class holds', () => {
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
        });
    });

    describe('random word', () => {
        it('returns a random word from the all words array', () => {
            const round = new Round();
            result = round.random();

            expect(round.allWords.indexOf(result)).toBeGreaterThanOrEqual(0);
            expect(round.allWords.indexOf(result)).toBeLessThanOrEqual(round.allWords.length);
        });
    });

    describe('word match', () => {
        it('takes an argument that is either "ikea" or "cheese"', () => {
            const round = new Round();
            
            // expect(round.match('ikea')).toEqual(round.ikeaWords);
            expect(round.match('monkey')).toEqual('You must enter either ikea or cheese');
        });

        it('returns true if the random word appears in the ikea array and the user inputs "ikea"', () => {
            const round = new Round();
            round.randomWord = 'tvarhand';

            expect(round.match('ikea')).toEqual(true);
        });

        it('returns false if the random word does not appear in the ikea array and user inputs "cheese"', () => {
            const round = new Round();
            round.randomWord = 'tvarhand';
            
            expect(round.match('cheese')).toEqual(false);
        });
        it('returns true if the random word does appears in the cheese array and user inputs "cheese"', () => {
            const round = new Round();
            round.randomWord = 'gammalost';
            
            expect(round.match('cheese')).toEqual(true);
        });

    });
});

