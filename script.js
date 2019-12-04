let ball = document.body.querySelector("div")
let x = 2
let y = 20
let xs = 3
let ys = 2

const speed = setInterval(() => {
  ball.style.top = y + "px";
  if (y >= 800 || y <= 0){
    ys = ys * -1;
  }
  y = y + ys;



  ball.style.left = x + "px";
  if (x >= 1500 || x <= 0){
    xs = xs * -1;
  }
  x = x + xs;
}, 1);
let paddle1 = document.getElementById('paddle1');
let paddle2 = document.getElementById('paddle2');
paddle1.style.top = "100px";
paddle1.style.left = "-200px";
paddle2.style.top = "100px";
paddle2.style.left = "1400px";
move = 100;
move2 = 100;
let paddle1Coordinates = paddle1.getBoundingClientRect();
let paddle2Coordinates = paddle2.getBoundingClientRect();
window.addEventListener("keydown", event => {
  if(event.key == "w") {
    if(move == 0) {
      move = move + 25;
    }
    move = move - 25;
    event.preventDefault();
    paddle1.style.top = move + "px";
  } else if(event.key == "s") {
    if(move == 800) {
      move = move - 25;
    }
    move = move + 25;
    event.preventDefault();
    paddle1.style.top = move + "px";
  }
   if(event.key == "ArrowUp") {
     if(move2 == 0) {
       move2 = move2 + 25;
     }
    move2 = move2 - 25;
    event.preventDefault();
    paddle2.style.top = move2 + "px";
  } else if(event.key == "ArrowDown") {
    if(move2 == 800) {
      move2 = move2 - 25;
    }
    move2 = move2 + 25;
    event.preventDefault();
    paddle2.style.top = move2 + "px";
  }

});
