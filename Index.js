const prompt = require('prompt-sync')();
const Game = require('./game');

console.log("Are you ready to play Ikea or Cheese?")
const userName = prompt("Please enter your name to start the game");
const game = new Game(userName);
game.playGame();

