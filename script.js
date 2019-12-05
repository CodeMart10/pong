//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let ballCoordinates = ballDiv.getBoundingClientRect();
let bodyCoordinates = body.getBoundingClientRect();
//Ball properties
const ball = {
  height: ballCoordinates.height,
  width: ballCoordinates.width,
  xDiff: 1,
  yDiff: 1,
  speed: 20,
};


//Ball and paddles starting position
let x = 400;
let y = 20;
let move = 100;
let move2 = 100;



//Ball and paddles live coordinates

let paddle1Coordinates = paddle1.getBoundingClientRect();
let paddle2Coordinates = paddle2.getBoundingClientRect();

//array for Paddles live coordinates
let array = [110, 110];
let pad1 = array[0];
let pad2 = array[1];

let pads = {
  x1: 0,
  x2: 600,
  height: 50,
  width: 10,
  speed1: 25,
  speed2: 25
}

const border = {
  height: bodyCoordinates.height - 20,
  width: bodyCoordinates.width - 20
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


  if ((pads.x1 + pads.width > x) &&
      (pad1 < y + ball.height) &&
      (pad1 + pads.height > y)){
    ball.xDiff *= -1;
    ballDiv.style.backgroundColor = "red"
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
    move = move - pads.speed1;
    paddle1.style.top = move + "px";
    array[0] = move;
  }

//Down for left paddle
  if(event.key == "s") {
    if(move == border.height - pads.height) {
      move -= pads.speed1;
    }
    move += pads.speed1;
    paddle1.style.top = move + "px";
    array[0] = move;
  }

//Up for right paddle
  if(event.key == "ArrowUp") {
    if(move2 == 0) {
       move2 += pads.speed2;
    }
    move2 -= pads.speed2;
    paddle2.style.top = move2 + "px";
    array[1] = move2;
  }

//Down for right paddle
  if(event.key == "ArrowDown") {
    if(move2 == border.height - pads.height) {
      move2 -= pads.speed2;
    }
    move2 = move2 + pads.speed2;
    paddle2.style.top = move2 + "px";
    array[1] = move2;
  }
});
