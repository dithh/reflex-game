import { getGame, getBoard } from './index';
import { Game } from './game';

export class Timer {
  gameDuration: number;
  timeLeft: number;
  isOn: boolean;
  element: HTMLElement = document.querySelector(`#timer`);
  interval: number;

  constructor(gameDuration: number) {
    this.gameDuration = gameDuration;
    this.timeLeft = gameDuration;
    this.isOn = false;
    this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
  }
  startCountDown() {
    if (!this.isOn) {
      this.isOn = true;
      this.interval = setInterval(() => {
        if (this.timeLeft) {
          this.timeLeft--;
          this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
        } else if (!this.timeLeft) {
          const game: Game = getGame();
          game.resetGame();
        }
      }, 1000);
    }
  }
  resetCountDown() {
    clearInterval(this.interval);
    this.timeLeft = this.gameDuration;
    this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
    this.isOn = false;
  }
}
