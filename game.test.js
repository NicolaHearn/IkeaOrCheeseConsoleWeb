const Game = require('./game');

describe(Game, () => {
    describe("game data", () => {
        it('at the beginning of the game, the number of rounds is set to zero', () => {
            const game = new Game();

            expect(game.rounds).toEqual(0);
        });
        it('at the beginning of the game, the score is set to an empty array', () => {
            const game = new Game();

            expect(game.score).toEqual([]);
        });
        it('at the beginning of the game, it initiates a new round', () => {
            const game = new Game();

            expect(game.currentRound.ikeaWords).toContain('tvarhand');
        });
    })
})