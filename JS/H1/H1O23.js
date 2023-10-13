var x = 50;
var y = 50;
var blokjeX = 800;
var blokjeY = 175;

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  y = constrain(y, 0, height - 100);
  x = constrain(x, 0, width - 100);

  // Controleer of het vierkant het rechterblokje raakt
  if (x + 100 >= blokjeX && x <= blokjeX + 75 && y + 100 >= blokjeY && y <= blokjeY + 50) {
    fill('chartreuse'); // kleur het rechterblokje groen
  } else {
    fill('darkkhaki');
  }

  rect(blokjeX, blokjeY, 75, 50); // teken het rechterblokje

  fill('moccasin');
  rect(x, y, 100, 100); // teken het vierkant
}
