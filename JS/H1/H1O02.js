function setup() {
  canvas = createCanvas(450,450);
  background('orange');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);
  
  
    strokeWeight(5);
    stroke('pink');
    fill('darkred');
    beginShape();
    vertex(225, 225);
    vertex(300, 225);
    vertex(-1200, -425);  
    // Modified vertex coordinates
    endShape(CLOSE);
} 

function draw() {
  strokeWeight(5);
  stroke('pink');
  fill('darkred');
  beginShape();
  vertex(1200, 225);
  vertex(300, 225);
  vertex(-200, -425);  // Modified vertex coordinates
  endShape(CLOSE);
}
