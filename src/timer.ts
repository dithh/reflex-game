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
                    alert("Game over");
                    getGame().resetGame();
                    getBoard().selectActiveButtonStop();
                    this.resetCountDown();
                    
                }
            }, 1000);
        }
    }
    resetCountDown(){
            clearInterval(this.interval);
            this.timeLeft = 60;
            this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
            this.isOn = false;
        
    }

}
import { getGame, getBoard } from "./index";