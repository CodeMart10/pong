let ball = document.body.querySelector("div")
let x = 2
let y = 20
let xs = 3
let ys = 2

const speed = setInterval(() => {
  ball.style.top = y + "px";
  if (y >= 400 || y <= 0){
    ys = ys * -1;
  }
  y = y + ys;



  ball.style.left = x + "px";
  if (x >= 400 || x <= 0){
    xs = xs * -1;
  }
  x = x + xs;
}, 1);
