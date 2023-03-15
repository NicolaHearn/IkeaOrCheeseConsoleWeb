const Logic = require('./logic'); 

describe(Logic, () => {
    it('has a method that returns true or false', () => {
        const game = new Logic();
        expect(game.playRound()).toEqual(true);
    });
});