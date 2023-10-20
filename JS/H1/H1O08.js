var variabeleA = 13;
var variabeleB = 4;
var uitkomst;
var uitkomst2; 
var uitkomst3;

function setup() {
  canvas = createCanvas(1100, 800);  // Grootte van het canvas aangepast
  background('orange');
  canvas.parent('processing');
  textFont("Georgia");
  textSize(40);
  fill('white');
  noLoop();
}

function draw() {
  uitkomst = variabeleA + variabeleB;
  uitkomst2 = variabeleA - variabeleB;
  uitkomst3 = variabeleA * variabeleB;
  
  // Schrijf de rekensom op het scherm
  text("De som " + variabeleA + " * " + variabeleB + " heeft als uitkomst: " + uitkomst3, 50, 50);

  translate(100, 100);
  fill('dodgerblue');
  stroke('white');
  strokeWeight(10);
  
  // De vierkanten krijgen als zijde de waarde die in variabeleA en variabeleB staan.
  rect(0, 0, 10 * variabeleA, 10 * variabeleA);
  translate(10 * variabeleA + 50, 0);
  rect(0, 0, 10 * variabeleB, 10 * variabeleB);
  translate(10 * variabeleB + 150, 0);
  rect(0, 0, 10 * uitkomst3, 10 * uitkomst3);  // De derde uitkomst gebruiken
}
