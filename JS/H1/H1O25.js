var straal = 20;
var xPositie;
var yPositie;
var xSnelheid = 8; // Initiële snelheid op 0
var ySnelheid = 0; // Initiële snelheid op 0
var onderlingeAfstand;
var spelActief = true;

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  frameRate(50);
  colorMode(RGB, 255, 255, 255, 1);
  background(0, 0, 75, 1);
  noStroke();
  textFont("Verdana");
  textSize(140);
  xPositie = width / 2; // Plaats de bal in het midden van het canvas
  yPositie = height / 2; // Plaats de bal in het midden van het canvas
}

function draw() {
  background(0, 0, 75, 0.05);
  fill(0, 0, 255, 1);
  noStroke();
  ellipse(550, height - straal, 2 * straal);
  xPositie += xSnelheid;
  yPositie += ySnelheid;

  // Beperk de positie van de bal binnen de grenzen van het canvas
  xPositie = constrain(xPositie, straal, width - straal);
  yPositie = constrain(yPositie, straal, height - straal);

  fill(255, 255, 255, 1);
  ellipse(xPositie, yPositie, 2 * straal);

  // Gebruik de functie dist om de onderlinge afstand te berekenen
  onderlingeAfstand = dist(xPositie, yPositie, 550, height - straal);

  if (onderlingeAfstand <= straal) {
    eindScherm();
  }

  // Schakel de besturing in
  gebruikBesturing();
}

function gebruikBesturing() {
  xSnelheid = 5;
  ySnelheid = 5;

  if (keyIsDown(LEFT_ARROW)) {
    xSnelheid = -1; // Links
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xSnelheid = 1; // Rechts
  }
  if (keyIsDown(UP_ARROW)) {
    ySnelheid = -1; // Omhoog
  }
  if (keyIsDown(DOWN_ARROW)) {
    ySnelheid = 1; // Omlaag
  }
}

function eindScherm() {
  if (spelActief) {
    background('white');
    fill('black');
    text("GEVANGEN!", 75, 200);
    noLoop();
    spelActief = false;
  }
}
