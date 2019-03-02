import { Timer } from "./timer";
import { Game } from "./game";
import { Board } from "./board";

let timer: Timer = new Timer(10);
let game: Game = new Game(3);
let board: Board = new Board(6);

let startButton = document.querySelector("#startButton");
let resetButton = document.querySelector(`#resetButton`);

startButton.addEventListener("click", function(){
    game.startGame();
    board.selectActiveButton();
    timer.startCountDown();
})

resetButton.addEventListener("click",(e)=>{
    game.resetGame();
    timer.resetCountDown();
    board.selectActiveButtonStop();
})