export class Timer {
    timeLeft: number;
    isOn: boolean;
    element: HTMLElement;

    constructor(timeLeft: number) {
        this.element = document.querySelector("#timer");
        this.timeLeft = timeLeft;
        this.isOn = false;
        this.element.innerHTML = String(timeLeft);
        this.element.addEventListener("gameStarted", (e) => this.startCountDown())
    }
    startCountDown() {
        if (!this.isOn) {
            this.isOn = true;
            setInterval(() => {
                if (this.timeLeft) {
                    this.timeLeft--;
                    this.element.innerHTML = String(this.timeLeft);
                }
            }, 1000)
        }
    }

}