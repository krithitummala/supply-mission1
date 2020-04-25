var bullet,wall
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
}

function draw() {
  background(0);  
  drawSprites();
}