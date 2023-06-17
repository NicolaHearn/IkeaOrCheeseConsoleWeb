class Words {
  constructor() {
    (this.ikeaWords = [
      "tvarhand",
      "skogsfraken",
      "rsenskarm",
      "koge",
      "smaka",
      "bygel",
      "frotorp",
      "tarno",
      "kuggo",
      "raskog",
    ]),
      (this.cheeseWords = [
        "gammalost",
        "kaffeost",
        "vasterbottenost",
        "potkase",
        "tynjetaler",
        "bergkase",
        "lighvan",
        "lajta",
        "hajdu",
        "mesesajt",
        "balaton",
        "alkmaar",
        "kashkaval",
      ]);
    this.allWords = this.ikeaWords.concat(this.cheeseWords);
    this.randomWord = this.random();
  }

  random() {
    const min = 0;
    const max = this.allWords.length;
    const index = Math.floor(Math.random() * max);
    return this.allWords[index];
  }
}

// const round = new Round();
// console.log(round.randomWord);

module.exports = Words;
