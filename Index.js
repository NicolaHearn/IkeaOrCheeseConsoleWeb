import { Game } from "./game.js";

// const prompt = require("prompt-sync")();

export function hideGreeting(e) {
  e.preventDefault();
  document.getElementById("playerNamePrompt").style.display = "none";
}

export function startGame(e, userName) {
  e.preventDefault();
  const playerWelcome = document.getElementById("playerWelcome");
  let game = new Game(userName);
  game.greetPlayer();
  game.playGame();
}

// const playAgain = prompt("Would you like to play again? ");
// if (playAgain === "y") {
//   game = new Game(userName);
//   game.playGame();
// } else {
//   console.log("OK, thanks for playing, see you next time!");
// }
