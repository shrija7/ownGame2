var bg,bg2,a,a2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("x.jpg");
  bg2 = loadImage("t.jpg")
}

function setup() {
  createCanvas(1000,600);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 100);

  if(score === 4) {
    clear()
    background(bg2)
    fill("WHITE")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}