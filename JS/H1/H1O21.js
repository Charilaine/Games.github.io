var x = 120;
var snelheid = 5;
var diameter = 200;
var klikGedrukt = false; // Nieuwe variabele toegevoegd

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0, 0, width, 40);
  fill('black');
  text("De bol beweegt heen en weer (snelheid = " + snelheid + "). | Klik met je muis!", 10, 30);
  stroke('white');
  strokeWeight(10);

  // Voorwaarde voor kleur
  if (mouseIsPressed == true) {
    fill('red'); // Rood als er wordt geklikt
    diameter = 100; // Diameter wordt 100 als er wordt geklikt
    klikGedrukt = true; // Markeer dat er is geklikt
  } else if (snelheid > 0) {
    fill('green'); // Groen als naar rechts beweegt
  } else {
    fill('blue'); // Blauw als naar links beweegt
  }

  // Samengevoegde voorwaarde met de logische operator ||
  if (x > 880 || x < 120) {
    snelheid = -1 * snelheid;
  }

  x += snelheid;
  ellipse(x, 170, diameter);
  
  // Controleer of de cirkel weer naar zijn oorspronkelijke grootte moet worden hersteld
  if (!mouseIsPressed && klikGedrukt) {
    diameter = 200;
    klikGedrukt = false;
  }
}
