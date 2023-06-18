// const Game = require("./game");
// const prompt = require("prompt-sync")();

export function turnGreen() {
  document.querySelector("h1").style.color = "green";
}

export function hideGreeting() {
  document.getElementById("playerNamePrompt").style.display = "none";
}

export function showGreeting() {
  document.getElementById("playerNamePrompt").style.display = "inline";
}

export function greetPlayer(e) {
  e.preventDefault();
  const userName = document.getElementById("playerName").value;
  const playerWelcome = document.getElementById("playerWelcome");

  playerWelcome.innerHTML = `Hello ${userName}, is the word a type of cheese or an item on sale at Ikea? Type your answer (i or c) after the prompts...`;
  playerWelcome.style.display = "inline";
}

console.log("Let's play Ikea or Cheese");

// let game = new Game(userName);
// game.playGame();
// const playAgain = prompt("Would you like to play again? ");
// if (playAgain === "y") {
//   game = new Game(userName);
//   game.playGame();
// } else {
//   console.log("OK, thanks for playing, see you next time!");
// }
