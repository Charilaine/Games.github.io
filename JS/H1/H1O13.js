var xJOS;
var yJOS;

function setup() {
  canvas = createCanvas(450, 450); // Aangepaste canvasbreedte voor betere zichtbaarheid
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("xJOS: " + round(xJOS) + " (mouseX:" + round(mouseX) + ")", 10, 20);
  text("yJOS: " + round(yJOS) + " (mouseY:" + round(mouseY) + ")", 260, 20);

  // Beperk de horizontale positie van JOS tot de rand van het canvas
  xJOS = constrain(mouseX, 150, width - 150); 

  // Beperk de verticale positie van JOS tot de rand van het canvas
  yJOS = constrain(mouseY, 150, height - 150); 

  push();
  translate(xJOS, yJOS);
  scale(0.5); // Schaal Jos op 50% van zijn normale grootte

  // in de volgende regels wordt JOS getekend

  noStroke();
  fill('indianred');
  ellipse(0, 0, 150);
  fill('slategray');
  ellipse(-20, -30, 50);
  ellipse(20, -30, 50);
  fill('white');
  ellipse(-20, -25, 20, 40);
  ellipse(20, -25, 20, 40);
  fill('orange');
  ellipse(0, 10, 50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS
}
