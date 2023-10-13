var xJOS1 = 225;
var xJOS2 = 225;
var xJOS3 = 225;
var yJOS1 = 75;
var yJOS2 = 235;
var yJOS3 = 395;

function setup() {
  canvas = createCanvas(450, 650);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
  fill('black');
}

function draw() {
  background('lavender');
  text("x1 = " + round(xJOS1), 10, 20);
  text("x2 = " + round(xJOS2), 10, 180);
  text("x3 = " + round(xJOS3), 10, 340);

  tekenJos(xJOS1, yJOS1);
  tekenJos(xJOS2, yJOS2);
  tekenJos(xJOS3, yJOS3);

  // Beweeg alle JOS-versies naar rechts met stapjes van 3 pixels
  xJOS1 += 3;
  xJOS2 += 3;
  xJOS3 += 3;

  // Constrain om te zorgen dat de poppetjes stoppen bij de rechterkant van het canvas
  xJOS1 = constrain(xJOS1, 75, width - 100);
  xJOS2 = constrain(xJOS2, 75, width - 100);
  xJOS3 = constrain(xJOS3, 75, width - 100);
}

function tekenJos(x, y) {
  push();
  translate(x + 75, y);
  scale(1); 
  noStroke();
  fill('indianred');
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
