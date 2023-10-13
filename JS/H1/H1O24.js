var xJager1 = 50;
var yJager1 = 50;
var xProoi = 500;
var yProoi = 250;
var jagerBreedte = 100;
var jagerHoogte = 100;

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');

  // Besturing van jager (eerste speler)
  if (keyIsDown(LEFT_ARROW)) {
    xJager1 -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager1 += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager1 -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager1 += 5;
  }

  xJager1 = constrain(xJager1, 0, width - jagerBreedte);
  yJager1 = constrain(yJager1, 0, height - jagerHoogte);

  // Besturing voor prooi (tweede speler)
  if (keyIsDown(87)) { // W
    yProoi -= 5;
  }
  if (keyIsDown(83)) { // S
    yProoi += 5;
  }
  if (keyIsDown(65)) { // A
    xProoi -= 5;
  }
  if (keyIsDown(68)) { // D
    xProoi += 5;
  }

  // Constrain voor prooi
  xProoi = constrain(xProoi, 0, width - 50);
  yProoi = constrain(yProoi, 0, height - 50);

  // Prooi
  fill('darkkhaki');
  rect(xProoi, yProoi, 50, 50);

  // Jager 
  fill('darkkhaki');
  rect(xJager1, yJager1, jagerBreedte, jagerHoogte);

  // Controleer of de jager de prooi raakt
  if (
    (xJager1 + jagerBreedte > xProoi &&
      xJager1 < xProoi + 50 &&
      yJager1 + jagerHoogte > yProoi &&
      yJager1 < yProoi + 50)
  ) {
    fill('chartreuse');
    eindScherm();
  }
}

function eindScherm() {
  fill('chartreuse'); // Verander naar 'green' voor de gewenste kleur
  rect(xProoi, yProoi, 50, 50); // Tekenen van het blokje in de gewenste kleur
  noLoop(); // Stop de animatie
}
