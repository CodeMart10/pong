//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');

//Ball properties
const ball = {
  height: 100,
  width: 100,
  xDiff: 3,
  yDiff: 2,
  speed: .01,
};

//Ball and paddles starting position
let x = 700;
let y = 350;
let move = 100;
let move2 = 100;

//Ball and paddles live coordinates
let ballCoordinate = ballDiv.getBoundingClientRect();
let paddle1Coordinates = paddle1.getBoundingClientRect();
let paddle2Coordinates = paddle2.getBoundingClientRect();

//array for Paddles live coordinates
let array = [];

//Clock
const time = setInterval(() => {

  //y-axis
  ballDiv.style.top = y + "px";
  if (y >= 800 || y <= 0){
    ball.yDiff *= -1;
  }
  y += ball.yDiff;

  //x-axis
  ballDiv.style.left = x + "px";
  if (x >= 1500 || x <= 0){
    ball.xDiff *= -1;
  }
  x += ball.xDiff;

}, ball.speed);


window.addEventListener("keydown", event => {
  event.preventDefault();

//Up for left paddle
  if(event.key == "w") {
    if(move == 0) {
      move += 25;
    }
    move = move - 25;
    paddle1.style.top = move + "px";
    array[0] = move;
  }

//Down for left paddle
  if(event.key == "s") {
    if(move == 700) {
      move -= 25;
    }
    move += 25;
    paddle1.style.top = move + "px";
    array[0] = move;
  }

//Up for right paddle
  if(event.key == "ArrowUp") {
    if(move2 == 0) {
       move2 += 25;
    }
    move2 -= 25;
    paddle2.style.top = move2 + "px";
    array[1] = move2;
  }

//Down for right paddle
  if(event.key == "ArrowDown") {
    if(move2 == 700) {
      move2 -= 25;
    }
    move2 = move2 + 25;
    paddle2.style.top = move2 + "px";
    array[1] = move2;
  }
});
