const mockInput = jest.fn();
jest.mock("prompt-sync", () => () => mockInput);

const Game = require('./game');

describe(Game, () => {
    afterEach(() => {
        jest.resetAllMocks();
    })
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

    describe('user input', () => {
        it('prompts the user to choose ikea or cheese', () => {
            const game = new Game();
            // const logSpy = jest.spyOn(console, 'log');
            game.playGame();
            expect(mockInput).toHaveBeenCalledWith('Please enter ikea or cheese');
        });

        it('should call "ikea"', () => {
            mockInput.mockReturnValue('ikea');
            const logSpy = jest.spyOn(console, 'log');

            const game = new Game();
            game.playGame();
            
            expect(logSpy).toHaveBeenCalledWith("ikea");
        });
    });

    })
})