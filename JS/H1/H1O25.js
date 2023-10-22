var straal = 20;
var xPositie;
var yPositie;
var xSnelheid = 8;
var ySnelheid = 5;
var onderlingeAfstand;

function setup() {
  var canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  frameRate(50);
  colorMode(RGB, 255, 255, 255, 1);
  background(0, 0, 75, 1);
  noStroke();
  textFont("VERDANA");
  textSize(140);
  xPositie = straal;
  yPositie = height / 2; 
}

function draw() {
  background(0, 0, 75, 0.05);

  // Blauwe bal in het midden onderin zonder vervagen
  fill(0, 0, 255, 1);
  ellipse(550, height - straal, 2 * straal); 

  xPositie += xSnelheid;
  yPositie += ySnelheid;

  // Witte bal die beweegt
  fill(255, 255, 255, 1); 
  ellipse(xPositie, yPositie, 2 * straal);

  onderlingeAfstand = dist(550, height - straal, xPositie, yPositie)
  if (onderlingeAfstand <= 2*straal) {
    eindScherm();
    noLoop();
  }


  gebruikBesturing();

  if (yPositie < straal || yPositie > height - straal){
    ySnelheid *= -1 
  }
  if (xPositie<straal || xPositie>width-straal){
    xSnelheid *= -1 
  }

}

function gebruikBesturing() {
  if (keyIsDown(LEFT_ARROW)) {
    xSnelheid += 1;
    ySnelheid += 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xSnelheid -= 1; 
    ySnelheid -=1;
  }
}

function eindScherm() {
  background('white');
  fill('black');
  text('GEVANGEN!', 75, 200);
  noLoop();
}
