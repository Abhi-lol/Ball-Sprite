
function setup() {
  createCanvas(400, 400);

  ball = createSprite(200, 300, 40, 100);
}

function draw() {
  background(30);
  drawSprites();

  if (keyIsDown(RIGHT_ARROW)) {
    ball.x = ball.x + 2
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.x = ball.x - 2
  }
}
