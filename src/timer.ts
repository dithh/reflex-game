export class Timer {
    timeLeft: number;
    isOn: boolean;
    element: HTMLElement;
    interval;

    constructor(timeLeft: number) {
        this.element = document.querySelector("#timer");
        this.timeLeft = timeLeft;
        this.isOn = false;
        this.element.innerHTML = `Time left: ${String(timeLeft)}`;
        this.element.addEventListener("gameStarted", (e) => this.startCountDown());
        this.element.addEventListener("gameReset", (e)=> this.resetCountDown());
    }
    startCountDown() {
        if (!this.isOn) {
            this.isOn = true;
            this.interval = setInterval(() => {
                if (this.timeLeft) {
                    this.timeLeft--;
                    this.element.innerHTML = `Time left: ${String(this.timeLeft)}`;
                }
            }, 1000)
        }
    }
    resetCountDown(){
            clearInterval(this.interval);
            this.timeLeft = 60;
            this.element.innerHTML = `Time left: ${String(this.timeLeft)}`
            this.isOn = false;
        
    }

}