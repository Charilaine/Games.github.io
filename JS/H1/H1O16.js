var diameter = 300;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255, 255, 255, 1); // Fully opaque white background
  fill(255, 0, 0, 0.5); // Semi-transparent red fill
  ellipse(width / 2, height / 2, diameter); // Ellipse at the center of the canvas
}
