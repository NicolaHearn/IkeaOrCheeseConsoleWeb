const Game = require("./game");
const prompt = require("prompt-sync")();

console.log("Let's play Ikea or Cheese");
let userName = prompt("Please enter your name to start the game: ");

let game = new Game(userName);
game.playGame();
const playAgain = prompt("Would you like to play again? ");
if (playAgain === "y") {
  game = new Game(userName);
  game.playGame();
} else {
  console.log("OK, thanks for playing, see you next time!");
}
