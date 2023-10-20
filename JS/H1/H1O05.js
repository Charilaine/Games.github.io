function setup() {
  canvas = createCanvas(450, 450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // Teken de grond
  noStroke();
  fill('wheat');
  rect(0, 350, 450, 100);

  // Verplaats de oorsprong naar x = 90 en y = -10 (rechts en omhoog)
  translate(90, -10);

  // Teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(10, 270, 100, 100); // Aangepaste positie
  fill('gray');
  triangle(10, 270, 110, 270, 60, 190); // Aangepaste posities
  // Teken de deur
  noStroke();
  rect(30, 320, 30, 50); // Aangepaste positie

  // Verplaats de oorsprong naar x = 0 en y = 0 (terug naar de standaardpositie)
  translate(0, 0);

  // Teken de maan
  fill('khaki');
  ellipse(350, 100, 150, 150);
  // Teken de boom
  fill('sienna');
  rect(250, 240, 40, 140); // Aangepaste positie
  fill('olive');
  ellipse(270, 220, 100, 150); // Aangepaste positie
}
