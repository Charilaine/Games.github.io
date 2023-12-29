var spriteSheet;
var rij = 0;
var aantalSpriteRijen = 4;
var aantalSpriteKolommen = 12;

var schaal = 2.0;
var breedte;
var hoogte;
var sBr;
var sHo;
var br;
var ho;
var snelheid = 10;
var x = 190;
var y = 100;

var isToetsIngedrukt = false;

function preload() {
  spriteSheet = loadImage("images/sprites/Pony.png");
}

function setup() {
  canvas = createCanvas(460, 280);
  canvas.parent('processing');
  textFont("Georgia");
  textSize(18);
  noStroke();
  frameRate(10);
  breedte = spriteSheet.width;
  hoogte = spriteSheet.height;
  sBr = breedte / aantalSpriteKolommen;
  sHo = hoogte / aantalSpriteRijen;
  br = sBr * schaal;
  ho = sHo * schaal;
}

function draw() {
  background('lavender');

  if (isToetsIngedrukt) {
    if (keyIsDown(RIGHT_ARROW)) {
      rij = 2;
      x = constrain(x + snelheid, 0, width - br);
    } else if (keyIsDown(LEFT_ARROW)) {
      rij = 1;
      x = constrain(x - snelheid, 0, width - br);
    } else if (keyIsDown(UP_ARROW)) {
      rij = 3;
      y = constrain(y - snelheid, 0, height - ho);
    } else if (keyIsDown(DOWN_ARROW)) {
      rij = 0;
      y = constrain(y + snelheid, 0, height - ho);
    }
  }

  image(
    spriteSheet,
    x,
    y,
    br,
    ho,
    (frameCount % aantalSpriteKolommen) * sBr,
    rij * sHo,
    sBr,
    sHo
  );
}

function keyPressed() {
  isToetsIngedrukt = true;
}

function keyReleased() {
  isToetsIngedrukt = false;
}
