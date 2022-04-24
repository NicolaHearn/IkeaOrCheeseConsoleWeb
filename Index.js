import ps from 'prompt-sync';
const prompt = ps();

let playerName = '';
const ikea = ['tvarhand', 'skogsfraken', 'rsenskarm', 'koge', 'smaka', 'bygel', 'frotorp', 'tarno', 'kuggo', 'raskog'];
const cheese = ['gammalost', 'kaffeost', 'vasterbottenost', 'potkase', 'tynjetaler', 'bergkase', 'lighvan', 'lajta', 'hajdu', 'mesesajt', 'balaton', 'alkmaar', 'kashkaval'];
const ikeaCheese = ikea.concat(cheese); 

let score = 0;
let guesses = 0;

let name = prompt('what is your name?');
console.log(`Hello ${name.trim()}, Let's play Ikea or Cheese`);

const word = () => {return ikeaCheese[Math.floor(Math.random(cheese.length))]};
word();
word();

class Game {
    constructor() {
        
    }
}