export class Board {
    buttonsNumber: number;
    el: HTMLElement;
    interval: number;

    constructor(buttonsNumber) {
        this.el = document.querySelector(`#board`);
        this.buttonsNumber = buttonsNumber;
        for (let i = 1; i <= this.buttonsNumber; i++) {
            let button = document.createElement("div");
            button.className = "game-button";
            button.id = `button-${i}`;
            this.el.appendChild(button);
        }

    }
    selectActiveButton() {
        this.interval = setInterval(() => {
            // for (let i = 1; i<=this.buttonsNumber; i++){
            //     let button = document.querySelector(`#button-${i}`);
            //     button.classList.remove("game-button-active")
            // }
            this.resetButtons();
            let buttonId = Math.floor((Math.random() * this.buttonsNumber) + 1);
            console.log(buttonId)
            let button = document.querySelector(`#button-${buttonId}`)
            button.classList.add(`game-button-active`);

        }, 2000)

    }
    selectActiveButtonStop(){
        clearInterval(this.interval);
        
    }
 resetButtons(){
    for (let i = 1; i<=this.buttonsNumber; i++){
        let button = document.querySelector(`#button-${i}`);
        button.classList.remove("game-button-active")
    }
 }
}