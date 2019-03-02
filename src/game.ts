import {getBoard , getTimer} from "./index"
import { Timer } from "./timer";
import { Board } from "./board";

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
        this.isOn = true;
        console.log("Game started");
    }

    resetGame() {
        const timer:Timer = getTimer();
        const board:Board = getBoard();
        board.selectActiveButtonStop();
        board.resetButtons();
        timer.resetCountDown();
        this.lifesLeft = this.maxLifes;
        this.isOn = false;
        this.score = 0;
        this.updateScore(this.score);
        this.updateLifes(this.maxLifes);
        alert(`game over! Your score is:${this.score}`)
        console.log("Game reseted");
    }
    updateScore(score:number){
        const element: HTMLElement = document.querySelector("#score-display");
        this.score = score;
        element.innerHTML = `Score:${this.score}`
        console.log(this.score);
    }
    updateLifes(lifes:number){
        const element: HTMLElement = document.querySelector("#lifes-display");
        this.lifesLeft = lifes;
        element.innerText = `Lifes left: ${this.lifesLeft}`;
        if(!this.lifesLeft){
            this.resetGame();
        }
    }
    }

