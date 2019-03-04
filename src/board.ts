import { GameButton } from './gameButton';
import { getGame } from './index';
import { Game } from './game';
export class Board {
  buttonsNumber: number;
  el: HTMLElement;
  interval: number;
  btnArray: GameButton[] = [];

  constructor(buttonsNumber) {
    this.el = document.querySelector(`#board`);
    this.buttonsNumber = buttonsNumber;
    for (let i = 0; i < this.buttonsNumber; i++) {
      let button: GameButton = new GameButton(i);
      this.btnArray.push(button);
    }
  }
  selectActiveButton() {
    const game: Game = getGame();
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.resetButtons();
        if (game.isOn) {
          const buttonId = Math.floor(Math.random() * this.buttonsNumber);
          const button = document.querySelector(`#button-${buttonId}`);
          button.classList.add(`game-button-active`);
          this.btnArray[buttonId].isActive = true;
        }
      }, 3000);
    }
  }
  selectActiveButtonStop() {
    clearInterval(this.interval);
    this.resetButtons();
    this.interval = null;
  }
  resetButtons() {
    let wasMissed: boolean;
    let game = getGame();
    for (let i = 0; i < this.buttonsNumber; i++) {
      if (this.btnArray[i].isActive) {
        wasMissed = true;
      }
      const button: HTMLElement = document.querySelector(`#button-${i}`);
      button.classList.remove(`game-button-active`);
      this.btnArray[i].isActive = false;
    }
    if (wasMissed) {
      game.updateLifes(game.lifesLeft - 1);
    }
  }
}
