class Logic {
    constructor(words) {
        this.words = words.ikea.concat(words.cheese);
    }

    playRound() {
        return true;
    }
}

module.exports = Logic;