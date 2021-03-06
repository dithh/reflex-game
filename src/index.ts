import { Timer } from './timer';
import { Game } from './game';
import { Board } from './board';
const MAX_LIFES: number = 3;
const BUTTONS: number = 25;
const GAME_DURATION: number = 60;

const timer: Timer = new Timer(GAME_DURATION);
const game: Game = new Game(MAX_LIFES);
const board: Board = new Board(BUTTONS);

let startButton = document.querySelector(`#startButton`);
let resetButton = document.querySelector(`#resetButton`);

startButton.addEventListener(`click`, () => {
  game.startGame();
});

resetButton.addEventListener(`click`, () => {
  game.resetGame();
});

export function getGame() {
  return game;
}
export function getBoard() {
  return board;
}

export function getTimer() {
  return timer;
}
