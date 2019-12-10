//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let button = document.getElementsByClassName("button");
let resetbutton = document.getElementsByClassName("Resetbutton");
let paragraph = document.querySelector("p");
let paragraphs = document.getElementsByClassName('player2');
//score
let points = 0;
let points2 = 0;

//reset button
button[0].onclick = function () {
  location.reload();
}

//Ball properties
const ball = {
  height: 15,
  width: 15,
  xDiff: 0,
  yDiff: 0,
};

let speed = 20;

// Start Button (Space Bar)
document.body.onkeyup = function(e){
    if(e.keyCode == 32 && ball.xDiff == 0){
      ballDiv.style.backgroundColor == 'blue' ? ball.xDiff = 1 : ball.xDiff = -1
      ball.yDiff = 1;
      time = setInterval(movement, speed = 20);

    }
}

//Paddles propeties
let pads = {
  x1: 5,
  x2: 590,
  height: 100,
  height2: 100,
  width: 5,
  speed1: 25,
  speed2: 25
};

//Border
const border = {
  height: 400,
  width: 600
};

//Ball starting/live position
let x = border.width/2 + ball.width/2;
let y = border.height/2 + ball.height/2;

//paddles starting/live position
let padY1 = 0;
let padY2 = 300;
function spawnPower() {
//extends paddles
function one() {
  paddle2.style.height = "150px";
  pads.height2 = 150;
  clearInterval(time);
  time = setInterval(movement, speed)
}
//increase ball sizes
function two() {
  ballDiv.style.width = "40px";
  ballDiv.style.height = "40px";
}
let array = [one,two];
let decider = Math.floor(Math.random()*2);
console.log(decider);
if(decider = 1) {
  let powerUps = document.createElement("div");
  powerUps.className = "powerUps";
  body.appendChild(powerUps);
  decider = 0;
  console.log(decider);
} else if(decider = 0) {
  console.log(decider);
  spawnPower();
}
}
spawnPower();
//Clock
let time = setInterval(movement, speed);

function movement() {
  //y-axis
  ballDiv.style.top = y + "px";
  if (y + ball.height >= border.height || y <= 0){
      ball.yDiff *= -1;
  }

  //x-axis
  ballDiv.style.left = x + "px";

      if(x + ball.width >= border.width) {

        y = border.height/2 + ball.height/2;
        x = border.width/2 + ball.width/2;

        clearInterval(time);

        points += 1;

        if(points == 1) {
          paragraph.innerHTML = "Player 1 : " + points;
          ball.xDiff = 0;
          ball.yDiff = 0;
        }

        if(points !== 1) {
          paragraph.firstChild.remove();
          paragraph.innerHTML = "Player 1 : " + points;
          ball.xDiff = 0;
          ball.yDiff = 0;
        }
      }

       if(x <= 0) {

         y = border.height/2 + ball.height/2;
         x = border.width/2 + ball.width/2;

        clearInterval(time);

        points2 = points2 + 1;

        if(points2 == 1) {
          paragraphs[0].innerHTML = "Player 2 : " + points2;
          ball.xDiff = 0;
          ball.yDiff = 0;
        }

        if(points2 !== 1) {
          paragraphs[0].firstChild.remove();
          paragraphs[0].innerHTML = "Player 2 : "  + points2;
          ball.xDiff = 0;
          ball.yDiff = 0;
        }

      }

  //Paddle 2
  if ((padY2 < y + ball.height) &&
      (padY2 + pads.height2 >= y)) {

        if (x + ball.width > pads.x2){
          ball.yDiff *= -1;
        }

        if (x + ball.width >= pads.x2){
          ballDiv.style.backgroundColor = "red"
          ball.xDiff *= -1;
          time = setInterval(movement, speed -= 1)

          if (y + (ball.height/2) < padY2 + (pads.height2/2) &&
             ball.yDiff > 0){
                ball.yDiff *= -1;
              }

          if (y + (ball.height/2) > padY2 + (pads.height2/2) &&
              ball.yDiff < 0){
                ball.yDiff *= -1;
              }
        }
  }

  //Paddle1
  if ((padY1 < y + ball.height) &&
      (padY1 + pads.height >= y)){

        if (pads.x1 + pads.width > x){
              ball.yDiff *= -1;
        }

        if (pads.x1 + pads.width >= x){
              ball.xDiff *= -1;
              ballDiv.style.backgroundColor = "blue";
              time = setInterval(movement, speed -= 1)

              if (y + (ball.height/2) < padY1 + (pads.height/2) &&
                  ball.yDiff > 0){
                    ball.yDiff *= -1;
                  }

              if (y + (ball.height/2) > padY1 + (pads.height/2) &&
                  ball.yDiff < 0){
                    ball.yDiff *= -1;
                  }
        }

  }

  //ball slope
  x += ball.xDiff;
  y += ball.yDiff;
};

//Keys pressed
window.addEventListener("keydown", event => {
  event.preventDefault();

//Up for paddle 1
  if(event.key == "w") {
    if(padY1 <= 0) {
      padY1 += pads.speed1;
      console.log(padY1);
    }
    padY1 -= pads.speed1;
    paddle1.style.top = padY1 + "px";
    console.log(padY1);
  }

//Down for paddle 1
  if(event.key == "s") {
    if(padY1 >= border.height - pads.height) {
      padY1 -= pads.speed1;
      console.log(padY1);
    }
    padY1 += pads.speed1;
    paddle1.style.top = padY1 + "px";
    console.log(padY1);
  }

//Up for paddle 2
  if(event.key == "ArrowUp") {
    if(padY2 <= 0) {
       padY2 += pads.speed2;
       console.log(padY2);
    }
    padY2 -= pads.speed2;
    paddle2.style.top = padY2 + "px";
    console.log(padY2);
  }

//Down for paddle 2
  if(event.key == "ArrowDown") {

    if(padY2 + pads.height2 >= border.height) {
      padY2 -= pads.speed2;
      console.log(padY2);
    }
    padY2 = padY2 + pads.speed2;
    paddle2.style.top = padY2 + "px";
    console.log(padY2);
  }
});
