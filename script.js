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
button[0].onclick = function() {
  location.reload();
}

//Ball properties
const ball = {
  height: 20,
  width: 20,
  xDiff: 0,
  yDiff: 0,
};

let speed = 20;

// Start Button (Space Bar)
document.body.onkeyup = function(e) {
  if (e.keyCode == 32 && ball.xDiff == 0) {
    ball.xDiff = ballDiv.style.backgroundColor == 'blue' ? 2 : -2;
    ball.yDiff = 2;
    speed = 20;
    time = setInterval(movement, speed);
  }
}

//Paddles propeties
let pads = {
  x1: 5,
  x2: 990,
  height: 150,
  width: 5,
  speed1: 50,
  speed2: 50
};

//Border
const border = {
  height: 600,
  width: 1000
};

//Ball starting/live position
let x = border.width / 2 - ball.width / 2;
let y = border.height / 2 - ball.height / 2;

//paddles starting/live position
let padY1 = 0;
let padY2 = 450;

//Clock
let time = setInterval(movement, speed);

function movement() {
  //y-axis
  ballDiv.style.top = y + "px";
  if (y + ball.height >= border.height || y <= 0) {
    ball.yDiff *= -1;
  }

  //x-axis
  ballDiv.style.left = x + "px";

  if (x + ball.width >= border.width) {

    x = border.width / 2 - ball.width / 2;
    y = border.height / 2 - ball.height / 2;

    clearInterval(time);

    points += 1;

    if (points == 1) {
      paragraph.innerHTML = "" + points;
      ball.xDiff = 0;
      ball.yDiff = 0;
    }

    if (points !== 1) {
      paragraph.firstChild.remove();
      paragraph.innerHTML = "" + points;
      ball.xDiff = 0;
      ball.yDiff = 0;
    }
  }

  if (x <= 0) {

    x = border.width / 2 - ball.width / 2;
    y = border.height / 2 - ball.height / 2;

    clearInterval(time);

    points2 = points2 + 1;

    if (points2 == 1) {
      paragraphs[0].innerHTML = "" + points2;
      ball.xDiff = 0;
      ball.yDiff = 0;
    }

    if (points2 !== 1) {
      paragraphs[0].firstChild.remove();
      paragraphs[0].innerHTML = "" + points2;
      ball.xDiff = 0;
      ball.yDiff = 0;
    }

  }

  //Paddle 2
  if ((padY2 < y + ball.height) &&
    (padY2 + pads.height >= y)) {

    if (x + ball.width > pads.x2) {
      ball.yDiff *= -1;
    }

    if (x + ball.width >= pads.x2) {
      ballDiv.style.backgroundColor = "#FA2A27"
      ball.xDiff *= -1;

      clearInterval(time)
      time = setInterval(movement, speed -= 1)
      console.log(speed)

      if (y + (ball.height / 2) < padY2 + (pads.height / 2) &&
        ball.yDiff > 0) {
        ball.yDiff *= -1;
      }

      if (y + (ball.height / 2) > padY2 + (pads.height / 2) &&
        ball.yDiff < 0) {
        ball.yDiff *= -1;
      }
    }
  }

  //Paddle1
  if ((padY1 < y + ball.height) &&
    (padY1 + pads.height >= y)) {

    if (pads.x1 + pads.width > x) {
      ball.yDiff *= -1;
    }

    if (pads.x1 + pads.width >= x) {
      ball.xDiff *= -1;
      ballDiv.style.backgroundColor = "#384AFF";

      speed -= 1;
      clearInterval(time)
      time = setInterval(movement, speed)
      console.log(speed)

      if (y + (ball.height / 2) < padY1 + (pads.height / 2) &&
        ball.yDiff > 0) {
        ball.yDiff *= -1;
      }

      if (y + (ball.height / 2) > padY1 + (pads.height / 2) &&
        ball.yDiff < 0) {
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
  if (event.key == "w") {
    if (padY1 <= 0) {
      padY1 += pads.speed1;
    }
    padY1 -= pads.speed1;
    paddle1.style.top = padY1 + "px";
  }

  //Down for paddle 1
  if (event.key == "s") {
    if (padY1 >= border.height - pads.height) {
      padY1 -= pads.speed1;
    }
    padY1 += pads.speed1;
    paddle1.style.top = padY1 + "px";
  }

  //Up for paddle 2
  if (event.key == "ArrowUp") {
    if (padY2 <= 0) {
      padY2 += pads.speed2;
    }
    padY2 -= pads.speed2;
    paddle2.style.top = padY2 + "px";
  }

  //Down for paddle 2
  if (event.key == "ArrowDown") {

    if (padY2 + pads.height >= border.height) {
      padY2 -= pads.speed2;
    }
    padY2 = padY2 + pads.speed2;
    paddle2.style.top = padY2 + "px";
  }
});
