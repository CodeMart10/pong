//Variables holding nodes
let ballDiv = document.getElementById("ball");
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let bodyCoordinates = body.getBoundingClientRect();
//Ball properties
const ball = {
  height: 50,
  width: 50,
  xDiff: 0.5,
  yDiff: 0.5,
  speed: 1
};

let pads = {
  x1: 0,
  x2: 590,
  height: 50,
  width: 10,
  speed1: 25,
  speed2: 25
}


//Ball and paddles starting position
let x = 200;
let y = 20;
let move = 0;
let move2 = 0;

const border = {
  height: 300,
  width: 600
}

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

  if (move2 < y + ball.height){
    if(move2 + pads.height >= y){
      if(x + ball.width >= pads.x2){
        ball.xDiff *= -1;
      }
    }
  }
  //Paddle1
  if(pads.x1 + pads.width >= x) {
    if (move < y + ball.height){
      if(move + pads.height >= y) {
          ball.xDiff *= -1;
        }
    }
  }
y += ball.yDiff;
x += ball.xDiff;
}, ball.speed);


window.addEventListener("keydown", event => {
  event.preventDefault();

//Up for left paddle
  if(event.key == "w") {
    if(move == 0) {
      move += pads.speed1;
    }
    move -= pads.speed1;
    paddle1.style.top = move + "px";
  }

//Down for left paddle
  if(event.key == "s") {
    if(move == border.height - pads.height) {
      move -= pads.speed1;
    }
    move += pads.speed1;
    paddle1.style.top = move + "px";
  }

//Up for right paddle
  if(event.key == "ArrowUp") {
    if(move2 == 0) {
       move2 += pads.speed2;
    }
    move2 -= pads.speed2;
    paddle2.style.top = move2 + "px";
  }

//Down for right paddle
  if(event.key == "ArrowDown") {

    if(move2 == border.height - pads.height) {
      move2 -= pads.speed2;
    }
    move2 = move2 + pads.speed2;
    paddle2.style.top = move2 + "px";
  }
});
