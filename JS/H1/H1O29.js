var aantal = 5;
var Nbloemen = 6;

function setup() {
  canvas = createCanvas(600,450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function tekenBloem() {
  scale(0.5); 

  fill(178, 34, 34, 0.7);
  for (var n = 0; n < 5; n++) {
    ellipse(0, 0, 400, 50);
    rotate(360 / 5);
  }

  fill(255, 195, 0, 0.5);
  rect(0, 0, 75, 75);
}

function tekenBloemenrij() {
  for (var i = 0; i < Nbloemen; i++) {
    push()
    tekenBloem();
    pop();
    translate(150, 0);
  }
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20);

  translate(225,225);

  for (var n = 0;n < aantal;n++) {
    fill(178, 34, 34,0.7);
    ellipse(0,0,400,50);
    rotate(360 / aantal);
  }

  for (var n = 0;n < aantal;n++) {
    fill(255, 195, 0,0.5);
    rect(0,0,75,75);
    rotate(360 / aantal);
  }

  tekenBloemenrij();
  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}

