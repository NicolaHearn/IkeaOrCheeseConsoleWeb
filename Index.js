const Game = require("./game");
const prompt = require("prompt-sync")();
const Round = require("./round");

const round = new Round();
console.log(round.random());
console.log(round.random());
console.log("Are you ready to play Ikea or Cheese?");
let userName = prompt("Please enter your name to start the game");
let game = new Game(userName);
game.playGame();
const playAgain = prompt("Would you like to play again?");
if (playAgain === "y") {
  username = prompt(
    "Let's start a new game! Please enter your name to start the game"
  );
  game = new Game(username);
  game.playGame();
} else {
  console.log("OK, thanks for playing, see you next time!");
}
