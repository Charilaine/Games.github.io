
function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  // colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  noStroke();

  // Blauwe balk met hexadecimale kleurcode (regel 19)
  // Gebruik de juiste kleurcodering voor 'blue' (bijvoorbeeld '#0000FF')
  fill('rgba(173, 216, 230, 0.5)'); // lightblue met alpha
  rect(0,0,450,450);

  // Groene balk met nieuwe kleur (regel 17)
  fill('rgba(0, 0, 255, 0.5)'); // blue met alpha
  rect(75,0,75,450);

  // Onzichtbare blauwe balk met alpha (transparantie) (regel 20)
  fill('rgba(0, 0, 255, 0.3)'); // transparant-blue
  rect(0,150,450,150);

  // Cirkel toevoegen met vulkleur 0.3
  fill('rgba(0, 0, 139, 0.3)'); // darkblue met alpha
  ellipse(450, 225, 450);

  // Driehoek toevoegen voor figuur 1.9
  fill('rgba(255, 255, 255, 0.5)'); // white met alpha
  triangle(225, 0, 450, 225, 225, 450);
}
