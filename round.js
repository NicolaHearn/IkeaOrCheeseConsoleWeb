class Round {
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

  match(type) {
    if (type === "ikea" || type === "cheese") {
      if (type === "ikea" && this.ikeaWords.includes(this.randomWord)) {
        return true;
      } else if (
        type === "cheese" &&
        this.cheeseWords.includes(this.randomWord)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return "You must enter either ikea or cheese";
    }
  }
}

// const round = new Round();
// console.log(round.randomWord);

export default Round;
