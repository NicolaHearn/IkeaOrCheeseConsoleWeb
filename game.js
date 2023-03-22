const Round = require('./round.js');

class Game {
    constructor() {
        this.player = '';
        this.score = []
        this.rounds = 0;
        this.currentRound = new Round();
    }
}

module.exports = Game;