import { Timer } from "./timer";
import { Game } from "./game";

let timer: Timer = new Timer(10);
let game: Game = new Game(3);

let startButton = document.querySelector("#startButton");
let resetButton = document.querySelector(`#resetButton`);

startButton.addEventListener("click", function(){
    game.startGame(timer.element);
})

resetButton.addEventListener("click",(e)=>{
    game.resetGame(timer.element);
})