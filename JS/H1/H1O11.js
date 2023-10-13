var horizontaalA = 454;
var verticaal = 170;
var horizontaalB = 667; 

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  stroke('white');
  strokeWeight(10);
  frameRate(50); 
}

function draw() {
  background('orange');
  fill('white');
  rect(0, 0, width, 40);
  fill('black');
  text("Positie A = " + horizontaalA + " Positie B = " + horizontaalB, 10, 30); 
  
  // Teken cirkel A
  fill('dodgerblue');
  ellipse(horizontaalA, verticaal, 200);
  horizontaalA += 2;

  // Teken cirkel B
  fill('darkred');
  ellipse(horizontaalB, verticaal, 200); // Opdracht 60
  horizontaalB += 1; // Opdracht 61
}
