var kleur = 'indianred';
var afstand;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  fill('black');

  mouseX = constrain(mouseX, 25, width - 25);
  mouseY = constrain(mouseY, 25, height - 25);

  // Bereken de afstand tussen de punt van de muis en het middelpunt van de zwarte bol
  afstand = dist(mouseX, mouseY, 225, 225);

  // Controleer voor rode kleur aan de rechterkant, linkerkant, bovenkant, onderkant en zwarte bol
  if (mouseX >= width - 30 || mouseX <= 30 || mouseY <= 30 || mouseY >= height - 30 || afstand <= 75) {
    kleur = 'red';
  } else {
    kleur = 'indianred';
  }
  // Achtergrondkleur veranderen op basis van de x-positie van JOS
  if (mouseX <= width / 2) {
    background('yellow');
  } else {
    background('white');
  }

  // Teken zwarte bol
  fill('black');
  ellipse(225, 225, 150);

  // Teken JOS met de bepaalde kleur
  tekenJos(mouseX, mouseY, kleur);

  // Toon de actuele waarde van de variabele afstand
  text("Afstand tot bol: " + round(afstand), 10, 40);
  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY), 10, 20);
}

function tekenJos(x, y, kleur) {
  push();
  translate(x, y);
  scale(1);
  noStroke();
  fill(kleur);
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
