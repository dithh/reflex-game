import { getBoard, getTimer } from './index';
import { Timer } from './timer';
import { Board } from './board';

export class Game {
  lifesLeft: number;
  maxLifes: number;
  score: number;
  isOn: boolean;

  constructor(maxLifes) {
    this.maxLifes = maxLifes;
    this.lifesLeft = maxLifes;
    this.score = 0;
    this.isOn = false;
  }

  startGame() {
    const timer: Timer = getTimer();
    const board: Board = getBoard();
    this.isOn = true;
    board.selectActiveButton();
    timer.startCountDown();
  }

  resetGame() {
    if (this.isOn) {
      this.lifesLeft = this.maxLifes;
      this.isOn = false;
      const timer: Timer = getTimer();
      const board: Board = getBoard();
      board.resetButtons();
      board.selectActiveButtonStop();
      timer.resetCountDown();
      alert(`game over! Your score: ${this.score}`);
      this.score = 0;
      this.updateScore(this.score);
      this.updateLifes(this.maxLifes);
    }
  }
  updateScore(score: number) {
    const element: HTMLElement = document.querySelector(`#score-display`);
    this.score = score;
    element.innerHTML = `Score:${this.score}`;
  }
  updateLifes(lifes: number) {
    const element: HTMLElement = document.querySelector(`#lifes-display`);
    this.lifesLeft = lifes;
    element.innerText = `Lifes left: ${this.lifesLeft}`;
    if (!this.lifesLeft) {
      this.resetGame();
    } else if (this.isOn) {
      alert(`You lost a life`);
    }
  }
}
