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
        this.lifesLeft = this.maxLifes;
        this.isOn = false;
        this.score = 0;
        console.log("Game reseted");
    }
}
