const Game = require("./game");
const Round = require("./round");
const prompt = require("prompt-sync")();

let sessionInPlay = "y";
while (sessionInPlay === "y") {
  console.log("Let's play Ikea or Cheese");
  let userName = prompt("Please enter your name to start the game: ");
  let game = new Game(userName);
  let round = new Round();

  while (game.gameInPlay()) {
    console.log(game.startRound());
    let userGuess = prompt("Is it ikea or cheese?");
    console.log(game.endRound(userGuess));
    } 

  console.log(game.displayScore());

  const playAgain = prompt("Would you like to play again? ");
  sessionInPlay = playAgain;
}

console.log("OK, thanks for playing, see you next time!");
