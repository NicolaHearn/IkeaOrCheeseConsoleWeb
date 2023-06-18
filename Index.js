// const Game = require("./game.js");

import { Game } from "./game.js";
// const prompt = require("prompt-sync")();

function hideGreeting(e) {
  e.preventDefault();
  document.getElementById("playerNamePrompt").style.display = "none";
}

// function play(e) {
//   e.preventDefault();
//   const userName = document.getElementById("playerNameSubmit").value;
//   const playerWelcome = document.getElementById("playerWelcome");

//   playerWelcome.innerHTML = `Hello ${userName}, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts...`;
//   playerWelcome.style.display = "inline";

//   let game = new Game(userName);
//   game.playGame();
// }

// const playAgain = prompt("Would you like to play again? ");
// if (playAgain === "y") {
//   game = new Game(userName);
//   game.playGame();
// } else {
//   console.log("OK, thanks for playing, see you next time!");
// }
