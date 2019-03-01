export class Game {
    lifesLeft: number;
    maxLifes:number;
    score: number;
    isOn: boolean;

    constructor(maxLifes){
        this.maxLifes = maxLifes;
        this.lifesLeft = maxLifes;
        this.score = 0;
        this.isOn = false; 
    }

    startGame(el){
        let startGameEvent = new Event(`gameStarted`);
        el = el;
        this.isOn = true;
        el.dispatchEvent(startGameEvent);
        console.log("startGame Event dispatched");
    }
    resetGame(el){
        let resetGameEvent = new Event(`gameReset`)
        this.lifesLeft = this.maxLifes;
        this.isOn = false;
        this.score = 0;
        el = el;
        el.dispatchEvent(resetGameEvent);
        console.log("resetGame event dispatched")
    }
}
