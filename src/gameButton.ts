export class GameButton {
  isOn: boolean;
  id:number;
  el:HTMLElement = document.querySelector("#board")

  constructor(id:number){
      
      this.id = id;
      this.isOn = false;
      let button : HTMLElement = document.createElement("div");
      button.className = "game-button";
      button.id = `button-${id}`;
      this.el.appendChild(button);
  }
}