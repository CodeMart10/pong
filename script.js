let ball = document.body.querySelector("div")
let x = 2
let y = 20
let xs = 2
let ys = 1.5

const speed = setInterval(() => {
  ball.style.top = y + "px";
  if (y >= 450 || y <= 0){
    ys = ys * -1;
  }
  y = y + ys;



  ball.style.left = x + "px";
  if (x >= 450 || x <= 0){
    xs = xs * -1;
  }
  x = x + xs;
}, 2);
