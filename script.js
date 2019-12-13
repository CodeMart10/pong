//Variables holding nodes
let ballDiv = document.getElementById("ball")
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
let body = document.querySelector("section");
let button = document.getElementsByClassName("button");
let resetbutton = document.getElementsByClassName("Resetbutton");
let paragraph = document.querySelector("p");
let paragraphs = document.getElementsByClassName('player2');
let powerUps = document.createElement("div");
powerUps.className = "powerUps";
let power = document.getElementsByClassName("powerUps");
let canvas = document.querySelector("body");
//score
let points = 0;
let points2 = 0;

//reset button
button[0].onclick = function() {
  ball.xDiff = random(2) == 0 ? 2 : -2;
  ball.yDiff = random(2) == 0 ? 2 : -2;
  speed = 20;
  paddle2.style.height = "150px";
  pads.height2 = 150;
  paddle1.style.height = "150px";
  pads.height1 = 150;
  ballDiv.style.height = "20px";
  ballDiv.style.width = "20px";
  ball.width = 20;
  ball.height = 20;
  console.log(pads.height);
  location.reload();
}

//Ball properties
const ball = {
  height: 20,
  width: 20,
  xDiff: 0,
  yDiff: 0,
};

//ball speed
let speed = 20;

//random start
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Start Button (Space Bar)
document.body.onkeyup = function(e) {
  if (e.keyCode == 32 && ball.xDiff == 0) {
    ball.xDiff = random(2) == 0 ? 2 : -2;
    ball.yDiff = random(2) == 0 ? 2 : -2;
    speed = 20;
    paddle2.style.height = "150px";
    pads.height2 = 150;
    paddle1.style.height = "150px";
    pads.height = 150;
    ballDiv.style.height = "20px";
    ballDiv.style.width = "20px";
    ball.width = 20;
    ball.height = 20;
    console.log(pads.height);
    time = setInterval(movement, speed);
    spawnPower();
  }
}

//Paddles propeties
let pads = {
  x1: 5,
  x2: 990,
  height: 150,
  height2: 150,
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

function spawnPower(a) {

  let decider = Math.floor(Math.random() * 2);
  let yaxis = Math.floor(Math.random() * 400);
  let random_position_y = Math.floor(Math.random() * 300);

  //extends paddles
  function one() {
    if(ball.xDiff > 0) {
      paddle2.style.height = "50px";
      pads.height2 = 50;
    } else if(ball.xDiff < 0) {
      paddle1.style.height = "50px";
      pads.height = 50;
    }
      clearInterval(time);
      time = setInterval(movement, speed)
  }
  function three() {
    if(ball.xDiff > 0) {
      paddle1.style.height = "200px";
      pads.height = 200;
    } else if(ball.xDiff < 0) {
      paddle2.style.height = "200px";
      pads.height2 = 200;
    }
      clearInterval(time);
      time = setInterval(movement, speed)
  }
  function four() {
    if(ball.xDiff > 0) {
      paddle2.style.height = "100px";
      pads.height2 = 100;
    } else if(ball.xDiff < 0) {
      paddle1.style.height = "100px";
      pads.height = 100;
    }
      clearInterval(time);
      time = setInterval(movement, speed)
  }
  function two() {
    ballDiv.style.width = "10px";
    ballDiv.style.height = "10px";
    ball.width = 10;
    ball.height = 10;
  }
  let random = Math.floor(Math.random() * 4);
  let array = [one, two, three,four];
  if (a == 1) {
    array[random]();
  }
  if (decider = 1) {
    powerUps.style.left = "475px";
    powerUps.style.top = yaxis + "px";
    body.appendChild(powerUps);
    decider = 0;
  } else if (decider = 0) {
    spawnPower();
  }
}
//Clock
let time = setInterval(movement, speed);

function movement() {
  if (ball.width + x > 500 && powerUps.parentElement == body) {
    if (x < 500) {
      if (y + ball.height > powerUps.offsetTop + 10) {
        if (powerUps.offsetTop + 60 > y ) {
          body.removeChild(powerUps);
          spawnPower(1);
        }
      }
    }
  }
  //y-axis
  ballDiv.style.top = y + "px";
  if (y + ball.height >= border.height || y <= 0) {
    ball.yDiff *= -1;
  }

  //x-axis
  ballDiv.style.left = x + "px";

  //if ball hits left red wall
  if (x + ball.width >= border.width) {
    paddle2.style.height = "150px";
    pads.height2 = 150;
    paddle1.style.height = "150px";
    pads.height = 150;
    ballDiv.style.height = "20px";
    ballDiv.style.width = "20px";
    ball.width = 20;
    ball.height = 20;

    //ball position & color reset
    ballDiv.style.backgroundColor = '#F0F0F0'
    x = border.width / 2 - ball.width / 2;
    y = border.height / 2 - ball.height / 2;

    clearInterval(time);

    points += 1;

    //player 1 counter
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
  //if ball hits left blue wall
  if (x <= 0) {
    paddle2.style.height = "150px";
    pads.height2 = 150;
    paddle1.style.height = "150px";
    pads.height = 150;
    ballDiv.style.height = "20px";
    ballDiv.style.width = "20px";
    ball.width = 20;
    ball.height = 20;
    x = border.width / 2 - ball.width / 2;
    y = border.height / 2 - ball.height / 2;

    clearInterval(time);

    points2 = points2 + 1;

    //player 2 counter
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
    (padY2 + pads.height2 >= y)) {

    if (x + ball.width > pads.x2) {
      ball.yDiff *= -1;
    }

    //Ball hits paddle 2
    if (x + ball.width >= pads.x2) {
      ballDiv.style.backgroundColor = "#FA2A27"
      ball.xDiff *= -1;

      clearInterval(time)
      time = setInterval(movement, speed--)

      if (y + (ball.height / 2) < padY2 + (pads.height2 / 2) &&
        ball.yDiff > 0) {
        ball.yDiff *= -1;
      }

      if (y + (ball.height / 2) > padY2 + (pads.height2 / 2) &&
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

    //Ball hits paddle 1
    if (pads.x1 + pads.width >= x) {
      ball.xDiff *= -1;
      ballDiv.style.backgroundColor = "#384AFF";

      clearInterval(time)
      time = setInterval(movement, speed--)

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
    event.preventDefault();

    if (padY2 <= 0) {
      padY2 += pads.speed2;
    }
    padY2 -= pads.speed2;
    paddle2.style.top = padY2 + "px";
  }

  //Down for paddle 2
  if (event.key == "ArrowDown") {
    event.preventDefault();

    if (padY2 + pads.height2 >= border.height) {
      padY2 -= pads.speed2;
    }
    padY2 = padY2 + pads.speed2;
    paddle2.style.top = padY2 + "px";
  }

  //reset bound to R
  if (event.key == 'r') {
    location.reload();
  }
});
