
function setup() {
  canvas = createCanvas(450, 450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34, 0.5);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  translate(225, 225);

  // Groot vierkant
  rect(0, 0, 200, 200);
  
  // Rotatie van 45 graden voor het grote vierkant
  rotate(45);
  rect(0, 0, 200, 200);

  // Geel vierkant met zijde 50 in het midden van het grote vierkant
  // Begin push-pop blok
  push();
  fill(255, 225, 0);
  rect(0, 0, 50, 50);
  // Einde push-pop blok
  rotate(-45);

  // Einde rotatie voor het gele vierkant
}
