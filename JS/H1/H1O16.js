var diameter = 300;
var groeneY = 450; // Verticale positie van de blauwe cirkel (start bovenaan)
var blauweY = 0; // Verticale positie van de groene cirkel (start onderaan)
var beweegSnelheid = 1; // Beweegsnelheid van de cirkels

function setup() {
  createCanvas(1250, 450);
  noStroke();
  colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  background(255, 255, 255, 1); // Volledig ondoorzichtige witte achtergrond

  var middenX = width / 2; // x-positie in het midden van de pagina

  fill(255, 0, 0, 0.5); // Semi-transparante rode vulling
  ellipse(middenX, height / 2, diameter, diameter); // Cirkel in het midden van de pagina

  fill(0, 255, 0, 0.5); // Semi-transparante blauwe vulling
  ellipse(middenX, blauweY, diameter, diameter); // blauwe cirkel beweegt van boven naar beneden
  blauweY += beweegSnelheid;

  fill(0, 0, 255, 0.5); // Semi-transparante groene vulling
  ellipse(middenX, groeneY, diameter, diameter); // groene cirkel beweegt van onder naar boven
  groeneY -= beweegSnelheid;
}
