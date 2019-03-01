import { Timer } from "./timer";
import { Game } from "./game";

let timer: Timer = new Timer(2);
let game: Game = new Game;

let startButton = document.querySelector("#startGameButton")

startButton.addEventListener("click", function(){
    game.startGame(timer.element);
})