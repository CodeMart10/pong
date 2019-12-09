//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let points = 0;
let points2 = 0;
let button = document.getElementsByClassName("button");
button[0].onclick = function () {
  location.reload();
}
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
let x = Math.floor(Math.random()*border.width);
let y = border.height/2 + ball.height;
let padY1 = 0;
let padY2 = 0;


//Clock
const time = setInterval(() => {
  let paragraph = document.querySelector("p");
  let paragraphs = document.getElementsByClassName('player2');
  //y-axis
  ballDiv.style.top = y + "px";
  if (y + ball.height >= border.height || y <= 0){
      ball.yDiff *= -1;
  }

  //x-axis
  ballDiv.style.left = x + "px";
  if (x + ball.width >= border.width || x <= 0){
      ball.xDiff *= -1;
       let body = document.querySelector("section");
      if(x == border.width - ball.width) {
        y = 200;
        x = 407;
        points = points + 1;
        stringPoint = points.toString();
        console.log(stringPoint);
        if(points == 1) {
          paragraph.innerHTML = "Player 1 : " + stringPoint;
        } else if(points !== 1) {
          paragraph.firstChild.remove();
          paragraph.innerHTML = "Player 1 :" + " " + stringPoint;
        }
      } else if(x == 0) {
        y = 200;
        x = 407;
        points2 = points2 + 1;
        console.log("score player one");
        if(points2 == 1) {
          paragraphs[0].innerHTML = "Player 2 : " + stringPoint;
        } else if(points2 !== 1) {
          paragraphs[0].firstChild.remove();
          paragraphs[0].innerHTML = "Player 2 :" + " " + stringPoint;
        }
      }
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
