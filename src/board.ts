export class Board {
    buttonsNumber: number;
    el = document.querySelector(`#board`);

    constructor(buttonsNumber){
        this.buttonsNumber = buttonsNumber;
        for (let i = 1 ; i <= buttonsNumber; i++ ){
            let button = document.createElement("div");
            button.className = "game-button";
            button.id = `button-${i}`;
            this.el.appendChild(button);
        }
        this.selectActiveButton();
    }
    selectActiveButton(){
        setInterval(()=>{  let buttonId = Math.floor((Math.random() * this.buttonsNumber) + 1);
            console.log(buttonId)
            let button = document.querySelector(`#button-${buttonId}`)
            button.classList.add(`game-button-active`);
            
        }
            ,2000)
            
    }
}