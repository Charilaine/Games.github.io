function setup() {
  canvas = createCanvas(450, 450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  // Driehoek 1
  fill('pink');
  stroke('pink');
  beginShape();
  vertex(450, 0);    // Punt A (rechts boven)
  vertex(450, 450);  // Punt B (rechts onder)
  vertex(0, 225);    // Punt D (links midden)
  endShape(CLOSE);

  // Driehoek 2 
  fill('purple');
  stroke('purple');
  beginShape();
  vertex(0, 0);     // Punt A (linksboven)
  vertex(0, 450);   // Punt B (linksonder)
  vertex(450, 225); // Punt C (midden rechts
  endShape(CLOSE);
}
