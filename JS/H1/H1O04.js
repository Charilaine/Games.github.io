function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);

  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  // teken het dak
  triangle(100, 280, 150, 230, 200, 280);

  // teken de deur
  noStroke();
  // Zorg ervoor dat de deur op de juiste plaats staat
  rect(130,330,30,50);

  // teken de maan
  fill('khaki');
  // Teken de maan met een diameter van 150 en 25 vanaf de rand
  ellipse(350, 100, 165);

  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  // Teken het groen van de boom met behulp van ellipse
  ellipse(320, 230, 100, 140);
}
