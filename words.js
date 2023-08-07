class Words {
  constructor() {
    this.ikeaWords = [
      "tvarhand",
      "skogsfraken",
      "rsenskarm",
      "koge",
      "smaka",
      "bygel",
      "frotorp",
      "tarno",
      "kuggo",
      "raskog"
    ];
    this.cheeseWords = [
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
        "kashkaval"
      ];
    this.allWords = this.ikeaWords.concat(this.cheeseWords);
  
  }

  // random() {
  //   const randomWord = new Random()
  //   return randomWord.random();
  // }
}

module.exports = Words;
