import { Timer } from "./timer";
import { Game } from "./game";
import { Board } from "./board";
const MAX_LIFES: number = 3;
const BUTTONS : number = 5;
const GAME_DURATION : number = 60;

let timer: Timer = new Timer(GAME_DURATION);
let game: Game = new Game(MAX_LIFES);
let board: Board = new Board(BUTTONS);

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