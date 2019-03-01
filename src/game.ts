export class Game {
    lifesLeft: number;
    score: number;
    isOn: boolean;
    constructor(){
        
    }

    startGame(el){
        let startGameEvent = new Event(`gameStarted`);
        el = el;
        el.dispatchEvent(startGameEvent);
        console.log("startGame Event dispatched");
    }
}
