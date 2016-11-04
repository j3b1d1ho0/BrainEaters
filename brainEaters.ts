let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
let hero = new Image();

hero.src = "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/13015350_570849623088772_6256827219269914478_n.jpg?oh=7943e2d3ebc82625cd746c5ea8fdbe7c&oe=58D50590";
window.addEventListener('load', () => {
      ctx.drawImage(hero, 0, 0, 64, 64);
  });

  ctx.fillStyle = "#85C1E9";
  ctx.fillRect(0 , 0, 800, 800);


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let wallY= 0;
let wallX = 0;
ctx.fillStyle="orange";

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 8; j++) {
        ctx.fillRect(wallX,wallY, 50, 50);
        wallX += 10;
    };
    wallX = getRandomIntInclusive(0, 800)
    wallY = getRandomIntInclusive(0, 800);
}
