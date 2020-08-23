import { Component,HostListener } from '@angular/core';
let Down_Pad = 0;
let Right_pad = 0;
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP__ARROW = 38,
  DOWN_ARROW = 40,
  DELETE_KEY = 46,
  W=87,
  A=65,
  S=83,
  D=68
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  public t=0;
  public idbox = 'box';
  Zindex = 0;
  boxCountTrack = 1;
  actionOnId: string;
  ngOnInit() { }
  constructor() { }

  AddBoxes() {
    this.idbox = "box"+this.boxCountTrack;
    this.boxCountTrack += 1;
    let htmlBox = document.createElement("div");
    htmlBox.id = this.idbox+"div";
    htmlBox.className = "Input";
    htmlBox.onclick = this.captureBoxElement;
    htmlBox.style.zIndex = this.Zindex as any;
    let inputField = document.createElement("input");
    inputField.value = "I am "+this.idbox;
    inputField.readOnly = true;
    inputField.id = this.idbox;
    // let data = document.createTextNode("I am a "+this.idbox);
    // htmlBox.appendChild(data);
    htmlBox.appendChild(inputField);
    console.log(htmlBox);
    let greyBox = document.querySelector(".Box_Rect");
    greyBox.appendChild(htmlBox);
    this.Zindex = this.Zindex + 1;




  }

  captureBoxElement = (e) => {
    console.log("click");
    this.actionOnId = e.target.id;
    console.log(this.actionOnId);
  }

  change(){
     this.t=1-this.t;
     console.log(this.t);
   }

  @HostListener('keydown', ['$event'])

  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if(this.t==0){
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.rightArrowPressed();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.leftArrowPressed();
    }
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.downArrowPressed();


    }
    if (event.keyCode === KEY_CODE.UP__ARROW) {
      this.upArrowPressed();
    }
    if (event.keyCode === KEY_CODE.DELETE_KEY) {
      this.remove();
    }
  }
    else{
      if (event.keyCode === KEY_CODE.D) {
        this.rightArrowPressed();
      }

      if (event.keyCode === KEY_CODE.A) {
        this.leftArrowPressed();
      }
      if (event.keyCode === KEY_CODE.S) {
        this.downArrowPressed();


      }
      if (event.keyCode === KEY_CODE.W) {
        this.upArrowPressed();
      }
      if (event.keyCode === KEY_CODE.DELETE_KEY) {
        this.remove();


    }

  }
}

  rightArrowPressed() {
    if (Right_pad <= 640) {
      document.getElementById(this.actionOnId+"div").style.paddingLeft = Right_pad + 'px';
      Right_pad = Right_pad + 5;
    }
    else {
      alert("Cannot Move out of this box");
    }

  }

  leftArrowPressed() {
    if (Right_pad >= 0) {
      Right_pad = Right_pad - 5;
      document.getElementById(this.actionOnId+"div").style.paddingLeft = Right_pad + 'px';
    }
    else {
      alert("Cannot Move out of this box");
    }

  }

  upArrowPressed() {
    if (Down_Pad >= 0 ) {
      Down_Pad = Down_Pad - 5;
      document.getElementById(this.actionOnId+"div").style.paddingTop = Down_Pad + 'px';
      // document.getElementById(this.actionOnId+"div").style.paddingTop = Down_Pad + 'px';
    }
    else {
      alert("Cannot Move out of this box");
    }
  }

  downArrowPressed() {
    if (Down_Pad <= 590) {
      document.getElementById(this.actionOnId+"div").style.marginTop = Down_Pad + 'px';
      Down_Pad = Down_Pad + 5;
    }
    else {
      alert("Cannot Move out of this box");
    }
  }


  remove = () => {
    console.log(this.actionOnId);
    let element = document.getElementById(this.actionOnId);
    element.remove();

  }


}
