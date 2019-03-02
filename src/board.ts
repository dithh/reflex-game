import { GameButton } from "./gameButton"

export class Board {
    buttonsNumber: number;
    el: HTMLElement;
    interval: number;

    constructor(buttonsNumber) {
        this.el = document.querySelector(`#board`);
        this.buttonsNumber = buttonsNumber;
        for (let i = 1; i <= this.buttonsNumber; i++) {
            let button: GameButton = new GameButton(i);
        }

    }
    selectActiveButton() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                // for (let i = 1; i<=this.buttonsNumber; i++){
                //     let button = document.querySelector(`#button-${i}`);
                //     button.classList.remove("game-button-active")
                // }
                this.resetButtons();
                const buttonId = Math.floor((Math.random() * this.buttonsNumber) + 1);
                console.log(buttonId);
                const button = document.querySelector(`#button-${buttonId}`);
                button.classList.add(`game-button-active`);

            }, 2000)
        }
    }
    selectActiveButtonStop() {
        clearInterval(this.interval);
        this.resetButtons();
        this.interval = null;

    }
    resetButtons() {
        for (let i = 1; i <= this.buttonsNumber; i++) {
            let button: HTMLElement = document.querySelector(`#button-${i}`);
            button.classList.remove("game-button-active")
        }
    }
}