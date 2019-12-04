let ball = document.body.querySelector("div")
let x = 2
let y = 20
let xs = 3
let ys = 2
let array = [];
let ballCoordinate = ball.getBoundingClientRect();
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
const speed = setInterval(() => {
  ball.style.top = y + "px";
  if (y >= 800 || y <= 0){
    ys = ys * -1;
  }
  y = y + ys;
console.log(move);
  ball.style.left = x + "px";
  if (x >= 1500 || x <= 0){
    xs = xs * -1;
  }
  x = x + xs;
  console.log(paddle1Coordinates.x);
  console.log(paddle2Coordinates.x);
  console.log(array);
}, 1);
window.addEventListener("keydown", event => {
  if(event.key == "w") {
    console.log(array);
    if(move == 0) {
      move = move + 25;
    }
    move = move - 25;
    event.preventDefault();
    paddle1.style.top = move + "px";
    array[0] = move;
    console.log(array[0]);
    console.log(array);
  } else if(event.key == "s") {
    if(move == 800) {
      move = move - 25;
    }
    move = move + 25;
    event.preventDefault();
    paddle1.style.top = move + "px";
    array[0] = move;
    console.log(array[0]);
    console.log(array);
  }
   if(event.key == "ArrowUp") {
     if(move2 == 0) {
       move2 = move2 + 25;
     }
    move2 = move2 - 25;
    event.preventDefault();
    paddle2.style.top = move2 + "px";
    array[1] = move2;
    console.log(array[1]);
    console.log(array);
  } else if(event.key == "ArrowDown") {
    if(move2 == 800) {
      move2 = move2 - 25;
    }
    move2 = move2 + 25;
    event.preventDefault();
    paddle2.style.top = move2 + "px";
    array[1] = move2;
    console.log(array[1]);
    console.log(array);
  }

});
