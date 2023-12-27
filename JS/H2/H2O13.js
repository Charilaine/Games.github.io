var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var animatie = [];
var aantalBeeldjes = 6;
var nummer = 3;

var frameJos;
var xJos = 400;
var yJos = 300;
var laatsteRichting = "rechts";
var stapGrootte = 50;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  
  for (var i = 0; i < aantalBeeldjes; i++) {
    animatie[i] = loadImage("images/sprites/Jos100px/Jos_" + i + ".png");
    console.log("Afbeelding geladen:", animatie[i]);
  }  
}

function setup() {
  canvas = createCanvas(900, 600);
  canvas.parent('processing');
  frameRate(10);
  celGrootte = width / aantalKolommenRaster;
  frameJos = animatie[nummer];
}

function draw() {
  background(brug);
  tekenRaster();
  beweegJos();
  toonJos();
}

function beweegJos() {
  if (keyIsDown(LEFT_ARROW)) {
    xJos -= stapGrootte;
    nummer = 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos += stapGrootte;
    nummer = 1;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos -= stapGrootte;
    nummer = 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += stapGrootte;
    nummer = 5;
  }

  xJos = constrain(xJos, 0, width - celGrootte);
  yJos = constrain(yJos, 0, height - celGrootte);
}

function toonJos() {
  console.log("Nummer:", nummer);
  image(animatie[nummer], xJos, yJos, celGrootte, celGrootte);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0; rij < aantalRijenRaster; rij++) {
    for (var kolom = 0; kolom < aantalKolommenRaster; kolom++) {
      rect(kolom * celGrootte, rij * celGrootte, celGrootte, celGrootte);
    }
  }
  pop();
}
