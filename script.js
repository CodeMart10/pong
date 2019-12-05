//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let ballCoordinate = ballDiv.getBoundingClientRect();
let bodyCoordinates = body.getBoundingClientRect();
//Ball properties
const ball = {
  height: ballCoordinate.height,
  width: ballCoordinate.width,
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
let paddle1Coordinates = paddle1.getBoundingClientRect();
let paddle2Coordinates = paddle2.getBoundingClientRect();

//array for Paddles live coordinates
let array = [];

//Clock
const time = setInterval(() => {
  //y-axis
  ballDiv.style.top = y + "px";
  if (y >= bodyCoordinates.height - ballCoordinate.height || y <= 0){
    ball.yDiff *= -1;
  }
  y += ball.yDiff;

  //x-axis
  ballDiv.style.left = x + "px";
  if (x >= bodyCoordinates.width - ballCoordinate.width || x <= 0){
    ball.xDiff *= -1;
  }
  x += ball.xDiff;

  if(paddle1Coordinates.x < x + ballCoordinate.width) {
      if( paddle1Coordinates.x + paddle1Coordinates.width > x) {
        if(array[0] < ballCoordinate.height + y) {
          if(array[0] + paddle1Coordinates.y > y) {
            console.log("player one's point!");
             ball.xDiff *= -1;
          }

        }

      }
  }
  if(paddle2Coordinates.x < x + ballCoordinate.width) {
      if(paddle2Coordinates.x + paddle2Coordinates.width > x) {
        if(array[0] < ballCoordinate.height + y) {
          if(array[0] + paddle2Coordinates.y > y) {
            console.log("Player two's point!");
             ball.xDiff *= -1;
          }

        }

      }
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
    if(move == bodyCoordinates.height - paddle1Coordinates.height) {
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
    if(move2 == bodyCoordinates.height - paddle2Coordinates.height) {
      move2 -= 25;
    }
    move2 = move2 + 25;
    paddle2.style.top = move2 + "px";
    array[1] = move2;
  }
});
console.log(paddle2Coordinates.x);
console.log(bodyCoordinates.width);
console.log(bodyCoordinates.height);
