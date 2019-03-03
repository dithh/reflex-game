import { getGame, getBoard } from "./index";
import { Game } from "./game";
import { Board } from "./board";

export class Timer {
    gameDuration:number;
    timeLeft: number;
    isOn: boolean;
    element: HTMLElement;
    interval: number;



    constructor(gameDuration: number) {
        this.element = document.querySelector("#timer");
        this.gameDuration = gameDuration;
        this.timeLeft = gameDuration;
        this.isOn = false;
        this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
        this.element.addEventListener("gameStarted", () => this.startCountDown());
        this.element.addEventListener("gameReset", ()=> this.resetCountDown());
    }
    startCountDown() {
        if (!this.isOn) {
            this.isOn = true;
            this.interval = setInterval(() => {
                if (this.timeLeft) {
                    this.timeLeft--;
                    this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
                }
                else if (!this.timeLeft){
                    const game:Game = getGame();
                    const board:Board = getBoard();
                    game.resetGame();
                    board.selectActiveButtonStop();
                    this.resetCountDown();
                    
                }
            }, 1000);
        }
    }
    resetCountDown(){
            clearInterval(this.interval);
            this.timeLeft = this.gameDuration;
            this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
            this.isOn = false;
        
    }

}
