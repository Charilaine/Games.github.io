var kater,toren,piano;
var afstand = 275; 

function preload() {
  kater = loadImage("images/brieck.jpg");
  toren = loadImage("images/toren.jpg");
  piano = loadImage("images/piano.jpg");
}

function setup() {
  canvas = createCanvas(850, 300);
  canvas.parent('processing');
  noLoop();
  background('grey');
  fill('white');
  textFont("Verdana");
  textSize(14);
  noStroke();
  rect(25, 25, 250, 250);
  rect(25 + afstand, 25, 250, 250);
  rect(25 + 2 * afstand, 25, 250, 250);  
}

function draw() {
  text("afmeting: " + kater.width + " x " + kater.height, 25, 20);
  image(kater, 25, 25, 250, 250);
  text("afmeting: " + toren.width + " x " + toren.height, 25 + afstand, 20);
  image(toren, 25 + afstand, 25, 250, 250); 
  text("afmeting: " + piano.width + " x " + piano.height, 25 + 2 * afstand, 20);
  image(piano, 25 + 2 * afstand, 25, 250, 250);  
}

