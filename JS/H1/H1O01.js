function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // Middenpunt van de groene cirkel 25 pixels van de boven- en linkerrand
  let groeneCirkelX = 25 + 200;  // (25 voor afstand, 25 voor de rand, 200 voor de straal)
  let groeneCirkelY = 25 + 200;

  // groene cirkel zonder rand
  noStroke();
  fill('green');
  ellipse(groeneCirkelX, groeneCirkelY, 400);  // Diameter 400 (straal 200)

  // Witte cirkel zonder rand en met diameter van 300
  fill('white');
  ellipse(groeneCirkelX, groeneCirkelY, 300);

  // witte rechthoek met groene rand
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125, 125, 200, 200);
}