class Round {
    constructor() {
        this.ikeaWords = ['tvarhand', 'skogsfraken', 'rsenskarm', 'koge', 'smaka', 'bygel', 'frotorp', 'tarno', 'kuggo', 'raskog'],
        this.cheeseWords = ['gammalost', 'kaffeost', 'vasterbottenost', 'potkase', 'tynjetaler', 'bergkase', 'lighvan', 'lajta', 'hajdu', 'mesesajt', 'balaton', 'alkmaar', 'kashkaval']
        this.allWords = this.ikeaWords.concat(this.cheeseWords);
    }

    random() {
        const min = 0;
        const max = this.allWords.length;
        const index = Math.floor(Math.random() * ((max - min + 1) + min));
        return this.allWords[index];
    }

    match(type) {
        return type;
    }


}

const round = new Round();
console.log(round.random());

module.exports = Round;