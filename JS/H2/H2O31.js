class DobbelSteen {
  constructor(x) {
    this.x = x;
    this.y = 25;
    this.grootte = 200;
    this.diameterOgen = 50;
    this.ogen = null;
    this.R = null;
    this.G = null;
    this.B = null;
  }

  gooi() {
    this.ogen = floor(random(0, 6)) + 1;

    this.R = round(random(0, 255));
    this.G = round(random(0, 255));
    this.B = round(random(0, 255));
  }

  teken() {
    push();
    fill(this.R, this.G, this.B);
    rect(this.x, this.y, this.grootte, this.grootte);

    fill('black');
    if (this.ogen != 1) {
      ellipse(this.x + this.grootte / 6 * 1, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 6) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen > 3) {
      ellipse(this.x + this.grootte / 6 * 5, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 1 || this.ogen == 3 || this.ogen == 5) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 3, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen > 3) {
      ellipse(this.x + this.grootte / 6 * 1, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 6) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen != 1) {
      ellipse(this.x + this.grootte / 6 * 5, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    pop();
  }
}

let dob1, dob2, dob3;

function setup() {
  canvas = createCanvas(700, 300);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
  textFont("Georgia");
  textSize(80);
  frameRate(10);
  background('lightcyan');

  dob1 = new DobbelSteen(25);
  dob2 = new DobbelSteen(250);
  dob3 = new DobbelSteen(475);
}

function draw() {
  if (mouseIsPressed) {
    background('lightcyan');

    dob1.gooi();
    dob1.teken();

    dob2.gooi();
    dob2.teken();

    dob3.gooi();
    dob3.teken();

    let totaalAantalOgen = dob1.ogen + dob2.ogen + dob3.ogen;

    textSize(40);
    textAlign(CENTER, BOTTOM); 
    fill('black');
    text("Totaal: " + totaalAantalOgen, width / 2, height - 10);
  }
}

