let ball = document.body.querySelector("div")
let x = 2
let y = 20
const speed = setInterval(() => {
  ball.style.top = y + "px";
  if (y >= 190){
  y--;
}
  if (y <= 0){
    y++;
  }
  (y % 2 == 0) ? y = y + 2 : y = y - 2;

  ball.style.left = x + "px";
  if (x >= 190){
  x--;
}
  if (x <= 0){
    x++;
  }
  (x % 2 == 0) ? x = x + 2 : x = x - 2;
}, 10);
