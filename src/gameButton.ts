import { getGame } from './index';
import { Game } from './game';

export class GameButton {
  isActive: boolean;
  id: number;
  el: HTMLElement = document.querySelector(`#board`);

  constructor(id: number) {
    this.id = id;
    this.isActive = false;
    let button: HTMLElement = document.createElement(`div`);
    button.className = `game-button`;
    button.id = `button-${id}`;
    this.el.appendChild(button);
    button.addEventListener(`click`, () => {
      let game: Game = getGame();
      if (this.isActive && game.isOn) {
        game.updateScore(game.score + 1);
        this.isActive = false;
        button.classList.remove(`game-button-active`);
      } else if (game.isOn) {
        game.updateLifes(game.lifesLeft - 1);
        if (game.lifesLeft) {
          // alert(`You lost a life!`);
        }
      }
    });
  }
}
