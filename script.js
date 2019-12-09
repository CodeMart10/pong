//Variables holding nodes
let ballDiv = document.getElementById("ball");
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");

//Ball properties
const ball = {
  height: 15,
  width: 15,
  xDiff: 1,
  yDiff: .5,
  speed: 1
};

//Paddles propeties
let pads = {
  x1: 0,
  x2: 770,
  height: 100,
  width: 30,
  speed1: 15,
  speed2: 15
}

//Border
const border = {
  height: 400,
  width: 800
}

//Ball and paddles starting/live position
let x = 200;
let y = 20;
let padY1 = 0;
let padY2 = 0;


//Clock
const time = setInterval(() => {

  //y-axis
  ballDiv.style.top = y + "px";
  if (y + ball.height >= border.height || y <= 0){
      ball.yDiff *= -1;
  }

  //x-axis
  ballDiv.style.left = x + "px";
  if (x + ball.width >= border.width || x <= 0){
      ball.xDiff *= -1;
  }

  //Paddle 2
  if ((padY2 < y + ball.height) &&
      (padY2 + pads.height >= y)) {

        if (x + ball.width > pads.x2){
          ball.yDiff *= -1;
        }

        else if (x + ball.width == pads.x2){
          ball.xDiff *= -1;
        }
  }

  //Paddle1
  if ((padY1 < y + ball.height) &&
  (padY1 + pads.height >= y)){

        if (pads.x1 + pads.width > x){
              ball.yDiff *= -1;
        }

        else if (pads.x1 + pads.width == x){
              ball.xDiff *= -1;
        }
 }

//ball slope
y += ball.yDiff;
x += ball.xDiff;

}, ball.speed);

//Keys pressed
window.addEventListener("keydown", event => {
  event.preventDefault();

//Up for paddle 1
  if(event.key == "w") {
    if(padY1 <= 0) {
      padY1 += pads.speed1;
    }
    padY1 -= pads.speed1;
    paddle1.style.top = padY1 + "px";
  }

//Down for paddle 1
  if(event.key == "s") {
    if(padY1 >= border.height - pads.height) {
      padY1 -= pads.speed1;
    }
    padY1 += pads.speed1;
    paddle1.style.top = padY1 + "px";
  }

//Up for paddle 2
  if(event.key == "ArrowUp") {
    if(padY2 <= 0) {
       padY2 += pads.speed2;
    }
    padY2 -= pads.speed2;
    paddle2.style.top = padY2 + "px";
  }

//Down for paddle 2
  if(event.key == "ArrowDown") {

    if(padY2 + pads.height >= border.height) {
      padY2 -= pads.speed2;
    }
    padY2 = padY2 + pads.speed2;
    paddle2.style.top = padY2 + "px";
  }
});
